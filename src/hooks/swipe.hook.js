import styles from "./../components/content/workSpace/workSpace.module.css"
import "./../components/content/workSpace/opacity.css"
export const  useSwipe=()=>{
    let pointerCor = null;
    let flag = true;
    let opacityClassNumber = 0;
    let firstObjCor = null;
    let range = 60;
    let isLeft = true;

const setDefaultParameters = () => {
    const target = document.getElementsByClassName(styles.whiteSpace)[0];
    target.classList.remove(`${ target.classList[1]}`);
    target.style.left=`${500}px`;
    pointerCor = null;
     flag = true;
     opacityClassNumber = 0;
     firstObjCor = null;
     range = 60;
     isLeft =true; 
   
}

const changeCoordinate = (cor,firstPointerCor,mouseDownOnSpace) => {
      const target = document.getElementsByClassName(styles.whiteSpace)[0];
    if (flag) {
        pointerCor = firstPointerCor;
        flag = false;
        firstObjCor =target.getBoundingClientRect().left;
    }
    
    if (mouseDownOnSpace) {
        let objCoordinate = Math.floor(target.getBoundingClientRect().left + cor - pointerCor);
        target.style.left = `${objCoordinate}px`;
        if (cor < pointerCor)
            isLeft =true;
        if (cor > pointerCor)
            isLeft = false;
        pointerCor = cor;
    }
    if ((target.getBoundingClientRect().left > firstObjCor + range && isLeft === false && firstObjCor < target.getBoundingClientRect().left) || (target.getBoundingClientRect().left < firstObjCor - range && isLeft === true && firstObjCor > target.getBoundingClientRect().left)) {
        target.classList.remove(`opacity${opacityClassNumber - 1}`);
        target.classList.add(`opacity${opacityClassNumber}`);
        opacityClassNumber++;
        range += 60;
        //console.log(target.classList[1]);
        if (target.classList[1] === `opacity7`)
            return isLeft;
    }
    if ((target.getBoundingClientRect().left < firstObjCor + range && isLeft === true && firstObjCor < target.getBoundingClientRect().left) || (target.getBoundingClientRect().left > firstObjCor - range && isLeft === false && firstObjCor > target.getBoundingClientRect().left)) {
        target.classList.remove(`opacity${opacityClassNumber + 1}`);
        target.classList.add(`opacity${opacityClassNumber}`);
        opacityClassNumber--;
        range -= 60;
        if (target.classList[1] === `opacity7`)
        return isLeft;
    }

    return null;
}

return {setDefaultParameters,changeCoordinate};
}

