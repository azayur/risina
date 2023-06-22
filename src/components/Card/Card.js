import style from "./Card.modul.scss";
function Card(){
    return(
        <div className={style.color}> 
            <div className="wrapper-memu">
  <div className="sale-card">
    <div className="menu-card-one">
      <img src="img/img-main/menu/roll5.png" alt />
      <div>
        <p className="card-name">Калифорния каппа маки с икрой</p>
        <div className="card-text-wraper">
          <p className="card-text">Краб-микс, рис, икра масаго, свежий огурец, водоросли нори.<span className="card-wheight">210 г 8 штук.</span></p>
        </div>
      </div>
      <div className="card-price">
        <img className="card-price-img" src="img/img-main/menu/price1.png" alt />
        <a className="box" href="#">В корзину </a>
      </div>
    </div>
    <div className="menu-card-two">
      <img src="img/img-main/menu/roll6.png" alt />
      <div>
        <p className="card-name">ФИЛАДЕЛЬФИЯ СЯКЕ</p>
        <div className="card-text-wraper">
          <p className="card-text">Лосось, рис, сыр сливочный "Cremette", свежий огурец, водоросли нори.<span className="card-wheight">225г г 8 штук.</span></p>
        </div>
      </div>
      <div className="card-price">
        <img className="card-price-img" src="img/img-main/menu/price2.png" alt />
        <a className="box" href="#">В корзину </a>
      </div>
    </div>
    <div className="menu-card-three">
      <img src="img/img-main/menu/roll7.png" alt />
      <div>
        <p className="card-name">Мацури Хит</p>
        <div className="card-text-wraper">
          <p className="card-text">4 сета на выбор+ Онигири с курицей в подарок к сету.<span className="card-wheight">1140 г 40 штук.</span></p>
        </div>
      </div>
      <div className="card-price">
        <img className="card-price-img" src="img/img-main/menu/price3.png" alt />
        <a className="box" href="#">В корзину </a>
      </div>
    </div>
    <div className="menu-card-fore">
      <img src="img/img-main/menu/roll8.png" alt />
      <div>
        <p className="card-name">Япоша</p>
        <div className="card-text-wraper">
          <p className="card-text">4 сета на выбор+ Онигири с курицей в подарок к сету.<span className="card-wheight">1225 г 48 штук.</span></p>
        </div>
      </div>
      <div className="card-price">
        <img className="card-price-img" src="img/img-main/menu/price4.png" alt />
        <a className="box" href="#">В корзину </a>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
export default Card;