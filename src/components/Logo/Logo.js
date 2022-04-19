import "./logo.sass";
import { Link } from "react-router-dom";

const Logo = () => {
  const picturePath = "/img/svg/logo.svg";
  const pictureAlt = "alt";

  return (
    <Link to="/" className="logo">
      <div className="logo__wrap">
        <img src={picturePath} className="logo__picture" alt={pictureAlt} />
      </div>
      <span className="logo__name">PPD</span>
    </Link>
  );
};

export default Logo;
