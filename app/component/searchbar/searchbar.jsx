import styles from "./searchbar.module.css"

export const Searchbar = () => {
  return (
    <div>
        <form action="" className={styles.form}>
            <input type="text" placeholder="Search"/>
        </form>
    </div>
  )
}
