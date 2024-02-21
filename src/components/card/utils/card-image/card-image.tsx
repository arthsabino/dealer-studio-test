import Image from "next/image";
import styles from "./card-image.module.css";
interface ICardImage {
  img: string;
  identifier: string;
}
export function CardImage(props: ICardImage) {
  return (
    <Image
      src={props.img}
      alt={props.identifier}
      height={140}
      width={320}
      className={styles.img}
    />
  );
}
