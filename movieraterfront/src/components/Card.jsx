import './Card.css';

import React from 'react'
import { MDBCard, MDBCardTitle, MDBBtn, MDBRating , MDBCardImage,
    MDBCardText, MDBCardBody,MDBCol } from "mdbreact";

const Card = ({movie}) => {
    return (
        <>
      <div class="wrapper">
        <div class="main_card">
            <div class="card_left">
                <div class="card_datails">
                    <h1>{movie.title} </h1>
                    <div class="card_cat">
                        <p class="year">2018</p>
                        <p class="genre">Action | Adventure </p>
                        <p class="time">2h 28m</p>
                    </div>
                    <p class="disc">{movie.description} .</p>
                    <button>Read More</button>
                    <button >Delete</button>
                <div class="social-btn">
                    <button>
                    {movie.average_rating}
                        <i class="fas fa-star"> </i>
                    </button>
                </div>	
                </div>
            </div>
            <div class="card_right">
                <div class="img_container">
                    <img src="https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg" alt=""/>
                    <div class="play_btn">
                        <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                            <i class="fas fa-play-circle"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div> 
    </>
    );
}
 
export default Card;