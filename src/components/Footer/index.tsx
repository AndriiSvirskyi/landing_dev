import styles from "./styles.module.scss";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.dev}>©dev_a_dev.io</div>
      <ul className={styles.menu}>
        <li>Services</li>
        <li>Industries</li>
        <li>About us</li>
        <li>Career</li>
        <li>Contact us</li>
      </ul>
      <ul className={styles.privacyAndTerms}>
        <li>Privacy</li>
        <li>Terms</li>
        <li>
          <Linkedin />
        </li>
        <li>
          <Facebook />
        </li>
      </ul>
    </footer>
  );
};
