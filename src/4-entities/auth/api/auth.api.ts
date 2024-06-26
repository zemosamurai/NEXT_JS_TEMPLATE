import { ERoles } from "@/5-shared/access";
import { ILoginForm, ILoginResponse, IMeResponse } from "./types";

const user = {
  user_id: 1,
  email: "admin@admin.com",
  first_name: "admin",
  last_name: "admin",
  role: ERoles.ADMIN,
};

export const authApi = {
  login(data: ILoginForm): Promise<IMeResponse> {
    const resData = {
      access_token: "access_token",
      refresh_token: "refresh_token",
    };

    return new Promise((res) => {
      res(user);
    });
  },
  me(): Promise<IMeResponse> {
    return new Promise((res) => {
      res(user);
    });
  },
  refreshToken(token: string): Promise<ILoginResponse> {
    const resData = {
      access_token: "access_token",
      refresh_token: "refresh_token",
    };

    return new Promise((res) => {
      res(resData);
    });
  },
};
