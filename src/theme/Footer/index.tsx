import React, { type ReactNode } from "react";
import type FooterType from "@theme/Footer";
import type { WrapperProps } from "@docusaurus/types";
import Link from "@docusaurus/Link";
import styles from "./footer.module.css";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          {/* Logo */}
          <div>
            <a
              href="https://endora.space"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/logo.png" alt="Endora Logo" />
            </a>
          </div>

          {/* Links */}
          <div className={styles.link}>
            <Link to="/docs/introduction">Explore Docs</Link>
            <a
              href="https://endora.space"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Web
            </a>
          </div>

          {/* Divider */}
          <hr />

          {/* Copyright */}
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Enodora.
          </div>
        </div>
      </footer>
    </>
  );
}
