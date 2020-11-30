import styles from "./../components/content/workSpace/workSpace.module.css"
import "./../components/content/workSpace/opacity.css"
export const  useSwipe=()=>{
    let pointerCor = null;
    let flag = true;
    let opacityClassNumber = 0;
    let firstObjCor = null;
    let range = 60;
    let leftRight = "left";

const setDefaultParameters = () => {
    const target = document.getElementsByClassName(styles.whiteSpace)[0];
    target.classList.remove(`${ target.classList[1]}`);
    target.style.left=`${500}px`;
    pointerCor = null;
     flag = true;
     opacityClassNumber = 0;
     firstObjCor = null;
     range = 60;
     leftRight = "left"; 
   
}

const changeCoordinate = (cor,firstPointerCor,mouseDownOnSpace) => {
    if (flag) {
        pointerCor = firstPointerCor;
        flag = false;
        firstObjCor = document.getElementsByClassName(styles.whiteSpace)[0].getBoundingClientRect().left;
    }
    const target = document.getElementsByClassName(styles.whiteSpace)[0];
    if (mouseDownOnSpace) {
        let objCoordinate = Math.floor(target.getBoundingClientRect().left + cor - pointerCor);
        target.style.left = `${objCoordinate}px`;
        if (cor < pointerCor)
            leftRight = "left";
        if (cor > pointerCor)
            leftRight = "right";
        pointerCor = cor;
    }

    if ((target.getBoundingClientRect().left > firstObjCor + range && leftRight === "right" && firstObjCor < target.getBoundingClientRect().left) || (target.getBoundingClientRect().left < firstObjCor - range && leftRight === "left" && firstObjCor > target.getBoundingClientRect().left)) {
        target.classList.remove(`opacity${opacityClassNumber - 1}`);
        target.classList.add(`opacity${opacityClassNumber}`);
        opacityClassNumber++;
        range += 60;
        if (target.classList[1] === `opacity7`)
            return leftRight;
    }
    if ((target.getBoundingClientRect().left < firstObjCor + range && leftRight === "left" && firstObjCor < target.getBoundingClientRect().left) || (target.getBoundingClientRect().left > firstObjCor - range && leftRight === "right" && firstObjCor > target.getBoundingClientRect().left)) {
        target.classList.remove(`opacity${opacityClassNumber + 1}`);
        target.classList.add(`opacity${opacityClassNumber}`);
        opacityClassNumber--;
        range -= 60;
        if (target.classList[1] === `opacity7`)
        return leftRight;
    }
    return null;
}

return {setDefaultParameters,changeCoordinate};
}