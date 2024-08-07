import { TreeElement } from "../../../../types"
import { Checkbox } from "../checkbox"
import styles from "./index.module.scss"

type Props = {
  element?: TreeElement
}

export const MainScreenComponent = (
  {
    element
  }: Props) => {

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.title}>
          Описание
        </div>
        <textarea rows={4} value={element?.description || element?.name}/>
      </div>
      <div>
        <div className={styles.title}>
          Свойства
        </div>
        <table>
          <thead>
          <tr>
            <th>Название</th>
            <th>Значение по умолчанию</th>
            <th>Единица измерения</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <div>
        <div className={styles.title}>
          Связи
        </div>
        <div className={`${styles.row} ${styles.subTitle}`} style={{width: "50%"}}>
          <Checkbox/>
          <div>
            Название класса
          </div>
        </div>
        {element?.classTypes && element?.classTypes.map(type => (
          <div className={styles.row} key={`${Math.random()}+${type.name}`}>
            <Checkbox/>
            <div>
              {type.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}