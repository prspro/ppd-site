import useStepsForm from "./useStepsForm";
import "./stepsform.sass";
import DecoratedButton from "../_Misc/DecoratedButton/DecoratedButton";

const StepsForm = () => {
  return (
    <div className="steps-form">
      <form>
        <ul className="steps-form__list">
          <li className="steps-form__item">
            <label>Property Type</label>
            <div className="steps-form__select-wrap">
              <select>
                <option selected disabled hidden>
                  Select Property Type
                </option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
            </div>
          </li>
          <li className="steps-form__item">
            <label>Negotable</label>
            <div className="steps-form__select-wrap">
              <select>
                <option selected disabled hidden>
                  Select Negotable
                </option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
            </div>
          </li>
          <li className="steps-form__item">
            <label>Price</label>
            <input type="text" placeholder="Example: 10000" />
          </li>
          <li className="steps-form__item">
            <label>Ownership</label>
            <div className="steps-form__select-wrap">
              <select>
                <option selected disabled hidden>
                  Select Ownership
                </option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
            </div>
          </li>
          <li className="steps-form__item">
            <label>Property Age</label>
            <div className="steps-form__select-wrap">
              <select>
                <option selected disabled hidden>
                  Select Property Age
                </option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
            </div>
          </li>
          <li className="steps-form__item">
            <label>Property Approved</label>
            <div className="steps-form__select-wrap">
              <select>
                <option selected disabled hidden>
                  Property Approved
                </option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
            </div>
          </li>
          <li className="steps-form__item">
            <label>Property Description</label>
            <input type="text" placeholder="" />
          </li>
          <li className="steps-form__item">
            <label>Bank Loan</label>
            <div className="steps-form__select-wrap">
              <select>
                <option selected disabled hidden>
                  Bank Loan
                </option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
            </div>
          </li>
        </ul>
      </form>
      <div className="steps-form__buttons-bar">
        <DecoratedButton className="steps-form__button">Cancel</DecoratedButton>
        <DecoratedButton className="steps-form__button steps-form__button--orange">
          Save &#38; Continue
        </DecoratedButton>
      </div>
    </div>
  );
};

export default StepsForm;
