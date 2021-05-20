import React from "react";
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import DisplayRestaurants from "./DisplayRestaurants";
import AddRestaurant from "./AddRestaurant";

function Home(props) {

    function handleClick(event){
        //console.log(event.target.id);
        const city = event.target.id;
        props.history.push('/restaurants', {city});
    }

    function addrest(){
        //console.log(event.target.id);
        //const city = event.target.id;
        props.history.push('/addrestaurant');
    }

    return(
    <Router>
        <div className="title">
        <h1>Restaurant Finder</h1>
        <button onClick={addrest}>Add Restaurant</button>
      
        </div>
       
        <div className="displaycity">
            <button id="Chennai" className="button-class" onClick={handleClick}>Chennai</button><br/><br/>
            <button id="Kolkatta" className="button-class" onClick={handleClick}>Kolkatta</button><br/><br/>
            <button id="Bangalore" className="button-class" onClick={handleClick}>Bangalore</button><br/><br/>
            <Switch>
                 <Route path="/restaurants" component={DisplayRestaurants}/>
                 <Route path="/addrestaurant" component={AddRestaurant}/>
            </Switch>    
        </div>
    </Router>

    )
    
}

export default Home;