// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Actian Integration Platform',
  tagline: 'The world’s first hybrid integration platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://douglaslloyd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/integration-platform-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'douglaslloyd', // Usually your GitHub org/user name.
  projectName: 'integration-platform-docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/douglaslloyd/IntegrationPlatform/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/Logos_Actian_3Color-White-Transparent.png',
      navbar: {
        title: 'Integration Platform',
        logo: {
          alt: 'Actian Logo',
          src: 'img/logos/ACTIAN-logo.svg',
         },
        items: [
          {
            href: "https://www.actian.com/",
            position: "right",
            label: "Actian Home",
            className: "github-button",
          },
          {
            href: "https://www.actian.com/blog/",
            position: "right",
            label: "Blog",
            className: "github-button",
          },
          {
            href: "https://communities.actian.com/s/",
            position: "right",
            label: "Community",
            className: "github-button",
          },
          {
            href: "https://esd.actian.com/",
            position: "right",
            label: "Downloads",
            className: "github-button hide-mobile",
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            includeCurrentVersion: true,
             dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/douglaslloyd/IntegrationPlatform/tree/gh-pages',
            position: 'right',
            className: 'header-github-link',
            title: "Actian Integration Platform Docs - GitHub",
          },
       ],
      },
      footer: {
        style: 'dark',
        links: [
/*           {
            title: 'QQQ',
            items: [
              {
                label: 'Legal',
                to: '/docs/legal',
              },
            ],
          }, */
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
      copyright: `Copyright © ${new Date().getFullYear()} Actian Corporation. All rights reserved.`,
    },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
