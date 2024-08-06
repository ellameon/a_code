import { TreeElement } from "../../../../types"
import { Checkbox } from "../Checkbox"
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
          <th>
            <td>Название</td>
            <td>Значение по умолчанию</td>
            <td>Единица измерения</td>
          </th>
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
          <div className={styles.row}>
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