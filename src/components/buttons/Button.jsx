import { Link } from "react-router-dom";
import "./Button.css";

function Button({ bgColor, black, border }) {
  return (
    <div>
      <Link to="/">
        <button
          style={{
            background: `${bgColor}`,
            color: `${black ? "#000000" : "#ffffff"}`,
            border: `${border ? "1px solid #000" : "none"}`,
          }}
        >
          See Product
        </button>
      </Link>
    </div>
  );
}

export default Button;
