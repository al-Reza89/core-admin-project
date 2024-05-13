import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: {
    not_checked_login: true,
    loggedIn: false,
    user_id: "",
    user_name: "",
    token: "",
    created_at: "",
    updated_at: "",
    hashed_password: "",
    _id: "",
  },
});

export default userAtom;
