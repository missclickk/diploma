import React from 'react';
import styles from './App.module.css';
import Content from "./components/content/content"
import Header from './components/header/header';
import "materialize-css";
import "./mater.css"
function App() {
  console.log("hi");
  return (
    <div className={styles.grid}>
      <Header/>
      <Content/>
         </div>
  );
}

export default App;
