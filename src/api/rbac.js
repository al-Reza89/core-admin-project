import axios from "./axiosInit";

export const register = async (data) => {
  const resp = await axios.post("/register", data);
  localStorage.setItem("token", resp.data.token);
  return resp.data;
};

export const login = async (data) => {
  const resp = await axios.post("/login", new URLSearchParams(data), {
    headers: {
      accept: "application/json",
    },
  });

  // console.log(resp.data);
  localStorage.setItem("token", resp.data.access_token);
  return resp.data;
};

export const logout = async () => {
  const resp = await axios.post("/logout");
  localStorage.removeItem("token");
  return resp.data;
};

export const getUser = async () => {
  const resp = await axios.get("/user");
  console.log(resp.data);
  return resp.data;
};
