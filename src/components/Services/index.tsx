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
  text: string;
  color: string;
};
type ServicesProps = {
  title: string;
  paragraph: string;
  icon: any;
};

export const Services = () => {
  const services = [
    {
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
      text: "60+",
      color: "aquamarine",
    },
    {
      title: "Products/Projects:",
      text: "33+",
      color: "blue",
    },
    {
      title: "Expertise:",
      text: "11+",
      color: "yellow",
    },
    {
      title: "Cakes:",
      text: "1M+",
      color: "pink",
    },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Services [</h3>
      <div className={styles.services}>
        <Line quantity={3} />
        <div>
          {services.map(({ title, paragraph, icon }: ServicesProps) => {
            return (
              <div className={styles.serviceItem}>
                <ServicesItem title={title} paragraph={paragraph} />
                {icon}
              </div>
            );
          })}
        </div>
      </div>
      <span className={styles.brackets}>]</span>
      <div className={styles.statistics}>
        {statistics.map(
          ({ title, text, color }: ServicesStatisticsItemProps, i) => {
            return (
              <ServicesStatisticsItem title={title} text={text} color={color} />
            );
          }
        )}
      </div>
    </div>
  );
};
