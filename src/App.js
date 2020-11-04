import React from 'react';
import styles from './App.module.css';
import Content from "./components/content/content"
import Header from './components/header/header';
import Nav from "./components/nav/nav"
function App() {
  console.log("hi");
  return (
    <div className={styles.grid}>
      <Header/>
      <Nav/>
      <Content/>
         </div>
  );
}

export default App;
