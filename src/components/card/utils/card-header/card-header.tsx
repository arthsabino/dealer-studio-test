import styles from "./card-header.module.css";
interface ICardHeader {
  header: string;
}
export function CardHeader(props: ICardHeader) {
  return <h2 className={styles.header}>{props.header}</h2>;
}
