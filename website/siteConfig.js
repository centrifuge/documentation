/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
    {
        caption: 'Hokodo',
        // You will need to prepend the image path with your baseUrl
        // if it is not '/', like: '/test-site/img/docusaurus.svg'.
        description:"Centrifuge and crossinx move invoice documents on the blockchain <br/>[read more](https://medium.com/centrifuge/centrifuge-and-crossinx-move-invoice-documents-on-the-blockchain-1220b588294)",
        infoLink:"https://medium.com/centrifuge/centrifuge-and-crossinx-move-invoice-documents-on-the-blockchain-1220b588294",
        image: '/img/hokodo.svg',
        pinned: true,
    },

    {
        caption: 'Crossinx',
        description:"Hokodo and Centrifuge announce partnership to build first decentralized trade insurance  <br/>[read more](https://medium.com/centrifuge/centrifuge-and-crossinx-move-invoice-documents-on-the-blockchain-1220b588294)",
        infoLink:"https://medium.com/centrifuge/hokodo-and-centrifuge-announce-partnership-to-build-first-decentralized-trade-insurance-e1da1dbbe92c",
        // You will need to prepend the image path with your baseUrl
        // if it is not '/', like: '/test-site/img/docusaurus.svg'.
        image: '/img/crossinx_logo_simple.png',
        pinned: true,
    },
];


const quickLinks = [
    {
        title: 'Quick Start',

        description:"[Read the guide →](/docs/getting-started/prerequisites)",
        image: '/img/rocket-icon.svg',
    },
    {
        title: 'Enviroment Setup',
        description:"[Read the guide →](http://localhost:3000/docs/getting-started/prerequisites)",
        image: '/img/block-icon.svg',
    },
    {
        title: 'Peer-to-Peer Layer',
        description:"[Read the guide →](/cent-os-administration/send-document)",
        image: '/img/p2p-icon.svg',
    },
]

const siteConfig = {
    title: 'Centrifuge Developer', // Title for your website.
    tagline: 'A Decentralized Operating System For The Financial Supply Chain',
    url: 'https://developer.centrifuge.io/', // Your website URL
    baseUrl: '/', // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: 'developer.centrifuge.io',
    organizationName: 'centrifuge',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'
    cname: "developer.centrifuge.io",
    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        {doc: 'overview/introduction', label: 'Docs'},
        {
            href: 'https://app.swaggerhub.com/apis/centrifuge.io/cent-node/0.0.2',
            label: 'Centrifuge Node API',
            external: true
        },
        {href: 'https://github.com/centrifuge', label: 'GitHub', external: true}
    ],

    // If you have users set above, you add it here:
    users,
    quickLinks,

    /* path to images for header/footer */
    headerIcon: 'img/centrifuge.developer.png',
    footerIcon: 'img/centrifuge_mark_white.svg',
    favicon: 'img/favicon.png',

    /* Colors for website */
    colors: {
        primaryColor: '#FF9F00',
        secondaryColor: '#212121',
    },

    /* Custom fonts for website */
    /*
    fonts: {
      myFont: [
        "Times New Roman",
        "Serif"
      ],
      myOtherFont: [
        "-apple-system",
        "system-ui"
      ]
    },
    */

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} Centrifuge Inc`,
    usePrism: ['jsx'],

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'atom-one-dark',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js','https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js','components/particle.js',],

    // On page navigation for the current documentation page.

    // No .html extensions for paths.
    cleanUrl: true,
    scrollToTop:true,
    disableHeaderTitle:true,

    // Open Graph and Twitter card images.
    ogImage: 'img/docusaurus.png',
    twitterImage: 'img/docusaurus.png',

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/centrifuge/go-centrifuge',
    wrapPagesHTML: true,
};

module.exports = siteConfig;
