import { useEffect, useState } from "react";
import { HEROES, ROUTES, ROWS_LENGTH } from "appConstants";
import { useNavigate } from "react-router-dom";

export const useSelectHero = () => {
  const [isHeroSelected, setIsHeroSelected] = useState(false);
  const allHeroesLength = HEROES.length;
  const [selectedHeroIdx, setSelectedHeroIdx] = useState(0);
  const navigate = useNavigate();

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;

    if (!isHeroSelected) {
      switch (key) {
        case "ArrowLeft":
          setSelectedHeroIdx((prev) =>
            Math.max(prev === 0 ? allHeroesLength - 1 : prev - 1, 0)
          );
          break;
        case "ArrowUp":
          setSelectedHeroIdx((prev) =>
            Math.max(
              selectedHeroIdx < ROWS_LENGTH
                ? prev + ROWS_LENGTH * 2
                : prev - ROWS_LENGTH,
              0
            )
          );
          break;
        case "ArrowRight":
          setSelectedHeroIdx((prev) =>
            Math.min(
              prev === allHeroesLength - 1 ? 0 : prev + 1,
              allHeroesLength - 1
            )
          );
          break;
        case "ArrowDown":
          setSelectedHeroIdx((prev) =>
            Math.min(
              selectedHeroIdx >= ROWS_LENGTH * 2
                ? prev - ROWS_LENGTH * 2
                : prev + ROWS_LENGTH,
              allHeroesLength - 1
            )
          );
          break;
        case "Enter":
          const selectedHero = HEROES[selectedHeroIdx];
          localStorage.setItem("selectedHero", JSON.stringify(selectedHero));
          setIsHeroSelected(true);

          setTimeout(() => {
            navigate(ROUTES.preview);
          }, 2000);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return { isHeroSelected, selectedHeroIdx };
};
