import { useState } from "react";
import styles from "./index.module.scss";


type Props = {
  onCheck?: (value: boolean) => void
}

export const Checkbox = (
  {
    onCheck
  }: Props) => {
  const [value, setValue] = useState(false)

  return (
    <label className={styles.label}>
      <input
        onClick={() => {
          setValue(!value)
          onCheck && onCheck(value)
        }}
        type="checkbox" className={styles.checkbox}/>
      <span className={value ? styles.checkboxBgChecked : styles.checkboxBg}/>
    </label>
  )
}






