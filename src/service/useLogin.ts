import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../transport";
import { useState } from "react";

type LoginProps = {
  email: string
  password: string
}

export const useLogin = () => {
  const [login, {data, error}] = useMutation(LOGIN_MUTATION);

  const handleLogin = async (
    {
      email,
      password
    }: LoginProps) => {

    login({
      variables: {
        email: email,
        password: password
      }
    }).then(res => {
      if (!data) {

      }

      // localStorage.setItem("jwtToken", data.login.token)

    }).catch(reason => {
    })
  }

  return {
    handleLogin,
    data,
    error
  }
}