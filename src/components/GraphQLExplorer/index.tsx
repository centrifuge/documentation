import React, { useState, useCallback, useRef, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./styles.module.css";

function useIsDarkTheme() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const el = document.documentElement;
    const update = () => setIsDark(el.getAttribute("data-theme") === "dark");
    update();
    const observer = new MutationObserver(update);
    observer.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

interface GraphQLExplorerProps {
  endpoint?: string;
  query: string;
  children?: React.ReactNode;
}

export default function GraphQLExplorer({
  endpoint = "https://api.centrifuge.io",
  query: defaultQuery,
  children,
}: GraphQLExplorerProps) {
  const isDark = useIsDarkTheme();
  const [query, setQuery] = useState(defaultQuery);
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  const runQuery = useCallback(async () => {
    setLoading(true);
    setError(null);
    setResponse(null);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const json = await res.json();
      setResponse(JSON.stringify(json, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed");
    } finally {
      setLoading(false);
    }
  }, [endpoint, query]);

  const handleScroll = useCallback(() => {
    if (textareaRef.current && preRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop;
      preRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const ta = e.currentTarget;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const updated = query.substring(0, start) + "  " + query.substring(end);
        setQuery(updated);
        requestAnimationFrame(() => {
          ta.selectionStart = ta.selectionEnd = start + 2;
        });
      }
    },
    [query]
  );

  const theme = isDark ? themes.dracula : themes.github;

  return (
    <div className={styles.explorer}>
      <div className={styles.description}>{children}</div>

      <div className={styles.queryPanel}>
        <div className={styles.editorContainer}>
          <div className={styles.headerBar}>
            <span className={styles.methodBadge}>POST</span>
            <span className={styles.endpointUrl}>{endpoint}</span>
          </div>
          <Highlight theme={theme} code={query} language="graphql">
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre
                ref={preRef}
                className={styles.highlightedPre}
                style={style}
              >
                <code>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </code>
              </pre>
            )}
          </Highlight>
          <textarea
            ref={textareaRef}
            className={styles.editorTextarea}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onScroll={handleScroll}
            onKeyDown={handleKeyDown}
            spellCheck={false}
          />
        </div>

        <div className={styles.actions}>
          <button
            className={styles.runButton}
            onClick={runQuery}
            disabled={loading}
          >
            {loading ? (
              "Running\u2026"
            ) : (
              <>
                Run
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 2l10 6-10 6V2z" />
                </svg>
              </>
            )}
          </button>

          <button
            className={styles.copyButton}
            onClick={() => {
              navigator.clipboard.writeText(query).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              });
            }}
            title="Copy query"
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy
              </>
            )}
          </button>

          {error && (
            <span className={`${styles.statusText} ${styles.error}`}>
              {error}
            </span>
          )}
        </div>

        {response && (
          <div className={styles.responseWrapper}>
            <div className={styles.responseLabel}>Response</div>
            <Highlight theme={theme} code={response} language="typescript">
              {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre className={styles.responsePre} style={style}>
                  <code>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </code>
                </pre>
              )}
            </Highlight>
          </div>
        )}
      </div>
    </div>
  );
}
