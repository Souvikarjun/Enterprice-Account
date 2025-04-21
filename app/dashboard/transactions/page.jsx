import React from 'react'
import styles from "./transactions.module.css"
import Image from 'next/image'
import { UpperBar } from '@/app/component/upperbar/upperbar'


function Transaction() {
  return (
    <div className={styles.container}>
      <UpperBar/>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className={styles.user}>  
              hello
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${ styles.pending}`}>Pending</span>
            </td>
            <td>14/02/2025</td>
            <td>300rs</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>  
                hello
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${ styles.done}`}>Done</span>
            </td>
            <td>14/02/2025</td>
            <td>500rs</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>  
              hello
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${ styles.cancelled}`}>Cancelled</span>
            </td>
            <td>14/02/2025</td>
            <td>1500rs</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>  
              hello
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${ styles.pending}`}>Pending</span>
            </td>
            <td>14/02/2025</td>
            <td>3000rs</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction