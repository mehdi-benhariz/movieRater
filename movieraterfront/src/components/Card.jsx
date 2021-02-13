import React from 'react'
import {Link} from "react-router-dom"
const Card = ({movie}) => {
  const {average_ratings,no_of_ratings,description,title,id} = movie;

    return (
        <>
<div class="each mb-10 m-2 hover:shadow-lg border-gray-800 bg-gray-100 relative rounded overflow-hidden">
 <Link to={`/${id}`} >
 <img class="w-full" src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg" alt="movie image" />
 </Link>
 
  <div class="badge absolute top-0 right-0 bg-green-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
    {average_ratings} ({no_of_ratings}) </div>
  <div class="info-box text-xs flex p-1 font-semibold text-gray-800 bg-gray-300">
    <h3 class="text-xl py-2" > {title}
</h3>
  </div>
  <div class="text-gray-800">
    <div class="text-left pl-1 text-lg font-light text-gray-800" >rate :</div>
    <span class="description p-4 block py-2 border-gray-400 mb-2 text-lg text-gray-500">{description} </span>
  </div>
</div>
    </>
    );
}
 
export default Card;