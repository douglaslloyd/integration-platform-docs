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
  favicon: 'img/logos/favicon.ico',

  // Set the production url of your site here
  //url: 'https://douglaslloyd.github.io', // GitHub Pages
  url: 'https://main--thriving-buttercream-c6ef77.netlify.app/', // Netlify
  // Set the /<baseUrl>/ pathname under which your site is served
  //baseUrl: '/integration-platform-docs/', // GitHub Pages - '/<projectName>/'
  baseUrl: '/', // AWS, Netlify

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'douglaslloyd', // Usually your GitHub org/user name.
  projectName: 'integration-platform-docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Load the Feedback Rocket SDK on every page
  scripts: [
    {
      async: true,
      src: 'https://www.feedbackrocket.io/sdk/v1.2.js',
      'data-fr-id': 'IA-9no9dntmzi4xHLP63R',
      'data-fr-theme': 'dynamic',
      'data-fr-title': 'Your feedback helps us improve our docs.',
    }
  ],

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
          lastVersion: 'current',
           versions: {
            current: {
              label: '3.1',
              path: '/docs',
            },
          },                    
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/douglaslloyd/integration-platform-docs/tree/main/',
          editCurrentVersion: true,
        },
//         blog: {
//          showReadingTime: true,
//        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
          // Add a feedback button in the top navbar on every page - Commented out because I moved this to the page footer.
          //{
          //  type: 'html',
          //  position: 'right',
          //  value:
          //    `<a href=# class=navbar__link data-fr-widget>
          //      Page Feedback
          //    </a>`
          //},
          {
            type: 'docsVersionDropdown',
            position: 'left',
            includeCurrentVersion: true,
             dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
//          {
//            href: 'https://github.com/douglaslloyd/integration-platform-docs/tree/gh-pages',
//            position: 'right',
//            className: 'header-github-link',
//            title: "Actian Integration Platform Docs - GitHub",
//          },
       ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                html: `
                    <div class="footerRow">
                      <div class="footerColumn-left">
                        <a href="docs/legal">
                          Legal
                       </a>
                      </div>
                    <div class="footerColumn-center"><span class="footerCopyright">Copyright © 2023 Actian Corporation. All rights reserved.</span></div>
                    <div class="footerColumn-right">
                      <a href="http://www.linkedin.com/company/actian-corporation" target="_blank" rel="noreferrer noopener" aria-label="Linkedin">
                        <svg width="22px" height="22px" viewBox="0 0 24 24" id="meteor-icon-kit__solid-linkedin" fill="none" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z" fill="#758CA3"/></svg>
                      </a>
                      &nbsp;
                      <a href="https://www.facebook.com/actiancorp" target="_blank">
                        <svg width="22px" height="22px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <title>Facebook</title> <desc></desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0"> <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook"></path></g></g></g></svg> 
                      </a>
                      &nbsp;
                      <a href="https://twitter.com/actiancorp" target="_blank">
                        <svg width="24px" height="24px" viewBox="0 -4 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></defs><title>Twitter</title><g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Color-" transform="translate(-300.000000, -164.000000)" fill="#00AAEC"><path d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283" id="Twitter"></path></g></g></svg>
                      </a>
                      &nbsp;
                      <a href="http://www.youtube.com/actiancorporation" target="_blank">
                          <svg width="24px" height="24px" viewBox="0 -3.5 24 24" id="meteor-icon-kit__solid-youtube" fill="none" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path fill-rule="evenodd" clip-rule="evenodd" d="M23.4593 2.63137C23.1843 1.59561 22.3738 0.77987 21.3447 0.50304C19.4795 0 12 0 12 0C12 0 4.52059 0 2.65529 0.50304C1.62622 0.77991 0.815739 1.59561 0.540659 2.63137C0.040863 4.50876 0.040863 8.4258 0.040863 8.4258C0.040863 8.4258 0.040863 12.3427 0.540659 14.2201C0.815739 15.2559 1.62622 16.0376 2.65529 16.3145C4.52059 16.8175 12 16.8175 12 16.8175C12 16.8175 19.4794 16.8175 21.3447 16.3145C22.3738 16.0376 23.1843 15.2559 23.4593 14.2201C23.9591 12.3427 23.9591 8.4258 23.9591 8.4258C23.9591 8.4258 23.9591 4.50876 23.4593 2.63137zM9.5538 11.9821V4.86942L15.8051 8.4258L9.5538 11.9821z" fill="#758CA3"/></svg>
                      </a>                   
                      &nbsp;
                      <a href="https://github.com/douglaslloyd/integration-platform-docs/tree/gh-pages" target="_blank">
                      <svg width="24px" height="24px" viewBox="0 -0.5 24 24" id="meteor-icon-kit__regular-github" fill="none" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z" fill="#758CA3"/></svg>                    </div>
                  </div>
                `,
              },
            ],
          },
        ],
      //copyright: `Copyright © ${new Date().getFullYear()} Actian Corporation. All rights reserved.`,
    },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
