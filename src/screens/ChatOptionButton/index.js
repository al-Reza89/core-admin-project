import React from "react";
import cn from "classnames";
import Styles from "./ChatOptionButton.module.sass";
import { useLocation } from "react-router";

const ChatOptionButton = () => {
  const location = useLocation();

  return <div>{location.state}</div>;
};

export default ChatOptionButton;
