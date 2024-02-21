import { PrimaryButton } from "../buttons";
import styles from "./banner.module.css";
export function Banner() {
  return (
    <div className={styles["banner-container"]}>
      <div className="content-container">
        <div className={styles["banner-content-container"]}>
          <h1>Welcome to G Automotive</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillym dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <PrimaryButton
            className={styles["cta-contact-us"]}
            content="Contact Us"
          />
        </div>
      </div>
    </div>
  );
}
