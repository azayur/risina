import style from "./Footer.modul.scss";
function Footer(){
    return(
        <div className={style.color}> 
            <footer>
                <div className="footer-wraper">
                    <div className="footer-top">
                    <div className="footer-text-container">
                        <p className="footer-title">Рисовая Долина</p>
                        <div className="footer-text-one">
                        <p>О компании</p>
                        <p>Акции</p>
                        <p>Бонусы и прграмма лояльности</p>
                        </div>
                    </div>
                    <div className="footer-text-container">
                        <p className="footer-title">Юридическая информация</p>
                        <div className="footer-text-two">
                        <p>Публичная оферта</p>
                        <p>Политика конфиденциальности</p>
                        </div>
                    </div>
                    <div className="footer-text-container">
                        <p className="footer-title">Доставка и информация</p>
                        <div className="footer-text-three">
                        <p>Доставка и самовывоз</p>
                        <p>Наши рестораны</p>
                        </div>
                    </div>
                    </div>
                    <div className="black-bar" />
                    <div className="footer-bottom">
                    <img src="/img/img-footer/logo.png" alt="" />
                    <div className="footer-icons">
                        <a href="#">
                        <img src="img/img-footer/telegramm.png" className="footer-icon-one" alt="" />
                        </a>
                        <a href="#">
                        <img src="img/img-footer/vk.png" className="footer-icon-two" alt="" />
                        </a>
                        <a href="#">
                        <img src="img/img-footer/inst.png" className="footer-icon-three" alt="" />
                        </a>
                    </div>
                    <div className="footer-number">
                        <p>Номер поддержки <br /> +7 (496) 666 20 20</p>
                    </div>
                        <a href="#">
                            <img src="img/img-footer/google-icon.png" className="google-icon" alt="" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;