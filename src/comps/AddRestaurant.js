import React, {useState} from "react";
import firebase from '../firebase/config';

function AddRestaurant(){
    
    const [state, setState] = useState({
         restaurantname: "",
         locality: "",
         city: "",
         cuisine: "",
         menu: "",
         country: "",
         statename: "",
         description: ""
        });

    const handleOnSubmit = e => {
        e.preventDefault();
        const db = firebase.firestore();
        // db.settings({
        //     timestampsInSnapshots: true
        //   });
        db.collection("restaurant-details").add({
            restaurant_name: state.restaurantname,
            locality: state.locality,
            city: state.city,
            cuisine: state.cuisine,
            country: state.country,
            statename: state.statename,
            menu: state.menu,
            description: state.description
        })
        .then(() => {
            alert("Restaurant successfully added")
            
        })
        .catch((error) => {
            alert(error.message)
        })
        setState({
            restaurantname: "",
         locality: "",
         city: "",
         cuisine: "",
         menu: "",
         country: "",
         statename: "",
         description: ""
          });
    
      };
    

    
      const handleInputChange = event => {
        const { name, value } = event.target;
       setState((prevState) => ({
      ...prevState,
      [name]: value
      }));
      }

    return(
        <div>
        
        <form className="form" onSubmit={handleOnSubmit}>
        <h1>Add a Restaurant</h1>
          <input
            type="text"
            name="restaurantname"
            placeholder="Restaurant name"
            onChange={handleInputChange}
            value={state.restaurantname}
          />
          <input
            type="text"
            name="locality"
            placeholder="Locality"
            onChange={handleInputChange}
            value={state.locality}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleInputChange}
            value={state.city}
          />
          <input
            type="text"
            name="statename"
            placeholder="State"
            onChange={handleInputChange}
            value={state.statename}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleInputChange}
            value={state.country}
          />
          <input
            type="text"
            name="cuisine"
            placeholder="Cuisine"
            onChange={handleInputChange}
            value={state.cuisine}
          />
          <input
            type="text"
            name="menu"
            placeholder="Menu"
            onChange={handleInputChange}
            value={state.menu}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleInputChange}
            value={state.description}
          />
          
          <button type="submit">Add</button>
        </form>
      </div>
    )

}

export default AddRestaurant;