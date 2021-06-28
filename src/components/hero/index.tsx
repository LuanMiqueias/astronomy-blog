import React from "react";
import styles from "./style.module.css";

interface IProps {
  cover?: {
    url: string;
  };
}
export const Hero: React.FC<IProps> = ({ cover, children }) => {
  return (
    <div
      className={styles.container}
      style={{
        background: `url('${cover?.url}') no-repeat center top / cover`,
      }}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};
