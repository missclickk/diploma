import React, { useEffect, useState, useContext } from 'react'
import styles from './workSpace.module.css'
import "./opacity.css"
import { Swipe } from './../../../context/SwipeContext'
const WorkSpace = () => {
    const swipe = useContext(Swipe);
    const [mouseDownOnSpace, setMouseOnDown] = useState(false);
    let [firstPointerCor, setFirstPointerCor] = useState(null);

    useEffect(() => {
        if (mouseDownOnSpace) {

            document.addEventListener("mousemove", changeCoordinate);
            window.getSelection().removeAllRanges();
        }
    }, [mouseDownOnSpace]);


    
    const stopChangingCoordinate = () => {
        setMouseOnDown(false);
        swipe.setDefaultParameters();
        document.removeEventListener("mousemove", changeCoordinate);
        document.removeEventListener("mouseup", stopChangingCoordinate);
    }
    
    
    const changeCoordinate = (event) => {
        const cor = event.pageX;
      if(swipe.changeCoordinate(cor,firstPointerCor,mouseDownOnSpace))
             stopChangingCoordinate();
      
    }

    const mouseDown = (event) => {
        setFirstPointerCor(event.pageX);
        setMouseOnDown(true);
    }

    return (
        <div className={styles.workSpace}>
            <div className={styles.area}>
                <div className={styles.whiteSpace} onMouseDown={mouseDown} onMouseUp={ stopChangingCoordinate } />
            </div>
        </div>
    )

}



export default WorkSpace;