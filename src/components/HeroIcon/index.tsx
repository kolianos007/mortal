import styles from "./styles.module.css";
import { FC } from "react";
import { IHeroIcon } from "./index.types";

export const HeroIcon: FC<IHeroIcon> = ({ path, description, isSelected }) => {
  const selectedHeroStyle = isSelected ? styles.user1 : "";
  return (
    <div className={[styles.heroIcon, selectedHeroStyle].join(" ")}>
      <img src={path} alt={description} />
    </div>
  );
};
