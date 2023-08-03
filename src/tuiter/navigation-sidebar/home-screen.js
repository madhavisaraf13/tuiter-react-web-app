import React from "react";
import WhatsHappening from "./whats-happening";
import TuitList from "../tuits/tuits-list";

const HomeScreen = () => {
 return(
   <>
     <h2>Home</h2>
     <WhatsHappening/>
     <TuitList/>
   </>
 );
};
export default HomeScreen;