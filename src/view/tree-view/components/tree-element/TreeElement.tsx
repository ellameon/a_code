import { useEffect, useState } from "react"
import { TreeElement } from "../../../../types"
import { ReactComponent as Arrow } from "./../../../../style/assets/arrow.svg"
import styles from "./index.module.scss"

type Props = {
  element: TreeElement
  isFirstChild?: boolean
  isAllOpen: boolean
  onClick: (id: string) => void
}

export const TreeElementComponent = (
  {
    element,
    isFirstChild,
    isAllOpen,
    onClick
  }: Props) => {
  const [isOpen, setIsOpen] = useState(isAllOpen)

  useEffect(() => {
    setIsOpen(isAllOpen)
  }, [isAllOpen])

  const onElementClick = (id: string) => {
    onClick(id)
  }

  const isLastChild = element.children === null || element.children === undefined
  return (
    <div className={styles.root}
         onDoubleClick={(event) => {
           event.stopPropagation()
           setIsOpen(!isOpen)
         }}>
      <div className={styles.row}>
        {!isLastChild &&
          <div onClick={() => setIsOpen(!isOpen)}
               className={isOpen ? styles.arrow : styles.arrowRotated}
          >
            <Arrow/>
          </div>}
        {!isFirstChild &&
          <input className={styles.input} type={"checkbox"}/>}
        <div onClick={(event) => {
          event.stopPropagation()
          onElementClick(element.id)
        }}
             className={isFirstChild ? styles.title : styles.name}>
          {element.name}
        </div>
      </div>
      {isOpen &&
        <div className={styles.content}>
          {element.children && element.children.length > 0 &&
            element.children.map(child => (
              <TreeElementComponent element={child} key={element.id} isAllOpen={isAllOpen}
                                    onClick={onElementClick}/>
            ))
          }
        </div>
      }
    </div>
  )
}