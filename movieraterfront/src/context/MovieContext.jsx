import React, { useState,createContext,useEffect } from 'react'

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
 let movies=[];
//     fetch('http://127.0.0.1:8000/api/movies/',{
//         method:'GET',
//         headers:{
//            'Authorization':'Token 7e520a6d17b034046aaba9cea47f7e2f11d7fc03'
//         },   
//      } )
//      .then((res)=>res.json())
//      .then((data)=>{movies=data;
//        console.log(movies)
//     })
//     .catch((err)=>console.log(err));
//  console.log(movies)
//delete a movie
const deleteM=(id)=>{}


    return ( 
        <MovieContext.Provider value={{movies,deleteM}} >
           {props.children}
        </MovieContext.Provider>
     );
}
 
export default MovieContextProvider;