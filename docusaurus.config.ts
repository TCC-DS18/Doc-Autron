import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Autron',
  tagline: 'Documentação essencial do robô assistente pedagógico',
  favicon: 'img/autron.png',
  url: 'https://autron.local',
  baseUrl: '/',
  organizationName: 'senai-roberto-mange',
  projectName: 'autron',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/autron_logo.png',
    navbar: {
      logo: {
        alt: 'Logo Autron',
        src: 'img/autron.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'principalSidebar', position: 'left', label: 'Documentação'},
        {to: '/docs/produto/visao-geral', label: 'Produto', position: 'left'},
        {to: '/docs/tecnico/arquitetura', label: 'Arquitetura', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Autron',
        src: 'img/autron_logo.png',
        width: 160,
      },
      copyright: `Autron - ETS - ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
