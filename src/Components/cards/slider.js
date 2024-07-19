import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./card.css"
import { Link } from "react-router-dom"
import Stars from "../stars/stars.jsx"
export const Slider = ({ slides }) => {
    return (
        <Swiper
            slidesPerView={5}
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper"
        >
            {slides.map((slides) => (

                <div className='for_hover'>   
                <SwiperSlide className='Slider_card'>
                    <a>
                        <Link to={"/card_details"}>
                            <img className='card_imge' src={slides.image} alt='error' />
                            <h2 className='card_tit' >  {slides.title} </h2>
                            <h1> <Stars/>  </h1>
                        </Link>
                    </a>
                </SwiperSlide>  
                </div>

            ))}
        </Swiper>
    )


}