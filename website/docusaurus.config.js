module.exports = {
  title: "Netalyzer™",
  tagline:
    "Netalyzer is an Android app for monitoring wifi and data connections.",
  url: "https://apisix.apache.org/",
  baseUrl: "/",
  organizationName: "Netalyzer",
  projectName: "netalyzer-website",
  favicon: "img/favicon.png",
  customFields: {
    tagline2:
      "Apache APISIX software provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more.",
    showcases: require("./static/data/showcases.json"),
    repoUrl: "https://github.com/apache/apisix",
    docsUrl: "",
    team: require("./static/data/team.json"),
    allRepos: [
      "apache/apisix",
      "apache/apisix-dashboard",
      "apache/apisix-website",
      "apache/apisix-docker",
      "apache/apisix-ingress-controller",
      "apache/apisix-helm-chart",
      "apache/apisix-control-plane",
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        label: "English",
      },
      zh: {
        label: "简体中文",
      },
    },
  },
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  noIndex: true,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: "docs/general",
          routeBasePath: "/docs/general",
          sidebarPath: require.resolve("./docs/general/sidebars.json"),
          editUrl: function ({
            locale,
            version,
            versionDocsDirPath,
            docPath,
            permalink,
          }) {
            return `https://github.com/apache/apisix-website/edit/master/website/docs/general/${docPath}`;
          },
        },
        blog: {
          path: "blog",
        },
        theme: {
          customCss: "../src/css/customTheme.css",
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Netalyzer™",
      logo: {
        src: "img/logo2.svg",
      },
      
      items: [
        
        {
          to: "/docs/general/security",
          label: "Docs",
          position: "right",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "right",
        },
        {
          to: "/team",
          label: "Team",
          position: "right",
        },
        {
          to: "/help",
          label: "Help",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "ASF",
          items: [
            {
              label: "Foundation",
              to: "https://www.apache.org/",
            },
            {
              label: "License",
              to: "https://www.apache.org/licenses/",
            },
            {
              label: "Security",
              to: "https://www.apache.org/security/",
            },
            {
              label: "Sponsorship",
              to: "https://www.apache.org/foundation/sponsorship.html",
            },
            {
              label: "Thanks",
              to: "https://www.apache.org/foundation/thanks.html",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub Issue Tracker",
              to: "https://github.com/apache/apisix/issues",
            },
            {
              label: "Slack",
              to: "https://apisix.slack.com/",
            },
            {
              label: "Twitter",
              to: "https://twitter.com/ApacheAPISIX",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "https://apisix.apache.org/blog/",
            },
          ],
        },
      ],
      logo: {
        alt: "Apache Software Foundation",
        src: "img/asf_logo_wide_small.png",
        href: "https://www.apache.org/",
      },

      copyright:
        "Copyright © 2021 Klejvi Kapaj.",
    },
    algolia: {
      apiKey: "287206c9872faf0e77b7c5228d4c3789",
      indexName: "apache_apisix",
      contextualSearch: true,
    },
    colorMode: {
      disableSwitch: true,
    },
    metadatas: [
      {
        name: "description",
        content:
          "Apache APISIX is a dynamic, real-time, high-performance Cloud-Native API gateway, based on the Nginx library and etcd.",
      },
    ],
    gtag: {
      trackingID: "G-WQLBQL6GY3",
    },
  },
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
  ],
};
