import HeadphoneElement from "../../components/headphoneElement/HeadphoneElement";
import ShopCard from "../../components/shopCard/ShopCard";
import SpeakerElem1 from "../../assets/speaker_elem1.png";
import SpeakerElem2 from "../../assets/speaker_elem2.png";
import "./Speakers.css";

function Speakers() {
  return (
    <div>
      <div className="hero__container">
        <div className="headPhons">
          <h1>SPEAKERS</h1>
        </div>
      </div>
      <HeadphoneElement
        title="ZX9 SPEAKER"
        description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        headTitle
        img={SpeakerElem1}
      />
      <HeadphoneElement
        title="ZX7 SPEAKER"
        description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        reverse
        marginTop
        img={SpeakerElem2}
      />
      <ShopCard marginTop={"240px"} />
    </div>
  );
}

export default Speakers;
