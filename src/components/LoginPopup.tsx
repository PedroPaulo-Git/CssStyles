import { useState,useEffect } from 'react';
import styles from '../styles/LoginPopup.module.css'

function LoginPopup() {
        const [showPopup,setShowPopup]= useState(false)
        const [timeoutPopup,setTimeoutPopup] = useState(0) 
        useEffect(() => {
            if( showPopup === true ){
                console.log('Exibir Popup!  ' + showPopup);
            }
          }, [showPopup]);

        useEffect(()=>{
            const randomtimeout = Math.floor(Math.random() * 5000000 ) + 100;
            setTimeoutPopup(randomtimeout);
        },[]);
       
        useEffect(() => {      
            const popupTimer = setTimeout(() => {
              setShowPopup(true) 
            }, timeoutPopup);

            return () => clearTimeout(popupTimer);
            
        }, [timeoutPopup,showPopup]);
       
         
        
    return ( 
        <div>
                <main className={styles.loginPopupMain}>
                    <div className={styles.loginPopup} style={{display:showPopup ? 'block' : 'none', overflow:showPopup ? 'black':'white'}} >
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