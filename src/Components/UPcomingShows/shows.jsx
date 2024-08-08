
import "./shows.css"
import data from "./dataShows.js"
function Shows(){
    return(
    <> 
    
    <div class="container1">
      {data.map(( data,index )=>{
        return     <div class="card">
      <div class="img-container">
        <img src={data.img} alt=""/>
      </div>
      <div class="card-details">
        <h2>{data.tit}</h2>
        <p>{data.describe} </p>
      </div>
    </div>  
      } )}




      </div> 
    </>
    )
}
export default Shows