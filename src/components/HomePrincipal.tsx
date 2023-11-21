import React from 'react';
import Top_Menu from './Top_Menu';
import styles from '../styles/HomePrincipal.module.css'
import styleimg from '../assets/1img.jpg';
import styleimg2 from '../assets/2img.jpg'
import styleimg3 from '../assets/3img.jpg'
import styleimg4 from '../assets/4img.jpg'
import styleimg5 from '../assets/5img.jpg'
import styleimg6 from '../assets/6img.jpg'
import LoginPopup from './LoginPopup';

function HomePrincipal() {
    return (
        <div>
            <Top_Menu />
            <LoginPopup/>
            <main className={styles.mainContainer}>

                <h1 className={styles.h1}>Trending styles</h1>
                <div className={styles.mainStyles}>
                    <div className={styles.stylesContainer}>

                        <img className={styles.stylesimg} src={styleimg} alt="" />
                        <img className={styles.stylesimg} src={styleimg2} alt="" />
                        <img className={styles.stylesimg} src={styleimg2} alt="" />
                        <img className={styles.stylesimg} src={styleimg5} alt="" />
                        <img className={styles.stylesimg} src={styleimg} alt="" />
                        <img className={styles.stylesimg} src={styleimg2} alt="" />
                        <img className={styles.stylesimg} src={styleimg3} alt="" />
                        <img className={styles.stylesimg} src={styleimg4} alt="" />
                        <img className={styles.stylesimg} src={styleimg} alt="" />
                        <img className={styles.stylesimg} src={styleimg5} alt="" />
                        <img className={styles.stylesimg} src={styleimg3} alt="" />
                        <img className={styles.stylesimg} src={styleimg4} alt="" />
                        <img className={styles.stylesimg} src={styleimg} alt="" />
                        <img className={styles.stylesimg} src={styleimg5} alt="" />
                        <img className={styles.stylesimg} src={styleimg3} alt="" />
                        <img className={styles.stylesimg} src={styleimg4} alt="" />
                        <img className={styles.stylesimg} src={styleimg2} alt="" />
                        <img className={styles.stylesimg} src={styleimg5} alt="" />
                        <img className={styles.stylesimg} src={styleimg} alt="" />
                        <img className={styles.stylesimg} src={styleimg2} alt="" />
                        <img className={styles.stylesimg} src={styleimg3} alt="" />
                        <img className={styles.stylesimg} src={styleimg4} alt="" />
                        <img className={styles.stylesimg} src={styleimg} alt="" />
                        <img className={styles.stylesimg} src={styleimg5} alt="" />
                        <img className={styles.stylesimg} src={styleimg3} alt="" />
                        <img className={styles.stylesimg} src={styleimg4} alt="" />
                        <img className={styles.stylesimg} src={styleimg2} alt="" />
                        <img className={styles.stylesimg} src={styleimg5} alt="" />

                    </div>
                </div>






                <div className={styles.optionsContainer}>
                    <ul>
                        <li>Navbar</li>
                        <li>Loading</li>
                        <li>Svg</li>
                        <li>Card</li>
                        <li>Animations</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default HomePrincipal;