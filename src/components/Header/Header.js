import style from "./Header.modul.scss";
import { Link } from "react-router-dom";
function Header(){
    return(
        <div className={style.color}> 
            <header>
                <div className="header-container">
                    <div className="head-top">
                        <div className="head-top-text">
                            <p>Доставка | Самовывоз</p>
                            <p>Коломна</p>
                            <Link to="/">
                                <img className="logo" src="img/img-header/logo.png" alt="" />
                            </Link>
                            <p>+ 7 (999)-888-88-88 </p>
                            <p>График работы</p>
                        </div>
                    </div>
                    <div className="black-bar" />
                    <div className="head-bottom">
                        <div className="head-bottom-search">
                            <img className="img-search" src="img/img-header/search.png" alt="" />
                            <p className="full-text-search">Например: Калифорния</p>
                        </div>
                        <div className="head-bottom-sale">
                            <img src="img/img-header/sale.png" alt="" />
                            <p className="full-text">Акции</p>
                        </div>
                        <Link to="Full-Menu">
                            <div className="head-bottom-menu">
                                <img className="menu-img" src="img/img-header/menu.png" alt="" />
                                <p className="menu-text">меню</p>
                            </div>
                        </Link>
                        <div className="head-bottom-basket">
                            <img className="img-bottom-basket" src="img/img-header/basket.png" alt="" />
                            <p className="full-text-basket">Корзина</p>
                        </div>
                        <div className="head-bottom-login">
                            <img className="img-bottom-login" src="img/img-header/login.png" alt="" />
                            <p className="full-text-login">Войти</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;