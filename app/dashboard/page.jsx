import { Searchbar } from "../component/searchbar/searchbar"
import styles from "./dashboard.module.css"
import Transaction from "./transactions/page"
import Link from "next/link"

const Dashboard = () => {
  return (
    <div className={styles.container}>
        {/* <Searchbar/> */}
        <Link href = "/dashboard/transactions">
          <Transaction className={styles.trans}/>
        </Link>
    </div>
  )
}

export default Dashboard