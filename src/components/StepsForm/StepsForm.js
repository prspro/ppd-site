import useStepsForm from "./useStepsForm";
import "./stepsform.sass";
import DecoratedButton from "../_Misc/DecoratedButton/DecoratedButton";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const StepsForm = () => {
  return (
    <div className="steps-form">
      <Formik
        initialValues={{
          propertyType: "",
          negotable: "",
          price: "",
          ownership: "",
          propertAge: "",
          propertApproved: "",
          propertyDescription: "",
          bankLoan: "",
        }}
        validationSchema={Yup.object({
          propertyType: Yup.string().required("Is required"),
          negotable: Yup.string().required("Is required"),
          price: Yup.number().required("Is required").min(0),
          ownership: Yup.string().required("Is required"),
          propertAge: Yup.string().required("Is required"),
          propertApproved: Yup.string().required("Is required"),
          propertyDescription: Yup.string().required("Is required").max(50),
          bankLoan: Yup.string().required("Is required").max(50),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <ul className="steps-form__list">
              <li className="steps-form__item">
                <label htmlFor="propertyType">
                  {errors.propertyType && touched.propertyType ? (
                    <span className="error">{errors.propertyType}</span>
                  ) : (
                    <span>Property Type</span>
                  )}
                </label>
                <div className="steps-form__select-wrap">
                  <Field as="select" name="propertyType">
                    <option selected hidden>
                      Select Property Type
                    </option>
                    <option value="red">Type 1</option>
                    <option value="green">Type 2</option>
                    <option value="blue">Type 3</option>
                  </Field>
                </div>
              </li>

              <li className="steps-form__item">
                <label htmlFor="ownership">
                  {errors.ownership && touched.ownership ? (
                    <span className="error">{errors.ownership}</span>
                  ) : (
                    <span>Ownership</span>
                  )}
                </label>
                <div className="steps-form__select-wrap">
                  <Field as="select" name="ownership">
                    <option selected hidden>
                      Select Ownership
                    </option>
                    <option value="red">Type 1</option>
                    <option value="green">Type 2</option>
                    <option value="blue">Type 3</option>
                  </Field>
                </div>
              </li>

              <li className="steps-form__item">
                <label htmlFor="price">
                  {errors.price && touched.price ? (
                    <span className="error">{errors.price}</span>
                  ) : (
                    <span>Price</span>
                  )}
                </label>
                <Field type="text" name="price" placeholder="Example: 10000" />
              </li>

              <li className="steps-form__item">
                <label htmlFor="negotable">
                  {errors.negotable && touched.negotable ? (
                    <span className="error">{errors.negotable}</span>
                  ) : (
                    <span>Negotable</span>
                  )}
                </label>
                <div className="steps-form__select-wrap">
                  <Field as="select" name="negotable">
                    <option selected hidden>
                      Select Negotable
                    </option>
                    <option value="red">Type 1</option>
                    <option value="green">Type 2</option>
                    <option value="blue">Type 3</option>
                  </Field>
                </div>
              </li>

              <li className="steps-form__item">
                <label htmlFor="propertAge">
                  {errors.propertAge && touched.propertAge ? (
                    <span className="error">{errors.propertAge}</span>
                  ) : (
                    <span>Property Age</span>
                  )}
                </label>
                <div className="steps-form__select-wrap">
                  <Field as="select" name="propertAge">
                    <option selected hidden>
                      Select Property Age
                    </option>
                    <option value="red">Type 1</option>
                    <option value="green">Type 2</option>
                    <option value="blue">Type 3</option>
                  </Field>
                </div>
              </li>

              <li className="steps-form__item">
                <label htmlFor="propertApproved">
                  {errors.propertApproved && touched.propertApproved ? (
                    <span className="error">{errors.propertApproved}</span>
                  ) : (
                    <span>Property Approved</span>
                  )}
                </label>
                <div className="steps-form__select-wrap">
                  <Field as="select" name="propertApproved">
                    <option selected hidden>
                      Property Approved
                    </option>
                    <option value="red">Type 1</option>
                    <option value="green">Type 2</option>
                    <option value="blue">Type 3</option>
                  </Field>
                </div>
              </li>

              <li className="steps-form__item">
                <label htmlFor="propertyDescription">
                  {errors.propertyDescription && touched.propertyDescription ? (
                    <span className="error">{errors.propertyDescription}</span>
                  ) : (
                    <span>Property Description</span>
                  )}
                </label>
                <Field type="text" name="propertyDescription" placeholder="" />
              </li>

              <li className="steps-form__item">
                <label htmlFor="bankLoan">
                  {errors.bankLoan && touched.bankLoan ? (
                    <span className="error">{errors.bankLoan}</span>
                  ) : (
                    <span>Bank Loan</span>
                  )}
                </label>
                <div className="steps-form__select-wrap">
                  <Field as="select" name="bankLoan">
                    <option selected hidden>
                      Bank Loan
                    </option>
                    <option value="red">Type 1</option>
                    <option value="green">Type 2</option>
                    <option value="blue">Type 3</option>
                  </Field>
                </div>
              </li>
            </ul>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
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
