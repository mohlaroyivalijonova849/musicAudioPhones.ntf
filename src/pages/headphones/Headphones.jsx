import HeadphoneElement from "../../components/headphoneElement/HeadphoneElement";
import ShopCard from "../../components/shopCard/ShopCard";
import HeadPhoneElem1 from "../../assets/headphone_elem1.png";
import HeadPhoneElem2 from "../../assets/headphone_elem2.png";
import HeadPhoneElem3 from "../../assets/headphone_elem3.png";
import "./Headphones.css";

function Headphones() {
  return (
    <div>
      <div className="hero__container">
        <div className="headPhons">
          <h1>HEADPHONES</h1>
        </div>
      </div>
      <HeadphoneElement
        title="XX99 Mark II Headphones"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        headTitle
        img={HeadPhoneElem1}
      />
      <HeadphoneElement
        title="XX99 Mark I Headphones"
        description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        reverse
        marginTop
        img={HeadPhoneElem2}
      />
      <HeadphoneElement
        title="XX59 Headphones"
        description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        marginTop
        img={HeadPhoneElem3}
      />
      <ShopCard marginTop={"240px"} />
    </div>
  );
}

export default Headphones;
