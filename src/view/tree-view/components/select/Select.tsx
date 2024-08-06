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

  const handleOptionChange = (optionValue: string) => {
    onChange(optionValue);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
          {label}
          <Arrow/>
        </div>

      </div>

      {isOpen && (
        <div className={styles.options}>
          {options.map(option => (
            <label key={option.value} className={styles.option}>
              <Checkbox/>
              <span className={styles.label}>
                {option.label}
              </span>
              
            </label>
          ))}
        </div>
      )}
    </div>
  );
};