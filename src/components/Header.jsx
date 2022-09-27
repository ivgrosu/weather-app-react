import IMAGES from "../assets/icons";

const Header = () => {
  return (
    <div className="header">
      <p>
        Weather Channel <img src={IMAGES.i_01d} alt="logo" />
      </p>
    </div>
  );
};

export default Header;
