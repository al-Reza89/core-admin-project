import React from "react";

import { useLocation } from "react-router";

const ChatOptionButton = () => {
  const location = useLocation();

  return <div>{location.state}</div>;
};

export default ChatOptionButton;
