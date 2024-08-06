import { useMutation } from "@apollo/client";
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
      if (data.login.token !== undefined) {
        window.location.replace("/main")
      }

    }).catch(reason => {
    })
  }

  return {
    handleLogin,
    data,
    error
  }
}