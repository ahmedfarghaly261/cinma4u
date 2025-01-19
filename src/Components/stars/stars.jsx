import "./stars.css"
import { IoStarSharp } from "react-icons/io5";
function Stars(){
    return(
        <>
      
            <IoStarSharp className="checked"  /> 
            <IoStarSharp className="checked" />
            <IoStarSharp className="checked" />
            <IoStarSharp className="checked" />
            <IoStarSharp className="" />
            
        </>
    )
}
export default Stars