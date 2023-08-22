import HeadphoneElement from "../../components/headphoneElement/HeadphoneElement";
import ShopCard from "../../components/shopCard/ShopCard";
import EarPhoneElem1 from "../../assets/earphones_elem1.png";
import "./Earphones.css";

function Earphones() {
  return (
    <div>
      <div className="hero__container">
        <div className="headPhons">
          <h1>EARPHONES</h1>
        </div>
      </div>
      <HeadphoneElement
        title="XX99 Mark II Headphones"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        headTitle
        img={EarPhoneElem1}
      />
      <ShopCard marginTop={"240px"} />
    </div>
  );
}

export default Earphones;
