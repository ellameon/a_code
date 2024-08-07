import { Select } from "../select"
import styles from "./index.module.scss"
import { ReactComponent as Search } from "./../../../../style/assets/search icon.svg"


const options = [
  {label: "Да", value: "true"},
  {label: "Нет", value: "false"},
]

type Props = {
  onSearch: (value: string) => void
}

export const Filters = (
  {
    onSearch
  }: Props) => {

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Классы
      </div>
      <div className={styles.row}>
        <Select options={options} onChange={() => {
        }} value={""} label={"Присвоенные"}/>
        <Select options={options} onChange={() => {
        }} value={""} label={"В библиотеке"}/>
        <div className={styles.row}>
          <Search className={styles.icon}/>
          <input 
            type={"search"}
            className={styles.input} 
            placeholder={"Найти классы"} 
            onChange={(event) => {
            onSearch( event.currentTarget.value)
          }}/>
        </div>
      </div>
    </div>
  )
}