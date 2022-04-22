import useSVGicon from "./useSVGicon";
import sprite from "../../../img/sprite.svg";
// import "./svgicon.sass";
import classNames from "classnames";

const SVGicon = ({ classes, id }) => {
  const { iconClassList } = useSVGicon(classes);

  return (
    <svg className={classNames("svg-icon", id, iconClassList)}>
      <use href={sprite + "#" + id} />
    </svg>
  );
};

export default SVGicon;
