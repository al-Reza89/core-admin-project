import React, { useState } from "react";
import cn from "classnames";
import styles from "./Page.module.sass";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Icon from "../Icon";
import { useNavigate } from "react-router";

const Page = ({ wide, children, title, showBackBtn }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={styles.page}>
        <Sidebar
          className={cn(styles.sidebar, {
            [styles.visible]: visible,
          })}
          onClose={() => setVisible(false)}
        />
        <Header onOpen={() => setVisible(true)} />
        <div className={styles.inner}>
          <div
            className={cn(styles.container, {
              [styles.wide]: wide,
            })}
          >
            <div className={cn(styles.header)}>
              {title && <div className={cn("h3", styles.title)}>{title}</div>}
              {showBackBtn && (
                <button
                  onClick={() => navigate(-1)}
                  className={cn("button-stroke")}
                >
                  <Icon name="arrow-left" size="20" /> Back
                </button>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
