import { atom, selector } from "recoil";
import { UserService } from "../service/user";

export const userName = atom({
  key: "user-name",
  default: "",
});

export const userOld = atom({
  key: "user-old",
  default: "",
});

export const customError = atom({
  key: "custom-error",
  default: "",
});

export const getUserRandom = selector({
  key: "random-user",
  get: async () => {
    const res = await UserService.getUser();
    return res.results;
  },
});
