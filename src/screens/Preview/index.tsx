import styles from "./styles.module.css";
import { useVersusCode } from "hooks";
import randomHero from "assets/images/random.png";
import { ROUTES, VERSUS_CODE_LENGTH } from "appConstants";
import { VersusItem } from "components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const { figure, description } = JSON.parse(
    localStorage.getItem("selectedHero")!
  );

  const { selectedCode } = useVersusCode();

  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(ROUTES.home);
      localStorage.clear();
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.heroes}>
        <div className={styles.hero1}>
          <img src={figure} alt={description} />
        </div>
        <div className={styles.hero2}>
          <img src={randomHero} alt={"randomHero"} />
        </div>
      </div>
      <div className={styles.versus}>
        {Array.from({ length: VERSUS_CODE_LENGTH }, (_, i) => (
          <VersusItem key={i} content={selectedCode[i]} />
        ))}
      </div>
    </div>
  );
};

export default Preview;
