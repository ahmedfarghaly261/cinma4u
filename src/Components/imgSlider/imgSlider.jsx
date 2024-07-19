import { Link } from "react-router-dom";
import "./imgeSlider.css"
import React from "react";
import images from "./sliderContent";
import CustomSlider from "./slier";
import { Button } from "react-bootstrap"
 function ImgeSlider() {
    return (<>
    <div className="slider">
            <CustomSlider>
                {images.map((image, index) => {
                    return <img id="img_on_slider" key={index} src={image.imgURL} alt={image.imgAlt} />;
                    return <p>{image.titel}</p>;

                })}
            </CustomSlider>

           
        </div>
         <div className="">
            <Link to={"/More_movies"} >    <Button id="but_see_all" variant="danger">SEE ALL</Button>{' '} </Link>
             
            </div>
       
            </>
        
    );
}
export default ImgeSlider
