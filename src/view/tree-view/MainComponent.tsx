import { useCallback, useEffect, useState } from "react"
import { useGetTree } from "../../service"
import { TreeElement } from "../../types"
import { Filters } from "./components/filters"
import { MainScreenComponent } from "./components/main-screen"
import { Tree } from "./components/tree"
import { findEntities } from "./helpers"
import styles from "./index.module.scss"


export const MainComponent = () => {
  const {getTree} = useGetTree()
  const [list, setList] = useState<TreeElement[]>([])
  const [listSearched, setListSearched] = useState<TreeElement[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [selectedElement, setSelectedElement] = useState<TreeElement | undefined>(undefined)

  useEffect(() => {
    const fetchTree = async () => {
      try {
        const res = await getTree()
        setList(res.modelTreeClasses?.tree || [])
      } catch (error) {
        console.error('Error fetching tree:', error)
      }
    };
    fetchTree()
  }, [getTree])


  const onSearch = useCallback((value: string) => {
    setSearchValue(value)
    const founded = findEntities(value, list)
    setListSearched(founded)
  }, [list])

  const onElementClick = (id: string): TreeElement | undefined => {
    const stack: TreeElement[] = [...list]
    while (stack.length > 0) {
      const element = stack.pop()!
      if (element.id === id) {
        setSelectedElement(element);
        return
      }
      if (element.children) {
        stack.push(...element.children)
      }
    }
  }

  useEffect(() => {
    if (searchValue !== '') {
      const founded = findEntities(searchValue, list)
      setListSearched(founded)
    } else {
      setListSearched([])
    }
  }, [searchValue, list])

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Filters onSearch={onSearch}/>
        <div className={styles.row}>
          <Tree list={listSearched.length > 0 ? listSearched : list} onClick={onElementClick}/>
          <MainScreenComponent element={selectedElement}/>
        </div>
      </div>
    </div>
  );
};