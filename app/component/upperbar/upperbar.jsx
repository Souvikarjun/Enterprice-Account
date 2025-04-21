import { Searchbar } from "../searchbar/searchbar"
import styles from "./upperbar.module.css"

export const UpperBar = () => {
  return (
    <div className={styles.container}>
        <Searchbar />
        <button className={styles.btn}>Add</button>
    </div>
  )
}
