import Header from "../../header/header"
import "./more_movies.css"
import img from "./imges_for_card"
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import SPLouder from "../../preLoud/SpinnerLouder";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

function More_movies() {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <>
      
            <Header />
            <div className="item_content">
                <div class="cardC" data-aos="fade-down">
                    <hr />
                    {img.map((img, index) => {
                        return  <span className="content"> <Link className="link"> <img className="Img_on_slider" key={index} src={img.imgURL} alt={img.imgAlt} />, <h4 className="tit"> {img.imgTit} </h4>  </Link> 
                       <h2 style={{color:"red",fontSize:"20px"}}> {img.starts} <IoStarSharp /></h2>
                        </span>;
                    }
                    )}
                </div>
                <hr />
            </div>

        </>
    )


}
export default More_movies