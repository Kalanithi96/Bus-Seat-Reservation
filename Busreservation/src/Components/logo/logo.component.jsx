import "./logo.styles.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <div className="logo-image-container">
          <img src={require("../../Assets/images/busLogo.jpg")} alt="buslogo" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
