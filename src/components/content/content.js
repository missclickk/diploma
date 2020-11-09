import React from 'react'
import styles from './content.module.css'
import WorkSpace from './workSpace/workSpace'

const Content=()=>{
    return( 
    <div className={styles.content}>
        <WorkSpace/>
        </div>
    )
}


export default Content;