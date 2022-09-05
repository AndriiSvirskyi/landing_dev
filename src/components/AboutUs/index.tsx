import { useState } from "react";
import styles from "./styles.module.scss";
import { AboutUsItem } from "../AboutUsItem";
import { Form } from "../Form";

export const AboutUs = () => {
  const [isDevADevOpen, setIsDevADevOpen] = useState(true);
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(true);
  const [isEstimationsOpen, setIsEstimationsOpen] = useState(true);
  const [isDesignsOpen, setIsDesignsOpen] = useState(true);
  const [isTestingOpen, setIsTestingOpen] = useState(true);
  const [isGoToLiveOpen, setIsGoToLiveOpen] = useState(true);

  const items = [
    {
      title: "Discovery phase: tech docs and prototyping",
      data: <div className={styles.data}></div>,
      color: "aquamarine",
      isOpen: isDiscoveryOpen,
      setIsOpen: setIsDiscoveryOpen,
    },
    {
      title: "Estimations and delivery processes setup",
      data: <div className={styles.data}></div>,
      color: "orange",
      isOpen: isEstimationsOpen,
      setIsOpen: setIsEstimationsOpen,
    },
    {
      title: "Designs and code production",
      data: <div className={styles.data}></div>,
      color: "yellow",
      isOpen: isDesignsOpen,
      setIsOpen: setIsDesignsOpen,
    },
    {
      title: "Testing and fixing",
      data: <div className={styles.data}></div>,
      color: "pink",
      isOpen: isTestingOpen,
      setIsOpen: setIsTestingOpen,
    },
    {
      title: "Go to live",
      data: <div className={styles.data}></div>,
      color: "blue",
      isOpen: isGoToLiveOpen,
      setIsOpen: setIsGoToLiveOpen,
    },
  ];
  return (
    <div className={styles.container}>
      <AboutUsItem
        isMainToggle={true}
        setIsOpen={setIsDevADevOpen}
        isOpen={isDevADevOpen}
        color="green"
        title="How dev_A_dev works:"
        data={
          <>
            <div className={styles.bracketLeft}>{"{"}</div>
            {items.map(({ title, data, color, isOpen, setIsOpen }, index) => {
              return (
                <AboutUsItem
                  key={title + index}
                  isMainToggle={false}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  color={color}
                  title={title}
                  data={data}
                  isLastItem={index === items?.length - 1 ? true : false}
                />
              );
            })}
            <div className={styles.bracketRight}>{"}"}</div>
          </>
        }
      />
      <div className={styles.driveIt}>
        {"// OR Get your dedicated team and drive it"}
      </div>
      <Form />
    </div>
  );
};
