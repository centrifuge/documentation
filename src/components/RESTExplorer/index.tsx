import React, { useState, useCallback, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";
import styles from "../GraphQLExplorer/styles.module.css";

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

interface RESTExplorerProps {
  method?: string;
  url: string;
  children?: React.ReactNode;
}

export default function RESTExplorer({
  method = "GET",
  url: defaultUrl,
  children,
}: RESTExplorerProps) {
  const isDark = useIsDarkTheme();
  const [url, setUrl] = useState(defaultUrl);
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const runRequest = useCallback(async () => {
    setLoading(true);
    setError(null);
    setResponse(null);
    try {
      const res = await fetch(url);
      const json = await res.json();
      setResponse(JSON.stringify(json, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed");
    } finally {
      setLoading(false);
    }
  }, [url]);

  const theme = isDark ? themes.dracula : themes.github;

  return (
    <div className={styles.explorer}>
      <div className={styles.description}>{children}</div>

      <div className={styles.queryPanel}>
        <div className={styles.editorContainer}>
          <div className={styles.headerBar}>
            <span className={styles.methodBadge}>{method}</span>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              spellCheck={false}
              style={{
                flex: 1,
                fontFamily: "var(--ifm-font-family-monospace)",
                fontSize: "0.8125rem",
                color: "var(--ifm-font-color-base)",
                background: "transparent",
                border: "none",
                outline: "none",
                padding: 0,
              }}
            />
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.runButton}
            onClick={runRequest}
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
              navigator.clipboard.writeText(url).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              });
            }}
            title="Copy URL"
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
            <div className={styles.responseHeader}>
              <span className={styles.responseLabel}>Response</span>
              <button
                className={styles.closeButton}
                onClick={() => setResponse(null)}
                title="Close response"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Highlight theme={theme} code={response} language="json">
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
