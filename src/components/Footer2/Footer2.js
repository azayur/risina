import style from "./Footer2.modul.scss";
function Footer2(){
    return(
        <div className={style.color}> 
            <footer className="footer-container1">
                <div className="footer-wraper1">
                    <div className="footer-top1">
                    <div className="footer-text-container1">
                        <p className="footer-title1">Рисовая Долина</p>
                        <div className="footer-text-one1">
                        <p>О компании</p>
                        <p>Акции</p>
                        <p>Бонусы и прграмма лояльности</p>
                        </div>
                    </div>
                    <div className="footer-text-container1">
                        <p className="footer-title1">Юридическая информация</p>
                        <div className="footer-text-two1">
                        <p>Публичная оферта</p>
                        <p>Политика конфиденциальности</p>
                        </div>
                    </div>
                    <div className="footer-text-container1">
                        <p className="footer-title1">Доставка и информация</p>
                        <div className="footer-text-three1">
                        <p>Доставка и самовывоз</p>
                        <p>Наши рестораны</p>
                        </div>
                    </div>
                    </div>
                    <div className="black-bar1" />
                    <div className="footer-bottom1">
                    <img src="/img/img-footer/logo.png" alt="" />
                    <div className="footer-icons1">
                        <a href="#">
                        <img src="img/img-footer/telegramm.png" className="footer-icon-one1" alt="" />
                        </a>
                        <a href="#">
                        <img src="img/img-footer/vk.png" className="footer-icon-two1" alt="" />
                        </a>
                        <a href="#">
                        <img src="img/img-footer/inst.png" className="footer-icon-three1" alt="" />
                        </a>
                    </div>
                    <div className="footer-number1">
                        <p>Номер поддержки <br /> +7 (496) 666 20 20</p>
                    </div>
                        <a href="#">
                            <img src="img/img-footer/google-icon.png" className="google-icon1" alt="" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer2;