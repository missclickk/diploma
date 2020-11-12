import {createContext} from 'react';

export const Swipe=createContext({
    pointerCor:null,
    stopChangingCoordinate:()=>{},
    changeCoordinate:()=>{}
    
});