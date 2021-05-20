import React, { useEffect, useState } from "react";
import firebase from '../firebase/config';
import {motion} from "framer-motion";

function DisplayRestaurants(props) {
    const [rests, setRests] = useState([]);
    const [lastDoc, setLastDoc] = useState();
    const [loading,setLoading] = useState(true);
    const [isEmpty,setIsEmpty] = useState(false);
    const docRef = firebase
                  .firestore()
                 .collection("restaurant-details");
    
   
    function useRests(cityname) {
       
    
        useEffect( () => {
            docRef
            .where("city", "==", cityname)
            .limit(1)
            .get()
            .then((collections) => {
                updateState(collections)  
            })
          
    }, [])
        return rests
    }

    const updateState = (collections) => {
        const isCollectionEmpty = collections.size === 0;
        if(!isCollectionEmpty){
            const newrests = collections.docs.map((doc) => doc.data());
            const lastDoc = collections.docs[collections.docs.length - 1];
            setRests((rests) => [...rests, ...newrests]);
            setLastDoc(lastDoc);  
            
        } else{
            setIsEmpty(true);
        }
        setLoading(false);
    };

    function handleClick(e){
        const rest_name  = e.target.innerHTML;      
        props.history.push('/restaurant', {rest_name});
    }

    function loadMore(){
        setLoading(true);
        docRef
        .where("city", "==", cityname)
        .startAfter(lastDoc)
        .limit(1)
        .get()
        .then((collections) => {
            updateState(collections)
        })
    }

   //const {cityname} =  (props.location && props.location.state) || {};
   const tst =  JSON.stringify(props.history.location.state);
   var obj = JSON.parse(tst);
   const cityname = obj.city;
    const rests1 = useRests(cityname)
    return(
        <div>
            <div className="header">
            <h1>Restaurant Finder</h1>
            <h2>{cityname} Restaurants</h2>
            
            </div>
            {rests1 && rests1.map((rest) => 
            <div className="container">
            <img src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                 <motion.div className="heading"  onClick={handleClick}>
                    <h1>{rest.restaurant_name}</h1> 
                    <h1>{rest.city}</h1>
               <h1>{rest.cuisine}</h1>
                </motion.div>
            </div>
            )}
            {loading && <h1>Loading...</h1>}
           {!loading && !isEmpty && <button onClick={loadMore}>Load More</button> } 
           {isEmpty && <h1>No more restaurants</h1>}
        </div>
    )
}

export default DisplayRestaurants;