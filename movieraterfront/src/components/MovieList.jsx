import React,{useState} from 'react'
import MovieCard from "./MovieCard";
import Card from "./Card";
import {MDBRow,MDBContainer,MDBBtn} from "mdbreact"
import MovieAdd from  "./pages/MovieAdd";
import {useQuery} from "react-query"


const MovieList = () => {
//   const {movies} = React.useContext(MovieContext);
const movies =[];
const [modal, setmodal] = useState(false);

const fetchMovies=async()=>{
    const res = await fetch('http://127.0.0.1:8000/api/movies/',{
        method:'GET',
        headers:{
           'Authorization':'Token 7e520a6d17b034046aaba9cea47f7e2f11d7fc03'
        },   
     } );
     return res.json();
}

const {status,data,error} = useQuery('movies',fetchMovies);

    return ( 
        <React.Fragment>
<h3>Movie List </h3>
{status=='loading' && <p id="no-movies" >loading...</p>}
{status=='error'  && <p id="no-movies" >{error} </p>}
{status=='success' && data.length ===0 && <p id="no-movies" >there are no movies ...</p> }
<MDBContainer>
   <MDBRow>
      
   {status=='success'&& data.map((m)=>{return(
          <React.Fragment key={m.id}>
              <Card movie={m} />
          </React.Fragment>
        ) ;
        })}
   </MDBRow>

</MDBContainer>
<div  className="float"  
onClick={()=> setmodal(!modal)}
>
<i className="fa fa-plus my-float"></i>
</div>
<MovieAdd
 modal={modal} setmodal={setmodal}  
 />
        </React.Fragment>
     );
}
 
export default MovieList;