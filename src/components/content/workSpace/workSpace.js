import { wait } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import styles from './workSpace.module.css'

const WorkSpace = () => {
    const [mouseDownOnSpace, setMouseOnDown] = useState(false);
    let  pointerCor=null;
    let flag=true;
    let [firstPointerCor, setFirstPointerCor] = useState(null);
    useEffect(() => {
        if (mouseDownOnSpace) {
            document.addEventListener("mousemove", changeCoordinate);
            document.addEventListener("mouseup", stopChangingCoordinate);
            window.getSelection().removeAllRanges();
        }
    }, [mouseDownOnSpace]);


    const stopChangingCoordinate = () => {
        setMouseOnDown(false);
        document.removeEventListener("mousemove", changeCoordinate);
        document.removeEventListener("mouseup", stopChangingCoordinate);
    }



    const changeCoordinate = (event) => {
        const cor = event.pageX;
        if(flag){
            pointerCor=firstPointerCor;
            flag=false;
        }
        const target = document.getElementsByClassName(styles.whiteSpace)[0];
        if (mouseDownOnSpace) {
            let objCoordinate = Math.floor(target.getBoundingClientRect().left + cor -pointerCor);
            target.style.left = `${objCoordinate}px`;
           pointerCor=cor;

        }

    }
    /*
target.style.left=`${target.getBoundingClientRect().left+100}px`;
target.style.top=`${top}px`;
document.removeEventListener("mouseup", changeCoordinate);  
*/

    const click = (event) => {
        setFirstPointerCor(event.pageX);
        setMouseOnDown(true);
    }

    return (
        <div className={styles.workSpace}>
            <div className={styles.whiteSpace} onMouseDown={click} />
        </div>
    )

}



export default WorkSpace;