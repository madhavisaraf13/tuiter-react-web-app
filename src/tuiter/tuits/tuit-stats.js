import React from "react";
import {FaHeart} from "react-icons/fa";
import {FaRegThumbsUp,FaRegThumbsDown} from "react-icons/fa";
import {BsArrowRepeat} from "react-icons/bs";
import {BiChat} from "react-icons/bi";
import {AiOutlineShareAlt} from "react-icons/ai"; 
//import { likeTuit,dislikeTuit } from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";
import { updateTuitThunk } from "../services/tuits-thunks";

function TuitStats({ tuit }) {
    const dispatch = useDispatch();
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
                {tuit.likes}<FaHeart style={{color: 'red', fontSize: '20px'}} className="text-danger" onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1,liked:true }))}/>
                </>
            ):(<>
                {tuit.likes} <FaHeart style={{color: 'black', fontSize: '20px'}} className="text-danger" onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))}/>
                </>)
        }
        </div>
        <div className="col">
        {tuit.dislikes}<FaRegThumbsDown style={{fontSize: '20px'}} onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1}))}/>
        </div>
        <div className="col">
          <AiOutlineShareAlt style={{fontSize: '20px'}}/>
        </div>
      </div>
    );
  }
  
  export default TuitStats;