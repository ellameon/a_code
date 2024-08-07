import { useEffect, useState } from "react"
import { TreeElement } from "../../../../types"
import { Checkbox } from "../Checkbox"
import { ReactComponent as Arrow } from "./../../../../style/assets/arrow.svg"
import styles from "./index.module.scss"

type Props = {
  element: TreeElement
  isFirstChild?: boolean
  isAllOpen: boolean | number
  onClick: (id: string) => void
  id?: string
}

export const TreeElementComponent = (
  {
    element,
    isFirstChild,
    isAllOpen,
    onClick,
    id
  }: Props) => {
  const [isOpen, setIsOpen] = useState(isAllOpen)

  useEffect(() => {
    if (isOpen !== isAllOpen) {
      setIsOpen(isAllOpen)
    }
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
      <div className={element.id === id ? styles.selected : styles.row} style={isLastChild ? {marginLeft: "10px"} : {}}>
        {!isLastChild &&
          <div onClick={() => setIsOpen(!isOpen)}
               className={isOpen ? styles.arrow : styles.arrowRotated}
          >
            <Arrow/>
          </div>
        }
        {!isFirstChild &&
          <Checkbox/>
        }
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
          {element.children && element.children.length > 0 ?
            element.children.map(child => (
              <TreeElementComponent element={child} key={element.id} isAllOpen={isAllOpen}
                                    onClick={onElementClick} id={id}/>
            ))
            : <>
            {!isLastChild && <div>Нет вложенных элементов</div>}
            </>
          }
        </div>
      }
    </div>
  )
}