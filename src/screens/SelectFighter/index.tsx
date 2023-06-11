import { HEROES } from "appConstants";
import { HeroIcon } from "components";
import styles from "./styles.module.css";
import { useSelectHero } from "hooks";
import randomHero from "assets/images/random.png";
import React from "react";

const SelectFighter = () => {
  const { selectedHeroIdx } = useSelectHero();

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <span className={styles.title}>Select your fighter</span>
        <div className={styles.heroesList}>
          {HEROES.map(({ id, img, description }, i) => {
            return (
              <div key={id}>
                <HeroIcon
                  path={img}
                  description={description}
                  isSelected={i === selectedHeroIdx}
                />
              </div>
            );
          })}
          <div className={styles.figure1}>
            <img
              alt={HEROES[selectedHeroIdx].description}
              src={HEROES[selectedHeroIdx].figure}
            />
          </div>
          <div className={styles.figure2}>
            <img alt={"random"} src={randomHero} />
          </div>
        </div>
        <span className={styles.title}>Kombat zone: soul chamber</span>
      </div>
    </div>
  );
};

export default SelectFighter;
