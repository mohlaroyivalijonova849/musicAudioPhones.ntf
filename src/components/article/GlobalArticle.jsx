import "./GlobalArticle.css";
import GlobalImg from "../../assets/audiogear.png";

function GlobalArticle() {
  return (
    <div className="global__container">
      <div className="container  global__main">
        <div className="global__left">
          <h2 className="global__title">
            Bringing you the <span className="global__desc">best</span> audio
            gear
          </h2>
          <p className="global__paragrf">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div>
          <img src={GlobalImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default GlobalArticle;
