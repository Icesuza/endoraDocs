// sidebars.ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Get Start',
      items: [
        'schema-creation',
        'populate-data',
        'api-generation',
      ],
    },
  ],
};

export default sidebars;
