import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DisplayRestaurants from './comps/DisplayRestaurants';
import Home from "./comps/Home";
import Restaurant from "./comps/Restaurant";
import AddRestaurant from "./comps/AddRestaurant";


function App( ) {
  return(
    
    <Router>
      <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/restaurants" component={DisplayRestaurants}/>
      <Route path="/restaurant" component={Restaurant}/>
      <Route path="/addRestaurant" component={AddRestaurant}/>
      </Switch>
    </Router>
  );
}

export default App;