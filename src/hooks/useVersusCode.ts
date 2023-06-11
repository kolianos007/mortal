import { useEffect, useState } from "react";
import effect1 from "assets/effects/3.mp3";
import effect2 from "assets/effects/4.mp3";
import effect3 from "assets/effects/5.mp3";
import { VERSUS_KEY_CODES, VERSUS_SYMBOLS } from "appConstants";
import { countRepetitionsOfElement } from "utils";

export const useVersusCode = () => {
  const [selectedCode, setSelectedCode] = useState<string[]>([]);
  const [numberOfRepetitions, setNumberOfRepetitions] = useState(0);

  const handleKeyDown = (event: KeyboardEvent) => {
    const { keyCode } = event;

    const keyIndex = VERSUS_KEY_CODES.indexOf(String(keyCode));
    if (keyIndex !== -1) {
      event.preventDefault();
      const newSelectedCode = [...selectedCode];
      if (newSelectedCode.length <= 6) {
        newSelectedCode[keyIndex] =
          VERSUS_SYMBOLS[Math.floor(Math.random() * VERSUS_SYMBOLS.length)];
        setSelectedCode(newSelectedCode);
      }
    }
  };

  const playEffect = (effect: string) => {
    const audio = new Audio(effect);
    audio.play();
  };

  useEffect(() => {
    const count =
      countRepetitionsOfElement(selectedCode) !== numberOfRepetitions
        ? countRepetitionsOfElement(selectedCode)
        : 0;
    if (count) {
      setNumberOfRepetitions(count);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCode]);

  useEffect(() => {
    if (numberOfRepetitions === 3) {
      playEffect(effect1);
    } else if (numberOfRepetitions === 4) {
      playEffect(effect2);
    } else if (numberOfRepetitions === 5) {
      playEffect(effect3);
    }
  }, [numberOfRepetitions]);

  return { selectedCode };
};
