import "./card_details.css"
import Header from '../../header/header';
import { FaStar } from "react-icons/fa6";
import img from "./images.jpeg"
import ReactPlayer from 'react-player'
import More_movies from "../more_movies/more_movies";
import Card from "../card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

function Card_details() {
  useEffect(()=>{
    AOS.init({duration:2000})
},[])
  return (
    <>
      <div className="head">
        <Header />
      </div>
      <div className="page">
        <div className="container">
          <div className="main">
            <div className="title1" data-aos="fade-down">
              <h1>Interstellar</h1>
            </div>
            <div className="conint">
              <div className="" data-aos="fade-down">
                <span className="posters">
                  <img src={img} alt="" />
                </span>
              </div>

              <div className="detailsC" data-aos="fade-right">
                <span className="details"> <span> <FaStar style={{ color: "red", display: "inline" }} /> </span> 4.3 <span style={{ border: "solid .5px", width: "100px" }}> Full HD</span>  <span style={{ border: "solid .5px", width: "100px" }} > +18</span> <br /></span>
                <span className="details"><span>Country : </span> <span style={{ color: "red" }}> USA</span>
                  <br />
                  <span> Genre: </span> <span style={{ color: "red" }}> Action,Tiler</span>
                  <br />
                  <span> Running time:</span> <span   > 120 min</span>
                </span>
                <span className="details"> </span>
                <span className="details">  <span> Director:: </span> <span style={{ color: "red" }}> Louis Leterrier</span>
                  <br />
                  <span> Actors: </span> <span style={{ color: "red" }}>
                    Son Gun
                    Michelle Rodriguez
                    Jordana Brewster
                   <br /> Tyreese Gibson
                    Charlize Theron</span>
                </span>
                </div>
              <div className="video" data-aos="zoom-out"> 
              <ReactPlayer controls={true} url='https://www.youtube.com/watch?v=OA3Txp94pjs' width={"680px"}/>
              </div>
            </div>
            <div className="pdf" data-aos="fade-down"> When Earth becomes <br /> uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, <br /> is tasked to pilot a spacecraft, along with a team of researchers, <br /> to find a new planet for humans. </div>
           <hr />
           <div className="sec2">
           <Link to={"/More_movies"} > <Button id="but_see_all" variant="danger">More Movies</Button>{' '} </Link>
           </div>
      
        
            </div>
        
        </div>
      </div>



    </>
  )
}
export default Card_details