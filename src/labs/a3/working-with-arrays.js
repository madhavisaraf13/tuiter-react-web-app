import ArrayIndexAndLength from "./array-index-and-length";
import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays";
import ForLoops from "./for-loops";
import MapFunction from "./map-function";
import JsonStringify from "./json-stringify";
import FindFunction from "./find-function";
import FindIndex from "./find-index";
import FilterFunction from "./filter-function";
import React from "react";
function WorkingWithArrays () {
    
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];

    return(
       <div>
        <h2>Working with arrays</h2>
          numberArray1 = {numberArray1};
          stringArray1 = {stringArray1};
          variableArray1 = {variableArray1};
          <ArrayIndexAndLength/>
          <AddingAndRemovingDataToFromArrays/>
          <ForLoops/>
          <MapFunction/>
          <JsonStringify/>
          <FindFunction/>
          <FindIndex/>
          <FilterFunction/>
       </div>
    );
 }
 export default WorkingWithArrays