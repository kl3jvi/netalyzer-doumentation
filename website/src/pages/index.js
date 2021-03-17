const React = require("react");
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import GitHubLogo from "../assets/icons/github-logo.svg";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";


const HomeSplash = () => {
  const [featureWordIndex, setFeatureWordIndex] = useState(0);
  const featureWords = ["Dynamic", "Real-Time", "Performant"];

  const [isShow, setIsShow] = useState(true);

  const changeFeatureWordIndex = (index) => {
    setIsShow(false);
    setFeatureWordIndex(index);
    setIsShow(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (featureWordIndex >= featureWords.length - 1) {
        changeFeatureWordIndex(0);
      } else {
        changeFeatureWordIndex(featureWordIndex + 1);
      }
    }, 3600);
    return () => clearInterval(timer);
  }, [featureWordIndex]);

  return (
    <div className="hero home-splash">
      <div className="container">
        <div className="inner">
          <div className="padding-vert--md">
            <h1 className="title slogan">
              A&nbsp;
              <span className="feature-word">
                <CSSTransition
                  in={isShow}
                  timeout={2000}
                  classNames="feature-word-text"
                  appear={true}
                >
                  <span>{featureWords[featureWordIndex]}</span>
                </CSSTransition>
              </span>
              <span className="hide-on-mobile">&nbsp;</span>Android Network Analyzer
            </h1>
            <div className="subtitle">
              Netalyzer provides rich features for managing and controling wifi or data connections.
              It can aswell help diagnose various problems in your wifi network setup, Internet connectivity,
              and also dtect various issues on remote servers thanks to the wide range of tools it provides.
            </div>
          </div>

          <div className="pluginWrapper button-wrapper">
            <Link
              to="https://play.google.com/store/apps/details?id=com.kl3jvi.networkey"
              className=""
            >
              <GitHubLogo className="github-logo" />

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const LearnHow = () => (
  <div className="hero">
    <div className="learn-how">
      <div className="container">
        <div className="row">
          <div className="col col--5">
            <p className="hero__title">
              <small>Description</small>
            </p>
            <p className="hero__subtitle">
              <small>
                Netalyzer is equipped with a fast wifi device discovery tool, including all the LAN device's
                addresses, manufacturers and names. Further, Netalyzer contains standard net diagnostic
                tools such as ping, and, port scanner. Finally, it shows all neighbouring wi-fi networks
                together with additional details such as signal strength, encryption and router manufacturer
                to help discovering the best channel for a wireless router.
              </small>
            </p>
          </div>
          <div className="col">
            <img
              className="image"
              src="img/kott.png"
              align="right"
              alt="apisix-description"
            />
          </div>
          <div className="col">
            <img
              className="image"
              src="img/kot1.png"
              align="right"
              alt="apisix-description"
            />
          </div>
          <div className="col">
            <img
              className="image"
              src="img/kot2.png"
              align="right"
              alt="apisix-description"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Showcase = () => {
  const { siteConfig } = useDocusaurusContext();
  if (!(siteConfig.customFields.showcases || []).length) {
    return null;
  }
  const showcases = siteConfig.customFields.showcases.map((user) => (
    <a href={user.infoLink} key={user.infoLink} target="_blank">
      <img className="user-logo" src={user.image} alt={user.caption} />
    </a>
  ));
  const middleIndex = (showcases.length / 2).toFixed(0);

  return (
    <div className="hero text--center showcase">
      <div className="container">
        <div className="product-showcase-section">
          <h1>Who is Using This?</h1>
        </div>
        <p>
          This project is used by all these folks
          <br />
          Are you using this project?&nbsp;
          <a
            href="https://github.com/apache/apisix/blob/master/powered-by.md"
            target="_blank"
            rel="noopener"
          >
            <u>Add your company</u>
          </a>
        </p>
        <div className="user-logos">
          <div className="logo-row">
            <span className="user-logos-container">
              <section>
                <span>{showcases.slice(0, middleIndex)}</span>
                <span>{showcases.slice(0, middleIndex)}</span>
              </section>
            </span>
          </div>
          <div className="logo-row">
            <span className="user-logos-container">
              <section>
                <span>{showcases.slice(middleIndex, showcases.length)}</span>
                <span>{showcases.slice(middleIndex, showcases.length)}</span>
              </section>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};



const NewsletterSection = () => {

  return (
    <div className="newsletter">
      <div className="center-elem news-logo">

        <img width="100" src='img/logo2.svg'></img>



        {/* <svg className="news-logo-svg" width="185" height="156" viewBox="0 0 185 156" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 155.5L94 0L185 155.5H140L94 83L42.5 155.5H0Z" fill="#F8423F" />
          <path d="M94 82.5L42.5 155H0L76.5 57L94 82.5Z" fill="url(#paint0_linear)" />
          <path d="M140 155.5H185L94 0L140 155.5Z" fill="url(#paint1_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="222.5" y1="50" x2="85" y2="223.5" gradientUnits="userSpaceOnUse">
              <stop offset="0.536111" stopColor="#FC0A04" />
              <stop offset="1" stopColor="#CF0500" stopOpacity="0.77" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="139.5" y1="1.50861e-06" x2="226" y2="136" gradientUnits="userSpaceOnUse">
              <stop offset="0.473466" stopColor="#E2423E" />
              <stop offset="1" stopColor="#E2423E" stopOpacity="0.77" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>
      <div className="center-elem news-text">
        <h2>Stay up to date about all Netalyzer™ News</h2>
      </div>
      <div className="center-elem">
        <a className="news-button" href="/docs/general/subscribe-guide">Subscribe</a>
      </div>
    </div>
  );
};

const Index = (props) => {
  return (
    <Layout>
      <HomeSplash />
      <LearnHow />

      <NewsletterSection />
    </Layout>
  );
};

export default Index;
