import React, { useEffect, useState } from 'react'
import styles from './workSpace.module.css'
import "./opacity.css"
const WorkSpace = () => {
    const [mouseDownOnSpace, setMouseOnDown] = useState(false);
    let pointerCor = null;
    let flag = true;
    let firstObjCor = null;
    let opacityClassNumber=0;
    let range=60;
    let leftRight="left";
    let [firstPointerCor, setFirstPointerCor] = useState(null);
 
    useEffect(() => {
        if (mouseDownOnSpace) {
           
            document.addEventListener("mousemove", changeCoordinate);
            window.getSelection().removeAllRanges();
        }
    }, [mouseDownOnSpace]);


    const stopChangingCoordinate = () => {
        setMouseOnDown(false);
        const target = document.getElementsByClassName(styles.whiteSpace)[0];
        if(target.classList[1]==="opacity7")
        target.classList.remove(`${ target.classList[1]}`);
        target.style.left=`${firstObjCor}px`;  
        document.removeEventListener("mousemove", changeCoordinate);
        document.removeEventListener("mouseup", stopChangingCoordinate);
    }

    const changeCoordinate = (event) => {
        const cor = event.pageX;
        if (flag) {
            pointerCor = firstPointerCor;
            flag = false;
            firstObjCor = document.getElementsByClassName(styles.whiteSpace)[0].getBoundingClientRect().left;
        }
        const target = document.getElementsByClassName(styles.whiteSpace)[0];
        if (mouseDownOnSpace) {
            let objCoordinate = Math.floor(target.getBoundingClientRect().left + cor - pointerCor);
            target.style.left = `${objCoordinate}px`;
            if(cor<pointerCor)
            leftRight="left";
           if(cor>pointerCor)
            leftRight="right";
            pointerCor = cor;
        }

        if ((target.getBoundingClientRect().left>firstObjCor + range &&   leftRight==="right" &&  firstObjCor<target.getBoundingClientRect().left )||(target.getBoundingClientRect().left<firstObjCor - range &&   leftRight==="left"  &&  firstObjCor>target.getBoundingClientRect().left)) {
            target.classList.remove(`opacity${opacityClassNumber-1}`);
            target.classList.add(`opacity${opacityClassNumber}`);
            opacityClassNumber++;
            range+=60;
            if(target.classList[1]===`opacity7`)
            stopChangingCoordinate();
        }
        if ((target.getBoundingClientRect().left<firstObjCor + range && leftRight==="left"  &&  firstObjCor<target.getBoundingClientRect().left)||(target.getBoundingClientRect().left>firstObjCor - range && leftRight==="right"  &&  firstObjCor>target.getBoundingClientRect().left)) {
            target.classList.remove(`opacity${opacityClassNumber+1}`);
            target.classList.add(`opacity${opacityClassNumber}`);
            opacityClassNumber--;
            range-=60;
        }
    }

    const mouseDown = (event) => {
        setFirstPointerCor(event.pageX);
        setMouseOnDown(true);
    }

    return (
        <div className={styles.workSpace}>
            <div className={styles.area}>
            <div className={styles.whiteSpace} onMouseDown={mouseDown} onMouseUp={stopChangingCoordinate} />
        </div>
        </div>
    )

}



export default WorkSpace;