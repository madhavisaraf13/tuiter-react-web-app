import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import React from "react";
import HomeScreen from "./navigation-sidebar/home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./navigation-sidebar/bookmarks-screen";
import ProfileScreen from "./navigation-sidebar/profile-screen";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
function Tuiter() {
 return (
   <div>
     <div className="row">
       <div className="col-2 pt-2">
         <NavigationSidebar />
       </div>
       <div className="col-7 py-2">
         <Routes>
           <Route path="/home" element={<HomeScreen/>} />
           <Route path="/explore" element={<ExploreScreen/>} />
           <Route path="/notifications" element={<h1>Notifications</h1>}/>
           <Route path="/messages" element={<h1>Messages</h1>} />
           <Route path="/bookmarks" element={<BookmarksScreen/>} />
           <Route path="/lists" element={<h1>Lists</h1>}/>
           <Route path="/profile" element={<ProfileScreen/>} />
           <Route path="/more" element={<h1>More</h1>}/>
         </Routes>
       </div>
       <div className="col-3 pt-2">
       <WhoToFollowList/>
       </div>
     </div>
   </div>
 );
}
export default Tuiter;