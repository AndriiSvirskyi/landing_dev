import styles from "./styles.module.scss";
import { ReactComponent as Dots } from "../../assets/dots.svg";
import { ReactComponent as Services } from "../../assets/services.svg";
import { ReactComponent as Industries } from "../../assets/industries.svg";
import { ReactComponent as AboutUs } from "../../assets/aboutUs.svg";
import { ReactComponent as Career } from "../../assets/career.svg";
import { ReactComponent as ContactUs } from "../../assets/contactUs.svg";
import { useState } from "react";

// const handleScrollToEl = (id: string) => {
//   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
// };

export const Header = () => {
  const [active, setActive] = useState(0);
  const tabs = [
    { name: "Services", icon: <Services /> },
    { name: "Industries", icon: <Industries /> },
    { name: "About us", icon: <AboutUs /> },
    { name: "Career", icon: <Career /> },
    { name: "Contact us", icon: <ContactUs /> },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>dev_A_dev</div>
        <ul className={styles.menu}>
          {tabs.map(({ name, icon }, index) => {
            return (
              <li
                key={name + index}
                onClick={() => {
                  setActive(index);
                }}
                className={index === active ? styles.active : ""}
              >
                {icon} {name}
                {index === active ? (
                  <span className={styles.dot}></span>
                ) : index !== active &&
                  index !== active - 1 &&
                  index !== tabs.length - 1 ? (
                  <span className={styles.stick}></span>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <Dots className={styles.dots} />
    </header>
  );
};
