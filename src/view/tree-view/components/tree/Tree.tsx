import { useState } from "react"
import { TreeElement } from "../../../../types"
import { TreeElementComponent } from "../tree-element"
import styles from "./index.module.scss"

type Props = {
  list: TreeElement[]
  onClick: (id: string) => void
  id?: string
}

export const Tree = (
  {
    list,
    onClick,
    id
  }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean | number>(false)
  console.log(list)

  const handleExpandAll = () => {
    // сделано для случая, когда в раскрытом списке елемент или несколько закрываем и снова хотим раскрыть весь список
    setIsOpen(Math.random())
  }
  const handleCollapseAll = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <button className={styles.button} onClick={handleCollapseAll} type="button">
          Свернуть все
        </button>
        <button className={styles.button} onClick={handleExpandAll} type="button">
          Развернуть все
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.list}>
          {list && list.map(element => (
            <TreeElementComponent
              id={id}
              element={element}
              key={`${element.id}+${element.name}`}
              isFirstChild
              isAllOpen={isOpen}
              onClick={onClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}