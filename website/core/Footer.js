/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('getting-started/prerequisites')}>
              Getting Started
            </a>
            <a href="https://app.swaggerhub.com/apis/centrifuge.io/cent-node/0.0.1"
              target="_blank"
              rel="noreferrer noopener">
              Centrifuge Node Api
            </a>
            <a href={this.docUrl('further-reading/code-of-conduct')}>
              Code of conduct
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://medium.com/centrifuge"
              target="_blank"
              rel="noreferrer noopener">
              Medium
            </a>
            <a
              href="https://twitter.com/centrifuge"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
            <a
              href="https://centrifuge-io.slack.com/"
              target="_blank"
              rel="noreferrer noopener">
              Slack
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/centrifuge/go-centrifuge" target="_blank" rel="noreferrer noopener">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/centrifuge/go-centrifuge/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>


        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
