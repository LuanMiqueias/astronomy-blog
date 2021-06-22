import React from "react";
import styles from "./style.module.css";

interface IProps {
  hero?: {
    title?: string;
    cover?: {
      url: string;
    }[];
  };
}
export const Hero: React.FC<IProps> = ({ hero }) => {
  return (
    <div
      className={styles.container}
      style={{ background: `url('${hero.cover[0]?.url}')` }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>
          Fique por dentro de tudo que acontece no mundo da{" "}
          <span>astronomia</span>
        </h1>
      </div>
    </div>
  );
};
