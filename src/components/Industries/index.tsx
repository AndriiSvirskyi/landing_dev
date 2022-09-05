import styles from "./styles.module.scss";
import { Line } from "../Line";
import { IndustryItem } from "../IndustryItem";
import { ReactComponent as Blockchain } from "../../assets/blockchain.svg";
import { ReactComponent as ECommerce } from "../../assets/eCommerce.svg";
import { ReactComponent as SaaS } from "../../assets/saas.svg";
import { ReactComponent as MobileApplication } from "../../assets/mobileApplication.svg";
import { ReactComponent as WebApplication } from "../../assets/webApplication.svg";
import { ReactComponent as DarkCircle } from "../../assets/darkCircle.svg";
import { ReactComponent as BlueCircle } from "../../assets/blueCircle.svg";
import { ReactComponent as YellowCircle } from "../../assets/yellowCircle.svg";
import { ReactComponent as AquamarineCircle } from "../../assets/aquamarineCircle.svg";
import { ReactComponent as PinkCircle } from "../../assets/pinkCircle.svg";
import { ReactComponent as OrangeCircle } from "../../assets/orangeCircle.svg";

type IndustriesProps = {
  title: string;
  text: string;
  icon: any;
  color: string;
};

export const Industries = () => {
  const industries = [
    {
      title: "Blockchain",
      text: "e-Layer 2 and Layer 3, Web3 dApps,  All sorts of DeFi along with DEX and CEX, Play2Earn IPFS, NFT, SmartContracts solutions development",
      icon: (
        <div className={styles.iconContainer}>
          <BlueCircle />
          <DarkCircle />
          <Blockchain className={styles.icon} />
        </div>
      ),
      color: "blue",
    },
    {
      title: "e-Commerce ",
      text: "Retail, b2c, b2b, subscription, marketplace, custom and enterprise), custom 3rd party integrations (both: complex and high-load for ERP, PIM, WMS, Payment and tax processors and services, EDM automation systems, feedback and AI driven recommendation and Search services.",
      icon: (
        <div className={styles.iconContainer}>
          <AquamarineCircle />
          <DarkCircle />
          <ECommerce className={styles.icon} />
        </div>
      ),
      color: "aquamarine",
    },
    {
      title: "SaaS",
      text: "e-Commerce, Marketings platforms, Entertainment",
      icon: (
        <div className={styles.iconContainer}>
          <PinkCircle />
          <DarkCircle />
          <SaaS className={styles.icon} />
        </div>
      ),
      color: "pink",
    },
    {
      title: "Mobile Applications",
      text: "AR mobile apps, Social networks, b2b/b2c mobile apps, Audio/video apps, Fintech apps, Telegram bots",
      icon: (
        <div className={styles.iconContainer}>
          <YellowCircle />
          <DarkCircle />
          <MobileApplication className={styles.icon} />
        </div>
      ),
      color: "yellow",
    },
    {
      title: "Web Applications",
      text: "AR mobile apps, Social networks, b2b/b2c mobile apps, Audio/video apps, Fintech apps, Telegram bots",
      icon: (
        <div className={styles.iconContainer}>
          <OrangeCircle />
          <DarkCircle />
          <WebApplication className={styles.icon} />
        </div>
      ),
      color: "orange",
    },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Industries [</h3>
      <div className={styles.industries}>
        <Line />
        <div>
          {industries.map(
            ({ title, text, icon, color }: IndustriesProps, index) => {
              return (
                <IndustryItem
                  key={title + index}
                  icon={icon}
                  title={title}
                  text={text}
                  color={color}
                />
              );
            }
          )}
        </div>
      </div>
      <span className={styles.brackets}>]</span>
    </div>
  );
};
