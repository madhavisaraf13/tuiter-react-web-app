// import Assignment3 from "./a3";
// import React from "react";
// function Labs() {
//     var functionScoped = 2;
//     let blockScoped = 5;
//     const constant1 = functionScoped - blockScoped;
//     let numberArray1 = [1, 2, 3, 4, 5];
//     let stringArray1 = ['string1', 'string2'];

//     let variableArray1 = [
//     functionScoped,   blockScoped,
//     constant1,        numberArray1,   stringArray1
//     ];
//     console.log(functionScoped);
//     console.log(blockScoped);
//     console.log(constant1);
//     console.log(numberArray1)
//     console.log(stringArray1);
//     console.log(variableArray1);

//  return (
//    <div>
//      {/* <h1>Assignment 3</h1> */}
//      <Assignment3/>
     
//    </div>
//  );
// }
// export default Labs;

import {Link} from "react-router-dom";
import Assignment3 from "./a3";
import React from "react";
import Nav from "../nav";
function Labs() {
 return(
  <div>
   <Nav/>
   <Assignment3/>
  </div>
 )
}
export default Labs;