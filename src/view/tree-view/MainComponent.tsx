import { useGetTree } from "../../service"
import styles from "./index.module.scss"

export const MainComponent = () => {
  const {getTree} = useGetTree()

  getTree()
  
  return (
    <div className={styles.root}>
      
    </div>
  )
}