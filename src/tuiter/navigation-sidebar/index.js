import React from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
function Navigation() {
 const { currentUser } = useSelector((state) => state.user);
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 return (
   <div className="list-group">
     <Link className={`list-group-item text-capitalize ${active === "home" ? "active" : ""}`} to="/tuiter/home">home</Link>
     <Link className={`list-group-item text-capitalize ${active === "explore" ? "active" : ""}`} to="/tuiter/explore">explore</Link>
     <Link className={`list-group-item text-capitalize ${active === "notifications" ? "active" : ""}`} to="/tuiter/notifications">notifications</Link>
     <Link className={`list-group-item text-capitalize ${active === "messages" ? "active" : ""}`} to="/tuiter/messages">messages</Link>
     <Link className={`list-group-item text-capitalize ${active === "bookmarks" ? "active" : ""}`} to="/tuiter/bookmarks">bookmarks</Link>
     <Link className={`list-group-item text-capitalize ${active === "lists" ? "active" : ""}`} to="/tuiter/lists">lists</Link>
     {!currentUser && <Link className={`list-group-item text-capitalize ${active === "login" ? "active" : ""}`} to="/tuiter/login">login</Link>}
     {!currentUser && <Link className={`list-group-item text-capitalize ${active === "register" ? "active" : ""}`} to="/tuiter/register">register</Link>}
     { currentUser && <Link className={`list-group-item text-capitalize ${active === "profile" ? "active" : ""}`} to="/tuiter/profile">profile</Link>}
     <Link className={`list-group-item text-capitalize ${active === "more" ? "active" : ""}`} to="/tuiter/more">more</Link>
   </div>
 );
};
export default Navigation;