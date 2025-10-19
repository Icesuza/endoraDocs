// sidebars.ts
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "introduction",
    "security-configuration",
    {
      type: "category",
      label: "Schema Base",
      items: [
        "schema-creation",
        "Insert data",
        "api-generation",
        "api-doc",
        "post-man",
      ],
    },
    {
      type: "category",
      label: "External DataBase ",
      items: ["schema-creation"],
    },
  ],
};

export default sidebars;
