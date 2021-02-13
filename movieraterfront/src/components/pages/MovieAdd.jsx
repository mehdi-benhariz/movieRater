import React,{useState} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';


const MovieAdd = ({modal,setmodal}) => {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    

    return ( 
        <MDBContainer>
        <MDBModal isOpen={modal} toggle={()=> setmodal(!modal)}>
        <form>
          <MDBModalHeader toggle={()=> setmodal(!modal)}>Add a movie</MDBModalHeader>
          <MDBModalBody>
         <MDBInput label="title" onChange={(e)=>settitle(e.value)}  />         
         <MDBInput label="description" onChange={(e)=>setdescription(e.value)} />         
          
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={()=> setmodal(!modal)}>Close</MDBBtn>
            <MDBBtn color="primary">Sublmit</MDBBtn>
          </MDBModalFooter>
          </form>
        </MDBModal>
      </MDBContainer>
  
     );
}
 
export default MovieAdd;