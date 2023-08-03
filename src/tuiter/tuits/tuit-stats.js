import React from "react";
import {FaHeart} from "react-icons/fa";
import {FaRegThumbsUp,FaRegThumbsDown} from "react-icons/fa";
import {BsArrowRepeat} from "react-icons/bs";
import {BiChat} from "react-icons/bi";
import {AiOutlineShareAlt} from "react-icons/ai"; 
import { likeTuit,dislikeTuit } from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";

function TuitStats({ tuit }) {
    const dispatch = useDispatch();

    const likeTuitHandler = (id) => {
    dispatch(likeTuit(id));
    }
    const dislikeTuitHandler = (id) => {
        dispatch(dislikeTuit(id));
    }
    return (
      <div className="row">
        <div className="col">
          {tuit.replies} <BiChat style={{fontSize: '20px'}}/>
        </div>
        <div className="col">
          {tuit.retuits} <BsArrowRepeat style={{fontSize: '20px'}}/>
        </div>
        <div className="col">
            {tuit.liked ? (
                <>
                {tuit.likes} <FaHeart style={{color: 'red', fontSize: '20px'}} />
                </>
            ):(<>
                {tuit.likes} <FaHeart style={{fontSize: '20px'}} />
                </>)
        }
        </div>
        <div className="col">
          <AiOutlineShareAlt style={{fontSize: '20px'}}/>
        </div>
        <div className="col">
          <FaRegThumbsUp style={{fontSize: '20px'}} onClick={() => likeTuitHandler(tuit._id)} />
        </div>
        <div className="col">
          <FaRegThumbsDown style={{fontSize: '20px'}} onClick={() => dislikeTuitHandler(tuit._id)}/>
        </div>
      </div>
    );
  }
  
  export default TuitStats;