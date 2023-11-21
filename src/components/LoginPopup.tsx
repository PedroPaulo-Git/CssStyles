import styles from '../styles/LoginPopup.module.css'

function LoginPopup() {

    return ( 
        <div>
                <main className={styles.loginPopupMain}>
                    <div className={styles.loginPopup}>
                        <h1>Faça Login ou Registre-se </h1>
                        <form className={styles.loginForm} action="">
                            <label htmlFor="">
                                <span className={styles.loginPopupEmail}>Email</span>
                                <input type="email" placeholder='' name="" id="" />
                            </label>
                           <label htmlFor="">
                            <span className={styles.loginPopupPass}>Password</span>
                            <input type="password" placeholder='' name=""style={{}} id="formpassword" />
                            
                           </label> 

                           <button type="submit">
                            <span>Login</span>
                           </button>
                        </form>
                    </div>
                </main>
        </div>
     );
}

export default LoginPopup;