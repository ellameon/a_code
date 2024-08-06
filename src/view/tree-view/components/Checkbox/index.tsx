import { useState } from "react";
import styles from "./index.module.scss";


export const Checkbox = () => {
  const [value, setValue] = useState(false)

  return (
    <label className={styles.label}>
      <input
        onClick={() => setValue(!value)}
        type="checkbox" className={ styles.checkbox}/>
      <span className={value ? styles.checkboxBgChecked : styles.checkboxBg}/>
    </label>
  )
}






