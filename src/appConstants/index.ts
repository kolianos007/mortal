import hero1 from "assets/images/hero1.jpg";
import hero2 from "assets/images/hero2.jpg";
import hero3 from "assets/images/hero3.jpg";
import hero4 from "assets/images/hero4.jpg";
import hero5 from "assets/images/hero5.jpg";
import hero6 from "assets/images/hero6.jpg";
import hero7 from "assets/images/hero7.jpg";
import hero8 from "assets/images/hero8.jpg";
import hero9 from "assets/images/hero9.jpg";
import hero10 from "assets/images/hero10.jpg";
import hero11 from "assets/images/hero11.jpg";
import hero12 from "assets/images/hero12.jpg";
import hero13 from "assets/images/hero13.jpg";
import hero14 from "assets/images/hero14.jpg";
import hero15 from "assets/images/hero15.jpg";
import figure1 from "assets/images/figure1.png";
import figure2 from "assets/images/figure2.png";
import figure3 from "assets/images/figure3.png";
import mortal from "assets/images/mortal.png";

const ROUTES = {
  home: "/",
  preview: "/preview",
};

const HEROES = [
  {
    id: 1,
    img: hero1,
    description: "Hero1",
    figure: figure1,
  },
  {
    id: 2,
    img: hero2,
    description: "Hero2",
    figure: mortal,
  },
  {
    id: 3,
    img: hero3,
    description: "Hero3",
    figure: mortal,
  },
  {
    id: 4,
    img: hero4,
    description: "Hero4",
    figure: mortal,
  },
  {
    id: 5,
    img: hero5,
    description: "Hero5",
    figure: mortal,
  },
  {
    id: 6,
    img: hero6,
    description: "Hero6",
    figure: mortal,
  },
  {
    id: 7,
    img: hero7,
    description: "Hero7",
    figure: figure2,
  },
  {
    id: 8,
    img: hero8,
    description: "Hero8",
    figure: mortal,
  },
  {
    id: 9,
    img: hero9,
    description: "Hero9",
    figure: mortal,
  },
  {
    id: 10,
    img: hero10,
    description: "Hero10",
    figure: mortal,
  },
  {
    id: 11,
    img: hero11,
    description: "Hero11",
    figure: mortal,
  },
  {
    id: 12,
    img: hero12,
    description: "Hero12",
    figure: mortal,
  },
  {
    id: 13,
    img: hero13,
    description: "Hero13",
    figure: mortal,
  },
  {
    id: 14,
    img: hero14,
    description: "Hero14",
    figure: mortal,
  },
  {
    id: 15,
    img: hero15,
    description: "Hero15",
    figure: figure3,
  },
];

const ROWS_LENGTH = 5;

const VERSUS_CODE_LENGTH = 6;

const VERSUS_SYMBOLS = ["A", "B", "C", "D"];

const VERSUS_KEY_CODES = ["81", "87", "69", "82", "84", "89"];

export {
  HEROES,
  ROUTES,
  ROWS_LENGTH,
  VERSUS_CODE_LENGTH,
  VERSUS_SYMBOLS,
  VERSUS_KEY_CODES,
};
