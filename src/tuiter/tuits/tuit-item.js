import React from "react";
import { FcApproval } from "react-icons/fc";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";
import {AiOutlineClose} from "react-icons/ai";
import '../../index.css';
const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
}

 return(
  <li key={tuit._id} className="list-group-item">
     <div className="row">
    <div className="col-2">
       <img width={70} className="rounded-circle" src={`/images/${tuit.image}`}/>
     </div>
     <div className="col-10">
     <AiOutlineClose className="float-end" style={{fontSize: '20px'}} onClick={() => deleteTuitHandler(tuit._id)}/>
       <div><label className="fw-bolder">{tuit.topic} &nbsp;<FcApproval/>&nbsp;</label><label>{tuit.handle} . &nbsp;{tuit.time}</label></div>
       <div><span>{tuit.title}</span></div>
       <div class="tuitDiv">{tuit.tuit}</div>
       <br/>
       <TuitStats tuit={tuit} />
     </div>
   </div>
  </li>
 );
};
export default TuitItem;