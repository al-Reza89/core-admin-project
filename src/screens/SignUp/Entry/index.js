import React, { useState } from "react";
import cn from "classnames";
import styles from "./Entry.module.sass";
import TextInput from "../../../components/TextInput";
import Image from "../../../components/Image";
import userAtom from "../../../atoms/userAtom";
import { useRecoilState } from "recoil";
import { register } from "../../../api/rbac";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader";

const Entry = ({ onConfirm }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
  });

  const [user, setUser] = useRecoilState(userAtom);
  const [loading, setLoading] = useState(false);

  const registerUser = async () => {
    if (!formData.user_name || !formData.password) {
      toast.error("Please fill all the fields", {
        position: "top-center",
      });
      return;
    }

    setLoading(true);
    try {
      console.log("formData", formData);
      const user = await register(formData);
      setUser({ ...user, loggedIn: true });
      navigate("/onboarding");
    } catch (e) {
      console.error(e);
      const msg =
        e.response?.data?.detail || "Something went wrong. Please try again.";
      toast.error(msg, {
        position: "top-center",
      });
    }
    setLoading(false);
  };

  return (
    <div className={styles.entry}>
      <div className={styles.head}>
        <div className={styles.info}>Sign up with Open account</div>
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
        <div className={styles.info}>Or continue with email address</div>
        <TextInput
          className={styles.field}
          name="email"
          type="email"
          placeholder="Your email"
          required
          icon="mail"
          value={formData.user_name}
          handleChange={(val) => setFormData({ ...formData, user_name: val })}
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
          className={cn("button", styles.button)}
          onClick={registerUser}
        >
          {loading ? <Loader /> : "Continue"}
        </button>
        <div className={styles.note}>
          This site is protected by reCAPTCHA and the Google Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default Entry;
