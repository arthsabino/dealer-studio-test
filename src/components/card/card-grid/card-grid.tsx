"use client";
import { cards } from "@/__mocks__/cards";
import { useState } from "react";
import { Card } from "../card/card";
import styles from "./card-grid.module.css";
export function CardGrid() {
  const [selected, setSelected] = useState(1);
  const handleSelect = (index: number) => {
    setSelected(index);
  };
  return (
    <div className={styles["card-grid-container"]}>
      {cards.map((card, index) => (
        <Card
          key={card.identifier}
          card={card}
          selected={index === selected}
          onSelect={() => handleSelect(index)}
        />
      ))}
    </div>
  );
}
