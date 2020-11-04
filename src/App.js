import React from 'react';
import './App.css';
import "materialize-css"
import Content from "./components/content/content"
import Header from './components/header/header';
import Nav from "./components/nav/nav"
function App() {
  return (
    <div className="row">
    <div className="col s12"><Header/></div>
    <div className="col s2"><Nav/></div>
    <div className="col s10"><Content/></div>
         </div>
  );
}

export default App;
