import { ICardType } from "@/types/card";
import cardImg from "../app/assets/images/card-info/card-img.jpg";
export const cards: ICardType[] = [
  {
    identifier: "Heading 1",
    header: "Heading 1",
    paragraphs: [
      {
        identifier: "heading-1-p1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
    ],
    img: cardImg.src,
    btnContent: "Button 1",
  },
  {
    identifier: "Heading 2",
    header: "Heading 2",
    paragraphs: [
      {
        identifier: "heading-2-p1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
    ],
    img: cardImg.src,
    btnContent: "Button 2",
  },
  {
    identifier: "Heading 3",
    header: "Heading 3",
    paragraphs: [
      {
        identifier: "heading-3-p1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      },
      {
        identifier: "heading-3-p2",
        content:
          "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
    ],
    img: cardImg.src,
    btnContent: "Button 3",
  },
];
