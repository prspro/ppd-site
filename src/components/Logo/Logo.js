// import { Typography } from "@material-ui/core";
import "./logo.sass";

const Logo = () => {

    const picturePath = "/img/svg/logo.svg";
    const pictureAlt = "alt";

    return (
        <a href="#" className="logo">
            <div className="logo__wrap">
                <img
                    src={picturePath}
                    className="logo__picture"
                    alt={pictureAlt}
                />
            </div>
            {/* is it better to use <Typography> here? */}
            <span className="logo__name">
                PPD
            </span>
        </a>
    );
}

export default Logo;
