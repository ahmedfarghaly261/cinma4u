import Header from "../../header/header"
import "./more_movies.css"
import img from "./imges_for_card"
function More_movies() {
    return (
        <>
            <Header />
            <div className="item_content">
                <div class="cardC">
                    {img.map((img, index) => {
                        return <span className="content"> <img className="Img_on_slider" key={index} src={img.imgURL} alt={img.imgAlt} />,<h4 className="tit"> {img.imgTit} </h4></span>;
                    }
                    )}
                </div>
            </div>

        </>
    )


}
export default More_movies