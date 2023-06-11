import versusIcon from "assets/images/mortal.png";
import { FC } from "react";
import { IVersusItemProps } from "./index.types";
import styles from "./styles.module.css";

export const VersusItem: FC<IVersusItemProps> = ({
  content,
}: {
  content: string;
}) => {
  return (
    <div className={styles.versusItem}>
      {content ? (
        <span>{content}</span>
      ) : (
        <img src={versusIcon} alt={"versus"} />
      )}
    </div>
  );
};
