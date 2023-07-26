import ES5Functions from "./es5-functions";
import ArrowFunctions from "./arrow-functions";
import ImpliedReturns from "./implied-return";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";
import React from "react";

function WorkingWithFunctions () {
    return(
       <div>
          <ES5Functions/>
          <ArrowFunctions/>
          <ImpliedReturns/>
          <FunctionParenthesisAndParameters/>
       </div>
    );
 }
 export default WorkingWithFunctions