import React, { useEffect, useState } from "react";
import firebase from '../firebase/config';


function useRests(restname) {
    const [rests, setRests] = useState([]);

    useEffect( () => {
        firebase
        .firestore()
        .collection("restaurant-details")
        .where("restaurant_name", "==", restname)
        .onSnapshot((snapshot) => {
            const newrests = snapshot.docs.map((docs) => ({
                id: docs.is,
                ...docs.data()
            }))

            setRests(newrests)
        })
      
})
    return rests
}


function Restaurant(props){

   const tst =  JSON.stringify(props.history.location.state);
  
    var obj = JSON.parse(tst);
    const restname = obj.rest_name;

    const rests = useRests(restname);

    //const menus = fetchData(restname);
    return(
        <div>
        <div className="header">
            <h1>Restaurant Finder</h1>
        </div>
        {rests && rests.map((rest) => 
        <div className="restaurant">
        
             <div className="detail">
                <p><h2>{rest.restaurant_name}</h2></p> 
                <p>{rest.locality}</p>
                 <p>{rest.cuisine}</p>
                 <p><h2>Address</h2></p>
                 <div className="address">
           <p>{rest.locality}, {rest.city} ,{rest.statename}, {rest.country}</p>
           </div>
           <p><h2>Menus</h2></p>
           <div className="menus">
           <p><h3>{rest.menu}</h3></p>
           <p>{rest.description}</p>
           </div>
                 </div>            
        </div>
        )}
       
     
           
    </div>
    )
}

export default Restaurant;