// sidebars.ts
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "introduction",
    "getting-started",
    {
      type: "category",
      label: "Schema Design",
      items: [
        "schema-creation",
        "populate-data",
      ],
    },
    {
      type: "category",
      label: "API Development",
      items: [
        "api-generation",
        "api-reference",
        "authentication",
      ],
    },
    {
      type: "category",
      label: "Testing & Integration",
      items: [
        "post-man",
        "swagger-test",
      ],
    },
    {
      type: "category",
      label: "Advanced Topics",
      items: [
        "security-configuration",
        "deployment",
        "performance",
      ],
    },
    "faq",
  ],
};

export default sidebars;
