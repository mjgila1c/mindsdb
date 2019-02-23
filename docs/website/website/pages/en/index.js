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

const siteConfig = require(process.cwd() + "/siteConfig.js");

function iconUrl(icon) {
  return siteConfig.baseUrl + "img/icon/" + icon;
}


class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Mindsdb Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
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

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
           
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );   

    const Features = props => (
      <Block layout="threeColumn">
        {[
          {
            content:
              "Create and use ML/AI with one line of code.",
            image: iconUrl("icon1.png"),
            imageAlign: "top",
            title: "Simple"
          },
          {
            content:
              "Get not just predictions but also explanations to why such predictions, when you should and should not trust the model and what can you do to improve the quality of your predictions.",
            image: iconUrl("icon2.png"),
            imageAlign: "top",
            title: "Interpretable"
          },
          {
            content:
              "Your data stays where you want it, mindsDB processes data locally as you can install it on your cloud or computer.",
            image: iconUrl("icon3.png"),
            imageAlign: "top",
            title: "Privacy driven"
          },
          {
            content:
              "MindsDB trains, tests and then selects the most accurate state of the art AI models to apply to your data. Giving you super accurate predictions and forecasting.",
            image: iconUrl("icon4.png"),
            imageAlign: "top",
            title: "Accurate Predictions"
          },
          {
            content:
              "We can improve the predictive power of your data by enabling the addition of the most reliable third party data from a variety of trusted sources.",
            image: iconUrl("icon5.png"),
            imageAlign: "top",
            title: "Connect External Data"
          },
          {
            content:
              "Exceptionally easy to use, provide mindsDB access to your data and ask it what you want to forecast, mindsDB takes it from there.",
            image: iconUrl("icon6.png"),
            imageAlign: "top",
            title: "Super ease to use"
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
