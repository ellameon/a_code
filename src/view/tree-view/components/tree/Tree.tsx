import { useState } from "react"
import { TreeElement } from "../../../../types"
import { TreeElementComponent } from "../tree-element"
import styles from "./index.module.scss"

type Props = {
  list: TreeElement[]
  onClick: (id: string) => void
}

export const Tree = (
  {
    list,
    onClick
  }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => setIsOpen(false)}
          type="button"
        >
          Свернуть все
        </button>
        <button
          className={styles.button}
          onClick={() => setIsOpen(true)}
          type="button"
        >
          Развернуть все
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.list}>
          {list && list.map(element => (
            <TreeElementComponent
              element={element}
              key={element.id}
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