"use client";
import { PrimaryButton } from "@/components/buttons";
import { ICardType } from "@/types/card";
import { CardBody } from "../utils/card-body/card-body";
import { CardHeader } from "../utils/card-header/card-header";
import { CardImage } from "../utils/card-image/card-image";
import styles from "./card.module.css";
interface ICard {
  card: ICardType;
  selected: boolean;
  onSelect: () => void;
}
export function Card(props: ICard) {
  return (
    <div className={`${styles.card} ${props.selected ? styles.active : ""}`}>
      <CardImage img={props.card.img} identifier={props.card.identifier} />
      <div className={styles.content}>
        <CardHeader header={props.card.header} />
        <CardBody paragraphs={props.card.paragraphs} />
        <PrimaryButton
          content={props.card.btnContent}
          className={styles["card-button"]}
          onClick={props.onSelect}
        />
      </div>
    </div>
  );
}
