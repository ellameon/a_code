import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { LOGIN_MUTATION } from "../transport";

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
        localStorage.setItem("jwtToken", data.login.token)
    }).catch(reason => {
    })
  }

  useEffect(() => {
    if (data) {
      localStorage.setItem("jwtToken", data.login.token)
    }

    if (data && localStorage.getItem("jwtToken") === data.login.token) {
      window.location.replace("/main")
    }
  }, [data])

  return {
    handleLogin,
    data,
    error
  }
}