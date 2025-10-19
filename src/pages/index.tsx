import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import FeatureCard from "../components/featuredCard/featuredCard";
import { Database, Cloud, FileText } from "lucide-react";
export default function Home() {
  return (
    <Layout title="Endora" description="Endora - Schema, Data & API Platform">
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>
            Turn data into powerful{" "}
            <span className={styles.highlight}>APIs</span>
            <span className={styles.block}>in minutes.</span>
          </h1>

          <p>
            The modern platform for <strong>Schema Creation</strong>,{" "}
            <strong>Data Population</strong>, and{" "}
            <strong>API Generation</strong>.
          </p>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/schema-creation"
            >
              Get Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/introduction"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className={styles.features}>
          <FeatureCard
            title="Schema Generation"
            description="Generate and manage your database schemas effortlessly with our advanced Schema Generation Service."
            icon={<Database size={48} color="#00c9b7" />}
          />
          <FeatureCard
            title="Endpoint Generation"
            description="Generate and manage your API endpoints effortlessly with our advanced Endpoint Generation Service."
            icon={<Cloud size={48} color="#00c9b7" />}
          />
          <FeatureCard
            title="API Documentation"
            description="Simplify your API integration with our comprehensive API Documentation Service."
            icon={<FileText size={48} color="#00c9b7" />}
          />
        </section>
      </main>
    </Layout>
  );
}
