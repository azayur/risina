import style from "./Slider.modul.scss";
import Carousel from 'react-bootstrap/Carousel';
function Slider(){
    return(
        <div className={style.color}> 
            <div className="slider">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-50"
                        src="./img/img-main/slider/slide1.png"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-50"
                        src="./img/img-main/slider/slide2.png"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-50"
                        src="./img/img-main/slider/slide1.png"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
export default Slider;