https://cdn.jsdelivr.net/gh/turkyden@gh-pages/

module.exports = {
  title: 'Hi, i am Turkyden',
  tagline: 'A Frontend developer, UI designer, Father and Husband.',
  url: 'https://Turkyden.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.svg',
  organizationName: 'Turkyden', // Usually your GitHub org/user name.
  projectName: 'Turkyden.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Turkyden',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: '进阶',
          position: 'left',
        },
        {to: 'blog', label: '专栏', position: 'left'},
        {to: 'books', label: '书籍', position: 'left'},
        {to: 'motto', label: '箴言', position: 'left'},
        {
          href: 'https://github.com/Turkyden',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Facebook React',
              to: 'docs/',
            },
            {
              label: 'Alibaba Hooks',
              to: 'docs/',
            },
            {
              label: 'Ant Design',
              to: 'docs/',
            },
            {
              label: 'Story Set',
              href: 'https://storyset.com/'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: '知乎',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: '掘金',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Dribbble',
              href: 'https://twitter.com/docusaurus',
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
            {
              label: 'GitHub',
              href: 'https://github.com/Turkyden',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Created with ❤ by Turkyden.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/oceanicNext'),
      darkTheme: require('prism-react-renderer/themes/oceanicNext'),
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Turkyden/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Turkyden/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
