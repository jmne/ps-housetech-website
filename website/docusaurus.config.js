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
            "docusaurus-preset-openapi",
            /** @type {import('docusaurus-preset-openapi').Options} */
            ({
                api: {
                    path: "api/openapi.yaml",
                    routeBasePath: "/api",
                },
                docs: {
                    path: 'docs',
                    routeBasePath: 'docs',
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
                    postsPerPage: 'ALL',
                    blogTitle: 'Unser Blog!',
                    blogDescription: 'Hier findet ihr alle Neuigkeiten rund um das Projekt!',
                    blogSidebarTitle: 'Alle Beiträge',
                    blogSidebarCount: 'ALL',
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
                    customCss: require.resolve("./src/css/custom.css"),
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
                title: 'PS-HouseTech ✅',
                hideOnScroll: true,
                logo: {
                    alt: 'Logo',
                    src: 'img/logo.svg',
                    srcDark: 'img/logo_light.svg',
                },
                items: [
                    {to: '/docs/einleitung', label: 'Docs 🧠', position: 'left'},
                    {to: "/api/", label: "API 🌐", position: 'left'},
                    {to: '/blog', label: 'Blog 📝', position: 'left'},
                    {
                        href: 'https://zivgitlab.uni-muenster.de/ml-de/teaching/ps-housetech/',
                        label: 'Source 📁',
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
                                to: '/docs/einleitung',
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
            zoom: {
                selector: '.markdown img',
                background: {
                    light: 'rgb(255, 255, 255)',
                    dark: 'rgb(50, 50, 50)'
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
        require.resolve('docusaurus-plugin-image-zoom'),
        () => ({
            postBuild() {
                console.log('Plugin build finished');
            },
        }),
    ],

});
