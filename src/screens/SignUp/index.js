import React, { useState } from "react";
import cn from "classnames";
import styles from "./SignUp.module.sass";
import { use100vh } from "react-div-100vh";
import { Link } from "react-router-dom";
import Entry from "./Entry";
import Code from "./Code";
import Image from "../../components/Image";

const SignUp = () => {
  const heightWindow = use100vh();
  const [visible, setVisible] = useState(true);

  return (
    <div className={styles.row}>
      <div className={styles.col} style={{ minHeight: heightWindow }}>
        <div className={styles.head}>
          <Link className={styles.logo} to="/">
            <Image
              className={styles.pic}
              src="/images/Wiyse_Logo_White.svg"
              srcDark="/images/Wiyse_Logo_White.svg"
              alt="Core"
            />
          </Link>
          <div className={styles.info}>
            Already a member?{" "}
            <Link className={styles.link} to="/sign-in">
              Sign in
            </Link>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={cn("h2", styles.title)}>Sign up</div>
          {visible ? <Entry onConfirm={() => setVisible(false)} /> : <Code />}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
