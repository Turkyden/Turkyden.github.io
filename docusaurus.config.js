module.exports = {
  title: 'Hi, i am Turkyden',
  tagline: 'A Frontend developer, UI designer, Father and Husband.',
  url: 'https://turkyden.com/',
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
  ssrTemplate: process.env.NODE_ENV === 'production' ? `<!DOCTYPE html>
<html <%~ it.htmlAttributes %>>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86">
    <meta name="generator" content="Docusaurus v<%= it.version %>">
    <%~ it.headTags %>
    <% it.metaAttributes.forEach((metaAttribute) => { %>
      <%~ metaAttribute %>
    <% }); %>
    <% it.stylesheets.forEach((stylesheet) => { %>
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/Turkyden/Turkyden.github.io@gh-pages/<%= stylesheet %>" />
    <% }); %>
    <% it.scripts.forEach((script) => { %>
      <link rel="preload" href="https://cdn.jsdelivr.net/gh/Turkyden/Turkyden.github.io@gh-pages/<%= script %>" as="script">
    <% }); %>
  </head>
  <body <%~ it.bodyAttributes %> itemscope="" itemtype="http://schema.org/Organization">
    <%~ it.preBodyTags %>
    <div id="__docusaurus">
      <%~ it.appHtml %>
    </div>
    <div id="outside-docusaurus">
      <span>Custom markup</span>
    </div>
    <% it.scripts.forEach((script) => { %>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Turkyden/Turkyden.github.io@gh-pages/<%= script %>"></script>
    <% }); %>
    <%~ it.postBodyTags %>
  </body>
</html>` : undefined
};
