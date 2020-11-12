import React, { useEffect, useState,useContext } from 'react'
import styles from './workSpace.module.css'
import "./opacity.css"
import {Swipe} from "./../../../context/SwipeContext"
const WorkSpace = () => {
    const [mouseDownOnSpace, setMouseOnDown] = useState(false);
    const [firstPointerCor, setFirstPointerCor] = useState(null);
    const swipe=useContext(Swipe);
    
    useEffect(() => {
        if (mouseDownOnSpace) {
            document.getElementsByClassName(styles.whiteSpace)[0].addEventListener("mousemove", changeCoordinate);
            window.getSelection().removeAllRanges();
        }
    }, [mouseDownOnSpace]);


    const stopChangingCoordinate = () => {
        
        setMouseOnDown(false);
        swipe.stopChangingCoordinate();
    }

    const changeCoordinate = (event) => {
        const cor = event.pageX;
        swipe.changeCoordinate(cor,firstPointerCor,mouseDownOnSpace);
    }

    const mouseDown = (event) => {
        setFirstPointerCor(event.pageX);
        setMouseOnDown(true);
    }

    return (
        <div className={styles.workSpace}>
            <div className={styles.area}>
            <div className={styles.whiteSpace} onMouseDown={mouseDown}  onMouseUp={stopChangingCoordinate} />
        </div>
        </div>
    )

}



export default WorkSpace;