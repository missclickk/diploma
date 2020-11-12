import React from 'react'
import styles from './header.module.css'

const Header=()=>{
    return(
        <nav className={styles.header}>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">DIPLOMA</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Header;