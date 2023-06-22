import style from "./Menu.modul.scss";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
function Menu(){
    return(
        <div className={style.color}> 
            <div className="full-wrapper-memu">
                <div className="wrapper-memu">
                    <div className="text-menu">
                        <p>Меню</p>
                        <img src="img/img-main/menu/topitop.png" alt="" />
                    </div>
                <Card></Card>
                <Card></Card>
                </div>
            </div>
            <Link to="Full-Menu">
                <div className="full-menu">
                    <img className="img-full-menu" src="img/img-main/menu/icon.png" alt="" />
                    <p className="text-full-menu">Перейти в полное меню</p>
                </div>
            </Link>
        </div>
    )
}
export default Menu;