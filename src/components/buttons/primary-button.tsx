import { ButtonHTMLAttributes } from "react";
import styles from "./primary-button.module.css";
interface IPrimaryButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}
export function PrimaryButton(props: IPrimaryButton) {
  return (
    <button
      {...props}
      className={`${styles["primary-button"]} ${props.className}`}
    >
      <span>{props.content}</span>
    </button>
  );
}
