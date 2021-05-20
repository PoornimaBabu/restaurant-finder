import React, { useState } from "react";
import {Redirect} from "react-router-dom";

function Test(props) {

    const [isAuth, setIsAuth] = useState(true);

    if (!isAuth){
      return  <Redirect to="/restaurants" />
    }

    return(
        <div>
            <h1>Test</h1>
            <button onClick={() => { setIsAuth(false) }}>Test</button>
            <button onClick={() => { props.history.push('/restaurants') }}>Test2</button>
        </div>
        
    )
}

export default Test;