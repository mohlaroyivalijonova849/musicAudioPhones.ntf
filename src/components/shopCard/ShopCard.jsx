import "./ShopCard.css";
import HeadphonesIMg from "../../assets/image-removebg-preview.png";
import pathImg from "../../assets/path__img.svg";
import speakerImg from "../../assets/image-removebg-preview2.png";
import EarphonesImg from "../../assets/image-removebg-preview3.png";

const cardData = [
  {
    img: HeadphonesIMg,
    title: "HEADPHONES",
  },
  {
    img: speakerImg,
    title: "SPEAKERS",
  },
  {
    img: EarphonesImg,
    title: "EARPHONES",
  },
];

function ShopCard({ marginTop }) {
  return (
    <div
      className="container shopCard__main"
      style={{ marginTop: `${marginTop}` }}
    >
      {cardData.map((item, idx) => {
        return (
          <div className="shopCard" key={idx}>
            <img className="shopCard__img" src={item.img} alt="" />
            <h2 className="shopCard__title">{item.title}</h2>
            <div className="shopCard__span">
              <span>Shop</span>
              <img src={pathImg} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShopCard;
