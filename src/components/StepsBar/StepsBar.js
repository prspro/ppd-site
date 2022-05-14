import useStepsBar from "./useStepsBar";
import "./stepsbar.sass";
import DecoratedButton from "../_Misc/DecoratedButton/DecoratedButton";
import classNames from "classnames";

const StepsBar = ({ className, formStage, setFormStage }) => {
  const {
    isButtonActive,
    setAllowedFormStage,
  } = useStepsBar(formStage, setFormStage);

  const buttonsList = [
    "Basic Info",
    "Property Detail",
    "General Info",
    "Location Info",
  ];

  return (
    <ul className={classNames("steps-bar", className)}>
      {buttonsList.map((button, idx) => {
        return (
          <li
            className={classNames("steps-bar__item", { active: isButtonActive(idx) })}
          >
            <DecoratedButton
              className={"steps-bar__button"}
              onClick={() => setAllowedFormStage(idx)}
            >
              <div className="steps-bar__step-circle">
                <span>{idx + 1}</span>
              </div>
              <p>{button}</p>
            </DecoratedButton>
          </li>
        );
      })}
    </ul>
  );
};

export default StepsBar;
