import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRating , MDBCardImage,
     MDBCardText, MDBCardBody,MDBCol } from "mdbreact";


const MovieCard = () => {
// const rateM=(id,stars)=>{
//   fetch(`http://127.0.0.1:8000/api/movies/${id}/rate-movie/`,{
//      method:'POST',
//      body:{
//       stars:stars
//      },
//      headers:{
//        'Content-Type': 'application/json',
//         'Authorization':'Token 7e520a6d17b034046aaba9cea47f7e2f11d7fc03'
//      }
//  }).then(
//     console.log("rate")
//  ).catch(err=>console.log(err));
// }
  return (
      <MDBCol size="4" id="card-movie" > 
       <MDBCard  >
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5" id="title"></MDBCardTitle>
          <MDBCardTitle tag="h6" id="avg-rating"></MDBCardTitle>

          <MDBCardText  id="description" >
           
          </MDBCardText>
          <MDBRating 

          fillColors={[
    'red-text',
    'orange-text',
    'yellow-text',
    'lime-text',
    'light-green-text'
  ]} />
          <MDBBtn color="primary" size="md"  >
            read more
          </MDBBtn>
          <MDBBtn color="danger" size="md" >
            delete
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      );
}
 
export default MovieCard;