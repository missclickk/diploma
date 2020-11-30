import React from 'react';
import styles from './App.module.css';
import Content from "./components/content/content"
import Header from './components/header/header';
import {useSwipe}from './hooks/swipe.hook'
import {useRequest}from './hooks/request.hook'
import {useHttp}from './hooks/http.hook'
import {Swipe}from './context/SwipeContext'
import {Request}from './context/RequestContext'
import {Http}from './context/HttpContext'
import "materialize-css";
import "./mater.css"

function App() {
  const {changeCoordinate,setDefaultParameters}=useSwipe();
  const {createRequest}=useRequest();
  const {request}=useHttp;
  return (
    <Swipe.Provider value={{setDefaultParameters,changeCoordinate}}>
    <Request.Provider value={{createRequest}}>
    <Http.Provider value={{request}}>
    <div className={styles.grid}>
      <Header/>
      <Content/>
         </div>
         </Http.Provider>
         </Request.Provider>
         </Swipe.Provider>
  );
}

export default App;
