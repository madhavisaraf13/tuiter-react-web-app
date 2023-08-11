import React from "react";

const ConditionalOutputIfElse = () => {
  const alice = {  first: 'Alice',  last: 'Wonderland',  salary: 100000};

    const loggedIn = true;
    console.log(alice);
    if(loggedIn) {
      return (<h2>{JSON.stringify(alice)}</h2>);
    } else {
      return (<h2>Please login If Else</h2>);
    }
   };
   export default ConditionalOutputIfElse;