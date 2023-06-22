import style from "./FullMenu.modul.css";
import Card from "../Card/Card";
function FullMenu(){
    return(
        <div className={style.color}>
            <div className="full">
                <div className="full-menu-buttons">
                    <p>Сашими</p>
                    <p>Ролы</p>
                    <p>Сеты</p>
                    <p>Воки</p>
                    <p className="top">Суши</p>
                    <p className="bol">Напитки</p>
                </div>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}
export default FullMenu;