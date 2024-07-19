import "./stars.css"
import { IoStarSharp } from "react-icons/io5";
function Stars(){
    return(
        <>
            {/* <span className="stars5" > <i class="fa-solid fa-star checked star  "></i> </span>
            <span className="stars5" > <i class="fa-solid fa-star checked star "></i> </span>
            <span className="stars5" > <i class="fa-solid fa-star checked star "></i> </span>
            <span className="stars5" > <i class="fa-solid fa-star checked star "></i> </span>
            <span className="stars5" > <i class="fa-solid fa-star"></i> </span> */}
            <IoStarSharp className="checked"  /> 
            <IoStarSharp className="checked" />
            <IoStarSharp className="checked" />
            <IoStarSharp className="checked" />
            <IoStarSharp className="" />
            
        </>
    )
}
export default Stars