import styles from "./index.module.scss"
import React, { useState } from 'react';
import { ReactComponent as Arrow } from "./../../../../style/assets/arrow.svg"
import { Checkbox } from "../Checkbox";

type Props = {
  options: {value: string, label: string}[]
  value: string
  onChange: (optionValue: string) => void
  label: string
}

export const Select = (
  {
    options,
    value,
    onChange,
    label
  }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleOptionChange = (optionValue: string) => {
    onChange(optionValue);
  };

  const onCheck = (value: boolean) => {
    if (value !== true) {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
          {`${label} ${count !== 0 ? "+" : ""}${count !== 0 ? count : ""}`}
          <Arrow/>
        </div>
      </div>
      {isOpen && <div className={styles.backdrop} onClick={() => setIsOpen(false)}/>}
        <div className={isOpen ? styles.options : styles.optionsNotOpen}>
          {options.map(option => (
            <label key={option.value} className={styles.option}>
              <Checkbox onCheck={onCheck}/>
              <span className={styles.label}>
                {option.label}
              </span>
            </label>
          ))}
        </div>
    </div>
  );
};