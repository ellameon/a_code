import styles from "./index.module.scss"
import { ReactComponent as Logo } from "../../style/assets/logo.svg";
import { useEffect, useState } from "react";
import { useLogin } from "../../service";


export const AuthComponent = () => {
  const {handleLogin, data, error} = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginError, setIsLoginError] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)

  useEffect(() => {
    if (error) {
      setIsLoginError(true)
    } else {
      setIsLoginError(false)
    }
  }, [error])

  const checkIsNotEmpty = () => {
    if (email === "") {
      setIsEmailError(true)
    } else {
      setIsEmailError(false)
    }

    if (password === "") {
      setIsPasswordError(true)
    } else {
      setIsPasswordError(false)
    }

    if (email !== "" && password !== "") {
      handleLogin({email, password})
    }
  }

  return (
    <div className={styles.root}>
      <Logo/>
      <div className={styles.content}>
        <div className={styles.title}>
          Войдите в свой аккаунт
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="email">Адрес электронной почты<span>*</span></label>
          <input
            className={styles.input}
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete={"off"}
          />
          {isEmailError &&
            <div className={styles.error}>
              Введите адрес электронной почты
            </div>
          }
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Пароль<span>*</span></label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete={"off"}
          />
          {isPasswordError &&
            <div className={styles.error}>
              Введите пароль
            </div>
          }
        </div>
        <button
          className={styles.button}
          onClick={checkIsNotEmpty}
          type="button"
        >
          Продолжить
        </button>
        {isLoginError &&
          <div className={styles.authError}>
            Введены неверные е-мейл или пароль
          </div>
        }
        <div className={styles.info}>
          Не удается войти в <br/> систему?
        </div>
      </div>
    </div>
  )
}