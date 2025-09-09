import React from "react";
import styles from "./featuredCard.module.css";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
