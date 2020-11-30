import {useContext} from 'react'
import {Http} from "./../context/HttpContext"

export  const useRequest=()=>{
    const http=useContext(Http);
    const createRequest=(result)=>{
    console.log(result);
}

    return {createRequest}
}