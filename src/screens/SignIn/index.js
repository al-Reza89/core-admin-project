import React, { useState } from "react";
import cn from "classnames";
import styles from "./SignIn.module.sass";
import { use100vh } from "react-div-100vh";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../components/TextInput";
import Image from "../../components/Image";
import { useRecoilState } from "recoil";
import { login } from "../../api/rbac";
import userAtom from "../../atoms/userAtom";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";

const SignIn = () => {
  const heightWindow = use100vh();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useRecoilState(userAtom);
  const [loading, setLoading] = useState(false);

  const loginUser = async () => {
    if (!formData.username || !formData.password) {
      toast.error("Please fill all the fields", {
        position: "top-center",
      });
      return;
    }

    setLoading(true);
    try {
      const user = await login(formData);
      setUser({ ...user, loggedIn: true });
    } catch (e) {
      console.error(e);
      const msg =
        e.response?.data?.message || "Something went wrong. Please try again.";
      toast.error(msg, {
        position: "top-center",
      });
    }
    setLoading(false);
  };

  return (
    <div className={styles.login} style={{ minHeight: heightWindow }}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to="/">
          {/* <Image
            className={styles.pic}
            src="/images/logo-dark.png"
            srcDark="/images/logo-light.png"
            alt="Core"
          /> */}
          <Image
            className={styles.pic}
            src="/images/Wiyse_Logo_Dark.svg"
            srcDark="/images/Wiyse_Logo_White.svg"
            alt="Core"
          />
        </Link>

        <div className={cn("h2", styles.title)}>Sign in</div>
        <div className={styles.head}>
          <div className={styles.subtitle}>Sign up with Open account</div>
          <div className={styles.btns}>
            <button className={cn("button-stroke", styles.button)}>
              <img src="/images/content/google.svg" alt="Google" />
              Google
            </button>
            <button className={cn("button-stroke", styles.button)}>
              <Image
                className={styles.pic}
                src="/images/content/apple-dark.svg"
                srcDark="/images/content/apple-light.svg"
                alt="Apple"
              />
              Apple ID
            </button>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.subtitle}>Or continue with email address</div>
          <TextInput
            className={styles.field}
            name="email"
            type="email"
            placeholder="Your email"
            required
            icon="mail"
            value={formData.username}
            handleChange={(val) => setFormData({ ...formData, username: val })}
          />
          <TextInput
            className={styles.field}
            name="password"
            type="password"
            placeholder="Password"
            required
            icon="lock"
            value={formData.password}
            handleChange={(val) => setFormData({ ...formData, password: val })}
          />
          <button
            disabled={loading}
            onClick={loginUser}
            className={cn("button", styles.button)}
          >
            {loading ? <Loader /> : "Sign in"}
          </button>
          <div className={styles.note}>
            This site is protected by reCAPTCHA and the Google Privacy Policy.
          </div>
          <div className={styles.info}>
            Don’t have an account?{" "}
            <Link className={styles.link} to="/sign-up">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
