import React, { useState } from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import Icon from "../../../Icon";
import Overview from "./Overview";
import Products from "./Products";
import ActiveDeactivateAlert from "../../../../screens/ChatApprovalWorkflows/ActiveDeactivateAlert";
import RejectAlert from "../../../../screens/ChatApprovalWorkflows/RejectAlert";

const navigation = ["Review", "Comment"];

const Details = ({ className, setValue, activeIndex, setActiveIndex }) => {
  const [visibleModalAccept, setVisibleModalAccept] = useState(false);
  const [visibleModalReject, setVisibleModalReject] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index);
    index === 0 && setValue(false);
    index === 1 && setValue(true);
  };

  return (
    <div className={cn(styles.details, className)}>
      <div className={styles.head}>
        <div className={styles.nav}>
          {navigation.map((x, index) => (
            <button
              className={cn(styles.link, {
                [styles.active]: index === activeIndex,
              })}
              onClick={() => handleClick(index)}
              key={index}
            >
              {x}
            </button>
          ))}
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke", styles.favorite)}>
            <Icon name="heart-fill" size="24" />
            <span>32</span>
          </button>
          {/* <button className={cn("button", styles.buy)}>
            <span className={styles.price}>$89</span>
            <span className={styles.inner}>
              Download<span> now</span>
              <Icon name="download" size="24" />
            </span>
          </button> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={() => setVisibleModalAccept(true)}
              className={cn("status-green", styles.status)}
            >
              Accept
            </div>
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={() => setVisibleModalReject(true)}
              className={cn("status-red", styles.status)}
            >
              Reject
            </div>
          </div>
        </div>
      </div>
      <Overview />
      {/* <Products /> */}
      <ActiveDeactivateAlert
        open={visibleModalAccept}
        onClose={() => setVisibleModalAccept(false)}
      />
      <RejectAlert
        open={visibleModalReject}
        onClose={() => setVisibleModalReject(false)}
      />
    </div>
  );
};

export default Details;
