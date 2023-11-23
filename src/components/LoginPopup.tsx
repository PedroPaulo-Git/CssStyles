import { useState, useEffect } from 'react';
import styles from '../styles/LoginPopup.module.css'

function LoginPopup() {
    const [showPopup, setShowPopup] = useState(false)
    const [timeoutPopup, setTimeoutPopup] = useState(0)

    useEffect(() => {


        const randomtimeout = Math.floor(Math.random() * 10000) + 100;
        setTimeoutPopup(randomtimeout);
        console.log('Exibir Popup!  ' + showPopup);

        const popupTimer = setTimeout(() => {
            setShowPopup(true)
        }, timeoutPopup);
        return () => clearTimeout(popupTimer);
    }, [timeoutPopup, showPopup]);

    const closePopup = () => {
        console.log('Funfou')
        if (showPopup === true){
             setShowPopup(false)
        }else if (showPopup === false){
            setShowPopup(true)
        }
        console.log(showPopup)
        setTimeoutPopup(0);
    }


    return (
        <div>
            <main className={styles.loginPopupMain}>
                <div id='loginpopup' className={styles.loginPopup} style={{ display: showPopup ? 'block' : 'none' }} >
                    <h1>Faça Login ou Registre-se </h1>
                    <span onClick={closePopup} className={styles.closePopup}>X</span>
                    <form className={styles.loginForm} action="">
                        <label htmlFor="">
                            <span className={styles.loginPopupEmail}>Email</span>
                            <input type="email" placeholder='' name="" id="" />
                        </label>
                        <label htmlFor="">
                            <span className={styles.loginPopupPass}>Password</span>
                            <input type="password" placeholder='' name="" style={{}} id="formpassword" />

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