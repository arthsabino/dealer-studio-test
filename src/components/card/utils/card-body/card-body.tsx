import { ICardParagraphType } from "@/types/card";
import styles from "./card-body.module.css";
interface ICardBody {
  paragraphs: ICardParagraphType[];
}
export function CardBody(props: ICardBody) {
  return (
    <div className={styles["paragraph-container"]}>
      {props.paragraphs.map((p) => (
        <p key={p.identifier}>{p.content}</p>
      ))}
    </div>
  );
}
