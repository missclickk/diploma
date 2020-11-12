import React from 'react'
import styles from './header.module.css'

const Header=()=>{
    return(
        <nav className={styles.header}>
        <div className="nav-wrapper">
          <div  className="brand-logo">DIPLOMA</div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">

          </ul>
        </div>
      </nav>
    )
}

export default Header;