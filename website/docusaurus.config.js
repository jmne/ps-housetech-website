const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'PS HouseTech',
  tagline: 'Smart displays for University of Münster at Information Systems department',
  url: 'https://ml-de.zivgitlabpages.uni-muenster.de',
  baseUrl: '/teaching/ps-housetech/ps-housetech-website',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ml-de/teaching/ps-housetech',
  projectName: 'ps-housetech-website',
  deploymentBranch: 'main',
  staticDirectories: ['static'],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "de"],
      }),
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
              'https://zivgitlab.uni-muenster.de/ml-de/teaching/ps-housetech/ps-housetech-website/-/tree/main/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
              'https://zivgitlab.uni-muenster.de/ml-de/teaching/ps-housetech/ps-housetech-website/-/tree/main/website',
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({

        // ============= ANNOUNCEMENT BAR ==================

        announcementBar: {
          id: 'announcement_1', // Increment on change
          content:
              'This website is still under construction.',
          isCloseable: true,
          backgroundColor: '#252525',
          textColor: '#e5e5e5',
        },

        // =================================================

        colorMode: {
          defaultMode: 'dark',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        navbar: {
          title: 'PS HouseTech',
          logo: {
            alt: 'Logo',
            src: 'img/logo.svg',
            srcDark: 'img/logo_light.svg',
          },
          items: [
            {
              type: 'dropdown',
              label: 'Documentation',
              position: 'left',
              to: '/docs/intro',
              items: [
                {
                  to: '/docs/intro',
                  label: 'Introduction',
                },
                {
                  to: "/docs/cris", // adjust the location depending on your baseURL (see configuration)
                  label: "CRIS Schema", // change the label with yours
                },
              ],
            },
            {to: '/blog', label: 'Blog', position: 'left'},
            {
              href: 'https://zivgitlab.uni-muenster.de/ml-de/teaching/ps-housetech/',
              label: 'SOURCE',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Introduction',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Mattermost',
                  href: 'https://mattermost.uni-muenster.de/lc-housetech/',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: 'blog',
                },
              ],
            },
            {
              title: 'Team',
              items: [
                {
                  label: 'Contributors',
                  href: 'https://zivgitlab.uni-muenster.de/groups/ml-de/teaching/ps-housetech/-/contribution_analytics',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} PS HouseTech`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        imageZoom: {
          selector: '.markdown img',
          options: {
            margin: 24,
            background: '#BADA55',
            scrollOffset: 0,
            container: '#zoom-container',
            template: '#zoom-template',
          },
        },
      }),

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 90,
      },
    ],
    [
      "@graphql-markdown/docusaurus",
      {
        schema: "./api/cris.graphql",
        rootPath: "./",
        baseURL: "docs/cris",
        homepage: "./docs/cris/cris.md",
        docOptions: {
          pagination: false,
          toc: false,
          index: true,
        },
        loaders: {
          GraphQLFileLoader: "@graphql-tools/graphql-file-loader"
        },
      },
    ],
    () => ({
      postBuild() {
        console.log('Plugin build finished');
      },
    }),
  ],

});
