import React, {useState, useEffect} from "react";
import Container from "./Container"; 
import Form from "./Form";
import Header from "./Header";
import Home from "./Home";
import {Route} from "react-router-dom";
import { Switch } from "react-router-dom";


function App(){
   const [showApis, setShowApis] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState([])

 
   useEffect(() => {
       fetch("http://localhost:3001/apis")
         .then((r) => r.json())
         .then((showApis) => setShowApis(showApis))

     }, []);



    function cardsToDisplay(specific){
        const cardsToDisplay = showApis.filter((show) => (show.category === specific))
        return setSelectedCategory(cardsToDisplay);
    }
  
   return (
        <div className='App'>
            <Header 
            cardsToDisplay={cardsToDisplay} selectedCategory={selectedCategory}/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/All" >
                    <Container showApis={showApis}/>
                </Route>
                <Route exact path="/form"> 
                    <Form/>
                </Route>
            </Switch> 
        
       </div>
   )
 
}

export default App;