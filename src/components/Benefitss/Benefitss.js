import style from "./Benefitss.modul.scss";
function Benefitss(){
    return(
        <div className={style.color}> 
            <div className="benefit">
                <img className="benefit-img" src="img/img-benefit/fonts.png" alt=""/>
                <div className="benefit-wraper">
                    <p className="benefit-title">Преимущества Рисовой Долины</p>
                    <div className="benefit-card">
                        <div className="benefit-one">
                            <img src="img/img-benefit/full1.png" alt="" />
                        </div>
                        <div className="benefit-two">
                            <img src="img/img-benefit/full2.png" alt="" />
                        </div>
                        <div className="benefit-three">
                            <img src="img/img-benefit/full3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Benefitss;