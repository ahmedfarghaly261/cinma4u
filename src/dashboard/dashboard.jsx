import { Link } from "react-router-dom";
import Card from "../Components/cards/card"
import Footer from "../Components/footer/footer"
import Header from "../Components/header/header"
import "./dashboard.css"
import Button from 'react-bootstrap/Button';
import ImgeSlider from "../Components/imgSlider/imgSlider";
import { RiMovie2Fill } from "react-icons/ri";
import { BiSolidMoviePlay } from "react-icons/bi";
import SeriesCard from "../Components/cards/series card/seriesCard";
function Dashboard() {
    return (<>
        <div className="dashboard">

            <div className="hed"> <Header /></div>
            <div className="sec"> <h2><b> Trending updates <br /></b></h2> <br />  <ImgeSlider/> </div>
       <div className="line">  f <hr  width="" color="#fa172e" size="10px" /> </div>
            <div className="sec"> 
            <h2>  <RiMovie2Fill id="movie_icon" />  Trending Movies
                <Link to={"/More_movies"} >
                    <Button className="moreMovies_but" variant="outline-danger" >
                      <i class="fa-solid fa-camera-movie"></i>  <b> <i class="fa-solid fa-camera-movie"></i>  more movies </b>
                    </Button>{' '}
                </Link>
                </h2>
                
            </div>
            <Card/>
            <div className="line">  f <hr  width="" color="#fa172e" size="10px" /> </div>
            <div className="sec">
            <h2> <BiSolidMoviePlay id="movie_icon" /> Trending  Web Series
                <Link to={"/More_movies"} >
                    <Button className="moreMovies_but" variant="outline-danger" >
                        <b> more Series </b>
                    </Button>{' '}
                </Link>
                </h2>
                 </div>
                 <SeriesCard/>
                 <div className="line">  f <hr  width="" color="#fa172e" size="10px" /> </div>
            <div className=""><Footer /> </div>
           

        </div>

    </>)
}
export default Dashboard