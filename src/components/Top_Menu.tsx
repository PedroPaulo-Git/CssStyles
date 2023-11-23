import React,{useEffect,useState} from 'react'
import Logo from '../assets/ICONE.png'
import styles from '../styles/Top_Menu.module.css';
//import { handleClick } from '../components/LoginPopup';

function Top_Menu() {
   
    const handleClick =()=>{
        const popUp = document.getElementById('loginpopup');
        if (popUp) {
            popUp.style.display = 'block';
            console.log('Mostrando Popup')
          } else {
            console.error('Elemento com ID "loginpopup" não encontrado.');
          }

    }

    return ( 
        <div>
            <main className={styles.top}>
                <div className={styles.logo}>
                    <img className={styles.logo_img} src={Logo} alt="Logo" />
                    <span className={styles.logo_1}></span>
                    <span className={styles.logo_2}></span>
            <div className={styles.topInfos} >
                {/* Search */}     
                <div className={styles.searchTop}>

                    <div className={styles.searchContainer}>
                    <input placeholder='Search' className={styles.Search} type="text" />
                    <button className={styles.buttonSearch}>icon</button>
                    </div> 

                </div>
                {/* container login */} 
                <div className={styles.loginTop}>

                    <div className={styles.LoginContainer}>

                    <button onClick={handleClick} className={styles.buttonLogin}>Login</button>

                    </div> 

                </div>
            </div>
                
       </div>
                
               
            </main>
        </div>
     );
}

export default Top_Menu;