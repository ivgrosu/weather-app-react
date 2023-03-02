import { Link } from "react-router-dom";
import IMAGES from "../assets/icons";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <p>
          Weather Channel <img src={IMAGES.i_01d} alt="logo" />
        </p>
      </Link>
    </div>
  );
};

export default Header;
