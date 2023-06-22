import style from "./Sale.modul.scss";
function Sale(){
    return(
        <div className={style.color}> 
            <div className="wrapper-main">
                <div className="main-sale">
                    <div className="text-sale">
                        <p>Акции</p>
                    </div>
                    <div className="sale-card">
                        <div className="sale-card-one">
                            <img src="img/img-main/sale/blok1.png" alt="" />
                        </div>
                        <div className="sale-card-two">
                            <img src="img/img-main/sale/blok2.png" alt="" />
                        </div>
                        <div className="sale-card-three">
                            <img src="img/img-main/sale/blok3.png" alt="" />
                        </div>
                        <div className="sale-card-fore">
                            <img src="img/img-main/sale/blok4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sale;