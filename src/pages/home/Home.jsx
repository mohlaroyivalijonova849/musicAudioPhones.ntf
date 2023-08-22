import "./Home.css";
import Button from "../../components/buttons/Button";
import ShopCard from "../../components/shopCard/ShopCard";
import SpeakerFonImg from "../../assets/image-removebg-preview4.png";

function Home() {
  return (
    <>
      <div className="hero__container">
        <div className="container  hero__main">
          <div className="hero__left">
            <span className="hero__title">NEW PRODUCT</span>
            <h1 className="hero__desck">XX99 Mark II Headphones</h1>
            <p className="hero__paragrf">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button bgColor="#d87d4a" />
            {/* ZX9 SPEAKER */}
          </div>
          <div className="hero__right"></div>
        </div>
      </div>
      <ShopCard />
      <div className="container  zx__speaker-main zx__speaker">
        <div>
          <img className="SpeakerFonImg" src={SpeakerFonImg} alt="" />
        </div>
        <div className="hero__left">
          <h1 className="hero__desck">ZX9 SPEAKER</h1>
          <p className="hero__paragrf">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button bgColor="#000000" />
        </div>
        {/* ZX7 SPEAKER */}
      </div>
      <div className="container  zx7__speaker-main zx7__speaker">
        <div className="zx7__speaker__right">
          <div className="x7__speaker--left">
            <h3 className="x7__speaker--title">ZX7 SPEAKER</h3>
            <Button bgColor="none" black border />
          </div>
        </div>
      </div>
      {/* YX1 Earphones */}
      <div className="container yx1__earphoes-main zx7__speaker">
        <div className="yx1__earphones__right"></div>
        <div className="yx1__earphones--left">
          <h3 className="yx1__earphones--title">ZX7 SPEAKER</h3>
          <Button bgColor="linear" black border />
        </div>
      </div>
    </>
  );
}

export default Home;
