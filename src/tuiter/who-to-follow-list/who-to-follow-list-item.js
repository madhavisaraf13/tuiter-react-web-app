import React from "react";
const WhoToFollowListItem = ({who}) => {
    console.log(who);
 return(
<div>
  <li key={who._id} className="list-group-item">
   <div className="row">
     <div className="col-3">
       <img className="rounded-circle wd-row-margin" height={48} src={`/images/${who.avatarIcon}`} alt="df"/>
     </div>
     <div className="col-7">
       <div className="fw-bold">{who.userName}</div>
       <div>@{who.handle}</div>
     </div>
     <div className="col-2">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>
  </div>
 );
};
export default WhoToFollowListItem;