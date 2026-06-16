import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  principalSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Produto',
      items: [
        'produto/visao-geral',
        'produto/objetivos',
        'produto/modulos',
        'produto/identidade-visual',
      ],
    },
    {
      type: 'category',
      label: 'Técnico',
      items: [
        'tecnico/arquitetura',
      ],
    },
  ],
};

export default sidebars;
