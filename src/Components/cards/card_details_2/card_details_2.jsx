import Header from "../../header/header"
import "./card_details_2.css"
import { FaStar } from "react-icons/fa6";
import imge from "./imge.jpg"
import ReactPlayer from 'react-player'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

function Card_details_2() {
  useEffect(()=>{
    AOS.init({duration:2000})
},[])
  return (
    <>
    <div className="">
      <Header/>
    </div>
    <div className="page">
        <div className="container">
          <div className="main">
            <div className="title1">
              <h1>Lost</h1>
            </div>
            <div className="conint">
              <div className="">
                <span className="posters" data-aos="fade-down">
                  <img src={imge} alt="" />
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
              <ReactPlayer controls={true} url='https://www.youtube.com/watch?v=KTu8iDynwNc' width={"680px"}/>
              </div>
            </div>
            <div className="pdf"> The survivors of a plane crash are forced to work <br />  together in order to survive on a seemingly deserted tropical island. </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card_details_2