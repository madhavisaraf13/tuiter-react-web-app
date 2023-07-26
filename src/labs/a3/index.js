import JavaScript from "./java-script";
import Classes from "../classes";
import Styles from "../Styles";
import React from "react";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";
import TodoItem from "./todo/todo-item";
function Assignment3() {
 return (
   <div>
     <h1>Assignment 3</h1>
     <TodoList/>
     <h2>To do Item</h2>
     <TodoItem/>
     <ConditionalOutput/>
     <Classes/>
     <Styles/>
     <JavaScript/>
   </div>
 );
}
export default Assignment3
