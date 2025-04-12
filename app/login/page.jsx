import styles from "./login.module.css"

const Login = () => {
  return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <h1 className={styles.title}>Login</h1>
            <input type="text" name="username" placeholder="User Name" className={styles.userCredential}/>
            <input type="password" name="password" placeholder="Password" className={styles.passwordCredential}/>
            <button>login</button>
        </form>
    </div>
  )
}

export default Login