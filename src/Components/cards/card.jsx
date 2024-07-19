import "./card.css"
import {Slider} from "./slider"
import { Pagination } from 'swiper/modules';
import slides from "./CardContent.json"
function Card() {
    return (
        <>

        <Slider slides={slides}/>


        </>
    )
}
export default Card