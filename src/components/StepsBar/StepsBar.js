import useStepsBar from "./useStepsBar";
import "./stepsbar.sass";
import DecoratedButton from "../_Misc/DecoratedButton/DecoratedButton";
import classNames from "classnames";

const StepsBar = ({ className }) => {
  return (
    <ul className={classNames("steps-bar", className)}>
      <li className="steps-bar__item active">
        <DecoratedButton className={"steps-bar__button"}>
          <div className="steps-bar__step-circle">
            <span>1</span>
          </div>
          <p>Basic Info</p>
        </DecoratedButton>
      </li>
      <li className="steps-bar__item">
        <DecoratedButton className={"steps-bar__button"}>
          <div className="steps-bar__step-circle">
            <span>2</span>
          </div>
          <p>Property Detail</p>
        </DecoratedButton>
      </li>
      <li className="steps-bar__item">
        <DecoratedButton className={"steps-bar__button"}>
          <div className="steps-bar__step-circle">
            <span>3</span>
          </div>
          <p>General Info</p>
        </DecoratedButton>
      </li>
      <li className="steps-bar__item">
        <DecoratedButton className={"steps-bar__button"}>
          <div className="steps-bar__step-circle">
            <span>4</span>
          </div>
          <p>Location Info</p>
        </DecoratedButton>
      </li>
    </ul>
  );
};

export default StepsBar;
