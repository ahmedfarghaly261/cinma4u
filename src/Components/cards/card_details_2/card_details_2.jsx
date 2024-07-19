import "./card_details_2.css"
import Slides from "../CardContent.json"
import Header from '../../header/header';
import { FaPlayCircle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { GrLike } from "react-icons/gr";
import { FaComment } from "react-icons/fa"; 
import { FaShare } from "react-icons/fa";

function Card_details_2() {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <br />
      <div className="Card_details">
        <div className="poster">
          <span className="right" > 
            <span className="sires " >
              <center> episode </center>
            </span>
            <span className="sires " >
              <center> episode </center>
            </span>
            <span className="sires " >
              <center> episode </center>
            </span>
            <span className="sires " >
              <center> episode </center>
            </span>
            <span className="sires " >
              <center> episode </center>
            </span>
          </span>

          <span className="left" >
            <span className="playI" > <FaPlayCircle /></span>
          </span>
          <span className="reactiveI"> 
            <Button variant="primary">   <GrLike />  LIKE</Button>{' '}
            <Button variant="secondary"> <FaComment />  COMMENT</Button>{' '}
            <Button variant="success"     > <FaShare />  SHERE</Button>{' '}
          </span>

        </div>
      </div>

    </>
  )
}
export default Card_details_2