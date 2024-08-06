import { useCallback, useEffect, useState } from "react"
import { useGetTree, useGetTreeElement } from "../../service"
import { TreeElement } from "../../types"
import { Filters } from "./components/filters"
import { Tree } from "./components/tree"
import { findEntities } from "./helpers"
import styles from "./index.module.scss"


export const MainComponent = () => {
  const {getTree} = useGetTree()
  const {getTreeElement} = useGetTreeElement()
  const [list, setList] = useState<TreeElement[]>([])
  const [listSearched, setListSearched] = useState<TreeElement[]>([])
  const [searchValue, setSearchValue] = useState('')

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

  const onElementClick = (id: string) => {
 
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
      <Filters onSearch={onSearch}/>
      <Tree list={listSearched.length > 0 ? listSearched : list} onClick={onElementClick}/>
    </div>
  );
};