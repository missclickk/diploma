import React from 'react';
import styles from './App.module.css';
import Content from "./components/content/content"
import Header from './components/header/header';
import {useSwipe}from './hooks/swipe.hook'
import {Swipe}from './context/SwipeContext'
import "materialize-css";
import "./mater.css"

function App() {
  const {changeCoordinate,stopChangingCoordinate}=useSwipe();

  return (
    <Swipe.Provider value={{stopChangingCoordinate,changeCoordinate}}>
    <div className={styles.grid}>
      <Header/>
      <Content/>
         </div>
         </Swipe.Provider>
  );
}

export default App;
