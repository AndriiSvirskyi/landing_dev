import styles from "./styles.module.scss";
import { ServicesItem } from "../ServicesItem";
import { ServicesStatisticsItem } from "../ServicesStatisticsItem";
import { Line } from "../Line";
import { ReactComponent as SoftwareDevelopment } from "../../assets/softwareDevelopment.svg";
import { ReactComponent as UXUI } from "../../assets/UXUI.svg";
import { ReactComponent as CloudAndDevOps } from "../../assets/cloudAndDevOps.svg";
import { ReactComponent as BlockchainDevelopment } from "../../assets/blockchainDevelopment.svg";
import { ReactComponent as DedicatedTeam } from "../../assets/dedicatedTeam.svg";
import { ReactComponent as BlueCircle } from "../../assets/bigBlueCircle.svg";
import { ReactComponent as DarkCircle } from "../../assets/bigDarkCircle.svg";
import { ReactComponent as Rectangle } from "../../assets/blueRect.svg";
import { ReactComponent as Square } from "../../assets/blueSquare.svg";

type ServicesStatisticsItemProps = {
  title: string;
  text: number;
  color: string;
  left: string;
};
type ServicesProps = {
  title: string;
  paragraph: string;
  icon: any;
  width: string;
};

export const Services = () => {
  const services = [
    {
      width: "200px",
      title: "Software development",
      paragraph:
        "In the process of operating between art and design, both disciplines have and allowed Williams to channel his voice through  informed each other and allowed Williams to channel  his voice through various mediums.",
      icon: (
        <div className={styles.iconContainer}>
          <Rectangle className={styles.iconBackground} />
          <div className={styles.iconInCircle}>
            <BlueCircle /> <DarkCircle />
            <SoftwareDevelopment />
          </div>
        </div>
      ),
    },
    {
      width: "60px",
      title: "UX/UI",
      paragraph:
        "In the process of operating between art and design, both disciplines have and allowed Williams to channel his voice through  informed each other and allowed Williams to channel  his voice through various mediums.",
      icon: (
        <div style={{ right: "25px" }} className={styles.iconContainer}>
          <Rectangle
            style={{ transform: "rotate(45deg)", left: "45px", top: "5px" }}
            className={styles.iconBackground}
          />
          <div className={styles.iconInCircle}>
            <BlueCircle /> <DarkCircle />
            <UXUI />
          </div>
        </div>
      ),
    },
    {
      width: "170px",
      title: "Cloud and DevOps",
      paragraph:
        "In the process of operating between art and design, both disciplines have and allowed Williams to channel his voice through  informed each other and allowed Williams to channel  his voice through various mediums.",
      icon: (
        <div className={styles.iconContainer}>
          <Rectangle
            style={{ transform: "rotate(15deg)" }}
            className={styles.iconBackground}
          />
          <div className={styles.iconInCircle}>
            <BlueCircle /> <DarkCircle />
            <CloudAndDevOps />
          </div>
        </div>
      ),
    },
    {
      width: "220px",
      title: "Blockchain development",
      paragraph:
        "In the process of operating between art and design, both disciplines have and allowed Williams to channel his voice through  informed each other and allowed Williams to channel  his voice through various mediums.",
      icon: (
        <div style={{ right: "25px" }} className={styles.iconContainer}>
          <Rectangle
            style={{ transform: "rotate(55deg)", left: "50px", top: "10px" }}
            className={styles.iconBackground}
          />
          <div className={styles.iconInCircle}>
            <BlueCircle /> <DarkCircle />
            <BlockchainDevelopment />
          </div>
        </div>
      ),
    },
    {
      width: "140px",
      title: "Dedicated team",
      paragraph:
        "In the process of operating between art and design, both disciplines have and allowed Williams to channel his voice through  informed each other and allowed Williams to channel  his voice through various mediums.",
      icon: (
        <div className={styles.iconContainer}>
          <Square className={styles.iconBackground} />
          <div className={styles.iconInCircle}>
            <BlueCircle /> <DarkCircle />
            <DedicatedTeam />
          </div>
        </div>
      ),
    },
  ];

  const statistics = [
    {
      title: "Teammates:",
      text: 60,
      color: "#98FAEA",
      left: "50px",
    },
    {
      title: "Products/Projects:",
      text: 33,
      color: "#5E9FF1",
      left: "48px",
    },
    {
      title: "Expertise:",
      text: 11,
      color: "#FFD600",
      left: "45px",
    },
    {
      title: "Cakes:",
      text: 1,
      color: "#EB539F",
      left: "20px",
    },
  ];

  const test = document.querySelector("#statistics");

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Services [</h3>
      <div className={styles.services}>
        <Line quantity={3} />
        <div>
          {services.map(
            ({ title, paragraph, icon, width }: ServicesProps, index) => {
              return (
                <div className={styles.serviceItem}>
                  <ServicesItem
                    key={width + index}
                    title={title}
                    paragraph={paragraph}
                    width={width}
                  />
                  {icon}
                </div>
              );
            }
          )}
        </div>
      </div>
      <span className={styles.brackets}>]</span>
      <div id="statistics" className={styles.statistics}>
        {statistics.map(
          (
            { title, text, color, left }: ServicesStatisticsItemProps,
            index
          ) => {
            return (
              <ServicesStatisticsItem
                key={title + index}
                title={title}
                text={text}
                color={color}
                left={left}
              />
            );
          }
        )}
      </div>
    </div>
  );
};
