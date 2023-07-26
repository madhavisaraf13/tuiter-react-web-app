import React from "react";

const multiply = (a , b) => a * b;

function ImpliedReturns () {
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return(
    <div>
        <br/>
        <h2>Implied Returns</h2>
        fourTimesFive = {fourTimesFive}<br/>
        multiply(4, 5) = {multiply(4, 5)}<br/>
    </div>
      );
 }
 export default ImpliedReturns