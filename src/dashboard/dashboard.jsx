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
import Shows from "../Components/UPcomingShows/shows";
import { RiSlideshow3Fill } from "react-icons/ri";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import Headroom from "react-headroom";


function Dashboard() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (<>
        <div className="dashboard">
            <Headroom>
                <div className="hed"> <Header /></div>
            </Headroom>
            <div className="sec" data-aos="zoom-in">   <ImgeSlider /> </div>

            <div className="line">  f <hr width="" color="#fa172e" size="10px" /> </div>

            <div className="sec" data-aos="fade-down" >
                <div className="sec2" data-aos="fade-down">
                    <h2> <RiSlideshow3Fill id="movie_icon" />
                        UP Coming Shows</h2>
                    <Shows />
                    <hr width="" color="#fa172e" size="10px" />
                </div>

                <h2>  <RiMovie2Fill id="movie_icon" />  Trending Movies
                    <Link to={"/More_movies"} >
                        <Button className="moreMovies_but" variant="outline-danger" >
                            <i class="fa-solid fa-camera-movie"></i>  <b> <i class="fa-solid fa-camera-movie"></i>  more movies </b>
                        </Button>{' '}
                    </Link>
                </h2>
            </div>
            <div className="" data-aos="fade-down"><Card /></div>

            <div className="line">  f <hr width="" color="#fa172e" size="10px" /> </div>
            <div className="sec" data-aos="fade-up">
                <h2> <BiSolidMoviePlay id="movie_icon" /> Trending  Web Series
                    <Link to={"/More_movies"} >
                        <Button className="moreMovies_but" variant="outline-danger" >
                            <b> more Series </b>
                        </Button>{' '}
                    </Link>
                </h2>
            </div>
            <div className="" data-aos="fade-down"> <SeriesCard /> </div>

            <div className="line">  f <hr width="" color="#fa172e" size="10px" /> </div>
            <div className="" data-aos="fade-left"><Footer /> </div>


        </div>

    </>)
}
export default Dashboard