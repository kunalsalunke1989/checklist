import './App.css';
import Header from "./MyComponents/Header";
import { Checklist } from "./MyComponents/Checklist";
import { Footer } from "./MyComponents/Footer";
import { AddItem } from "./MyComponents/AddItem";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initItem;
  if (localStorage.getItem("checklist") === null) {
    initItem = [];
  }
  else {
    initItem = JSON.parse(localStorage.getItem("checklist"));
  }


  const onDelete = (checklistItem) => {
    console.log("I am ondelete of checklistItem", checklistItem);
    // Deleting this way in react does not work
    // let index = checklist.indexOf(checklistItem);
    // checklist.splice(index, 1);

    setChecklist(checklist.filter((e) => {
      return e !== checklistItem;
    }));
    console.log("deleted", checklist)
    localStorage.setItem("checklist", JSON.stringify(checklist));
  }

  const addItem = (title, desc) => {
    console.log("I am adding this checklistItem", title, desc)
    let sno;
    if (checklist.length === 0) {
      sno = 0;
    }
    else {
      sno = checklist[checklist.length - 1].sno + 1;
    }
    const myItem = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setChecklist([...checklist, myItem]);
    console.log(myItem);
  }

  const [checklist, setChecklist] = useState(initItem);
  useEffect(() => {
    localStorage.setItem("checklist", JSON.stringify(checklist));
  }, [checklist])

  return ( 
    <> 
    <Router>
      <Header title="My Checklist" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddItem addItem={addItem} />
            <Checklist checklist={checklist} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
