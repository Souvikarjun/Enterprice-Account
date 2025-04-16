// import React from 'react'
import Image from "next/image"
import styles from "./navbar.module.css"
import Link from "next/link"

export const Navbar = () => {
  return (
    <div className={styles.container}>
        <Image src="https://cdn.pixabay.com/photo/2021/12/12/20/00/play-6865967_640.jpg" alt="asdas" width={50} height={50} className={styles.img}/>
        <ul className={styles.list}>
            <Link href="#" className={styles.links} >
                <li className={styles.comp}>Home</li>
            </Link>
            <Link href="#" className={styles.links}>
                <li className={styles.comp}>Users</li>
            </Link>
            <Link href="#" className={styles.links}>
                <li className={styles.comp}>Transactions</li>
            </Link>
        </ul>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Search"/>
        </form>
        {/* // <ContactButton text="Contact Me"/> */}
    </div>
  )
}

