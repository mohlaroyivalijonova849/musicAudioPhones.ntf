import "./HeadphoneElement.css";
import Button from "../../components/buttons/Button";

function HeadphoneElement({
  headTitle,
  title,
  description,
  reverse,
  marginTop,
  img
}) {
  return (
    <div>
      <div
        className="container headphones__main"
        style={{
          flexDirection: `${reverse ? "row-reverse" : "row"}`,
          marginTop: `${marginTop ? "160px" : "0"}`,
        }}
      >
        <div className="img__container">
          <img src={img} alt="" />
        </div>
        <div className="herheadphones__left">
          <span
            className="headphones__title"
            style={{ display: `${headTitle ? "block" : "none"}` }}
          >
            NEW PRODUCT
          </span>
          <h1 className="headphones__desck">{title}</h1>
          <p className="headphones__paragrf">{description}</p>
          <Button bgColor="#d87d4a" />
        </div>
      </div>
    </div>
  );
}

export default HeadphoneElement;
