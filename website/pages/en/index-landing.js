/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">

        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">

      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
<h2 className="projectTitle">
    Centrifuge Operating System
    <small>{siteConfig.tagline}</small>
    </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>

        <div className="inner">

          <ProjectTitle />
          <p className="splashDescription">
          Centrifuge is an open, decentralized operating system which provides a method to create, exchange, and use the data that is used in the financial supply chain. It creates transparent and shareable relationships between interacting companies.
          </p>

          <PromoSection>
            <Button className="primary" href="#try">Lean more about Centrifuge OS</Button>

          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />

  </Container>
);

const GettingStarted = () => (
        <div  className=" lightBackground ">

            <div className="container getting-started paddingTop paddingBottom" style={{textAlign: 'center'}}>
            <h2 className="section-title">Start building on Centrifuge OS</h2>
                <Block layout="fourColumn">
                    {
                        siteConfig.quickLinks.map(section => (

                            {
                                title: section.title,
                                content: section.description,
                                image: section.image,
                                imageAlign: 'top',
                                imageLink: section.infoLink
                            }

                        ))

                    }
                </Block>
            </div>

        </div>
);






const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }


    const showcase = <Block layout="threeColumn">
        {
            siteConfig.users.filter(user => user.pinned).map(user => (

                {
                    title:user.caption,
                    content: user.description,
                    image: user.image,
                    imageAlign: 'top',
                    imageLink: user.infoLink
                }

            ))
        }
    </Block>



  return (
    <div className="productShowcaseSection paddingTop paddingBottom">

      <div className="users">
        <h2>Who is Using This?</h2>
        {showcase}
        </div>

    </div>
  );
};

class IndexLanding extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div className="homePage">
        <div id="particle-canvas"></div>
        <HomeSplash language={language} />
        <div className="mainContainer">


          <GettingStarted />


          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = IndexLanding;
