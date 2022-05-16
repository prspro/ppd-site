import useStepsBar from "./useStepsBar";
import "./stepsbar.sass";
import DecoratedButton from "../_Misc/DecoratedButton/DecoratedButton";
import classNames from "classnames";

const StepsBar = ({ className, formStage, setFormStage, passedStage }) => {
  const { isButtonActive, isStagePassed, setAllowedFormStage } = useStepsBar(
    formStage,
    setFormStage,
    passedStage,
  );

  const buttonsList = [
    "Basic Info",
    "Property Detail",
    "General Info",
    "Location Info",
  ];

  return (
    <ul className={classNames("steps-bar", className)}>
      {buttonsList.map((buttonText, idx) => {
        return (
          <li
            key={idx}
            className={classNames("steps-bar__item", {
              active: isButtonActive(idx), passed: isStagePassed(idx)
            })}
          >
            <DecoratedButton
              className={"steps-bar__button"}
              onClick={() => setAllowedFormStage(idx)}
            >
              <div className="steps-bar__step-circle">
                <span>{idx + 1}</span>
              </div>
              <p>{buttonText}</p>
            </DecoratedButton>
          </li>
        );
      })}
    </ul>
  );
};

export default StepsBar;
