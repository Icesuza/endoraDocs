// sidebars.ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'Introduction',
    {
      type: 'category',
      label: 'Get Start',
      items: [
        'Schema Creation',
        'Populate Data',
        'API Generation',
      ],
    },
  ],
};

export default sidebars;
