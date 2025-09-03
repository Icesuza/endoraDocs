import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout title="Endora" description="Endora - Schema, Data & API Platform">
      <main>
        {/* Hero Section */}
        <section style={{ textAlign: "center", padding: "5rem 2rem" }}>
          <h1>
            Turn data into powerful{" "}
            <span
              style={{
                color: "#00c9b7",
                background: "rgba(0, 201, 183, 0.15)",
                padding: "4px 24px",
                borderRadius: "9999px",
                fontWeight: "700",
              }}
            >
              APIs
            </span>
            <span style={{ display: "block" }}>in minutes.</span>
          </h1>

          <p style={{ fontSize: "1.25rem", marginTop: "1rem", color: "#aaa" }}>
            The modern platform for <strong>Schema Creation</strong>,{" "}
            <strong>Data Population</strong>, and{" "}
            <strong>API Generation</strong>.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link
              className="button button--primary button--lg"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0b9287")
              }
              to="/docs/schema-creation"
            >
              Get Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              style={{ marginLeft: "1rem" }}
              to="/docs/intro"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Features */}
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            padding: "4rem 2rem",
            background: "#1a1a1a",
          }}
        >
          <div style={{ flex: "1", minWidth: "250px" }}>
            <h3>⚡ Fast</h3>
            <p>
              Generate schemas and APIs in minutes with streamlined workflows.
            </p>
          </div>
          <div style={{ flex: "1", minWidth: "250px" }}>
            <h3>🔒 Secure</h3>
            <p>Enterprise-grade validation and access control.</p>
          </div>
          <div style={{ flex: "1", minWidth: "250px" }}>
            <h3>🌍 Scalable</h3>
            <p>Deploy from local dev to cloud-native platforms.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
