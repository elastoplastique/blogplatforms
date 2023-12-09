import React from "react";
import { ROUTES } from "@/constants/routes";

export const LoginButton = () => {

  return <a href={ROUTES.AUTH_LOGIN.path}>Login</a>
};

export default LoginButton;
