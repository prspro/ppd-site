import useStepsForm from "./useStepsForm";
import "./stepsform.sass";
import DecoratedButton from "../_Misc/DecoratedButton/DecoratedButton";
import { Formik, Field, Form } from "formik";

const StepsForm = ({
  formStage,
  setFormStage,
  switchFormShown,
  formData,
  setFormData,
}) => {
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    handleCancel,
    // formStage,
  } = useStepsForm(
    formStage,
    setFormStage,
    switchFormShown,
    formData,
    setFormData
  );

  return (
    <div className="steps-form">
      {formStage === 0 && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ errors, touched, isValid }) => {
            return (
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
                        <option defaultValue hidden>
                          Select Property Type
                        </option>
                        <option value="Type 1">Type 1</option>
                        <option value="Type 2">Type 2</option>
                        <option value="Type 3">Type 3</option>
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
                        <option defaultValue hidden>
                          Select Ownership
                        </option>
                        <option value="Ownership 1">Ownership 1</option>
                        <option value="Ownership 2">Ownership 2</option>
                        <option value="Ownership 3">Ownership 3</option>
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
                    <Field
                      type="text"
                      name="price"
                      placeholder="Example: 10000"
                    />
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
                        <option defaultValue hidden>
                          Select Negotable
                        </option>
                        <option value="Negotable 1">Negotable 1</option>
                        <option value="Negotable 2">Negotable 2</option>
                        <option value="Negotable 3">Negotable 3</option>
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
                        <option defaultValue hidden>
                          Select Property Age
                        </option>
                        <option value="Age 1">Age 1</option>
                        <option value="Age 2">Age 2</option>
                        <option value="Age 3">Age 3</option>
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
                        <option defaultValue hidden>
                          Property Approved
                        </option>
                        <option value="Approved 1">Approved 1</option>
                        <option value="Approved 2">Approved 2</option>
                        <option value="Approved 3">Approved 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="propertyDescription">
                      {errors.propertyDescription &&
                      touched.propertyDescription ? (
                        <span className="error">
                          {errors.propertyDescription}
                        </span>
                      ) : (
                        <span>Property Description</span>
                      )}
                    </label>
                    <Field
                      type="text"
                      name="propertyDescription"
                      placeholder=""
                    />
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
                        <option defaultValue hidden>
                          Bank Loan
                        </option>
                        <option value="Bank Loan 1">Bank Loan 1</option>
                        <option value="Bank Loan 2">Bank Loan 2</option>
                        <option value="Bank Loan 3">Bank Loan 3</option>
                      </Field>
                    </div>
                  </li>
                </ul>
                <div className="steps-form__buttons-bar">
                  <DecoratedButton
                    className="steps-form__button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </DecoratedButton>
                  <DecoratedButton
                    type="submit"
                    className="steps-form__button steps-form__button--orange"
                  >
                    Save &#38; Continue
                  </DecoratedButton>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
      {formStage === 1 && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ errors, touched, isValid }) => {
            return (
              <Form>
                <ul className="steps-form__list">
                  <li className="steps-form__item">
                    <label htmlFor="ppdLength">
                      {errors.ppdLength && touched.ppdLength ? (
                        <span className="error">{errors.ppdLength}</span>
                      ) : (
                        <span>Length</span>
                      )}
                    </label>
                    <Field
                      type="text"
                      name="ppdLength"
                      placeholder="Example: 1000"
                    />
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="ppdBreath">
                      {errors.ppdBreath && touched.ppdBreath ? (
                        <span className="error">{errors.ppdBreath}</span>
                      ) : (
                        <span>Breath</span>
                      )}
                    </label>
                    <Field
                      type="text"
                      name="ppdBreath"
                      placeholder="Example: 1000"
                    />
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="totalArea">
                      {errors.totalArea && touched.totalArea ? (
                        <span className="error">{errors.totalArea}</span>
                      ) : (
                        <span>Total Area</span>
                      )}
                    </label>
                    <Field
                      type="text"
                      name="totalArea"
                      placeholder="Example: 1000"
                    />
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="areaUnit">
                      {errors.areaUnit && touched.areaUnit ? (
                        <span className="error">{errors.areaUnit}</span>
                      ) : (
                        <span>Area Unit</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="areaUnit">
                        <option defaultValue hidden>
                          Area Unit
                        </option>
                        <option value="Area Unit 1">Area Unit 1</option>
                        <option value="Area Unit 2">Area Unit 2</option>
                        <option value="Area Unit 3">Area Unit 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="numOfBHK">
                      {errors.numOfBHK && touched.numOfBHK ? (
                        <span className="error">{errors.numOfBHK}</span>
                      ) : (
                        <span>No of BHK</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="numOfBHK">
                        <option defaultValue hidden>
                          Select No of BHK
                        </option>
                        <option value="No of BHK 1">No of BHK 1</option>
                        <option value="No of BHK 2">No of BHK 2</option>
                        <option value="No of BHK 3">No of BHK 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="numOfFloor">
                      {errors.numOfFloor && touched.numOfFloor ? (
                        <span className="error">{errors.numOfFloor}</span>
                      ) : (
                        <span>No of Floor</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="numOfFloor">
                        <option defaultValue hidden>
                          Select No of Floor
                        </option>
                        <option value="No of Floor 1">No of Floor 1</option>
                        <option value="No of Floor 2">No of Floor 2</option>
                        <option value="No of Floor 3">No of Floor 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="attached">
                      {errors.attached && touched.attached ? (
                        <span className="error">{errors.attached}</span>
                      ) : (
                        <span>Attached</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="attached">
                        <option defaultValue hidden>
                          Select Attached
                        </option>
                        <option value="Attached 1">Attached 1</option>
                        <option value="Attached 2">Attached 2</option>
                        <option value="Attached 3">Attached 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="westernToilet">
                      {errors.westernToilet && touched.westernToilet ? (
                        <span className="error">{errors.westernToilet}</span>
                      ) : (
                        <span>Western Toilet</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="westernToilet">
                        <option defaultValue hidden>
                          Select Western Toilet
                        </option>
                        <option value="Western Toilet 1">
                          Western Toilet 1
                        </option>
                        <option value="Western Toilet 2">
                          Western Toilet 2
                        </option>
                        <option value="Western Toilet 3">
                          Western Toilet 3
                        </option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="furnished">
                      {errors.furnished && touched.furnished ? (
                        <span className="error">{errors.furnished}</span>
                      ) : (
                        <span>Furnished</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="furnished">
                        <option defaultValue hidden>
                          Select Furnished
                        </option>
                        <option value="Furnished 1">Furnished 1</option>
                        <option value="Furnished 2">Furnished 2</option>
                        <option value="Furnished 3">Furnished 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="carParking">
                      {errors.carParking && touched.carParking ? (
                        <span className="error">{errors.carParking}</span>
                      ) : (
                        <span>Car Parking</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="carParking">
                        <option defaultValue hidden>
                          Select Car Parking
                        </option>
                        <option value="Car Parking 1">Car Parking 1</option>
                        <option value="Car Parking 2">Car Parking 2</option>
                        <option value="Car Parking 3">Car Parking 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="lift">
                      {errors.lift && touched.lift ? (
                        <span className="error">{errors.lift}</span>
                      ) : (
                        <span>Lift</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="lift">
                        <option defaultValue hidden>
                          Select Lift
                        </option>
                        <option value="Lift 1">Lift 1</option>
                        <option value="Lift 2">Lift 2</option>
                        <option value="Lift 3">Lift 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="electricity">
                      {errors.electricity && touched.electricity ? (
                        <span className="error">{errors.electricity}</span>
                      ) : (
                        <span>Electricity</span>
                      )}
                    </label>
                    <Field
                      type="text"
                      name="electricity"
                      placeholder="Example: 3 phase"
                    />
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="facing">
                      {errors.facing && touched.facing ? (
                        <span className="error">{errors.facing}</span>
                      ) : (
                        <span>Facing</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="facing">
                        <option defaultValue hidden>
                          Select Facing
                        </option>
                        <option value="Facing 1">Facing 1</option>
                        <option value="Facing 2">Facing 2</option>
                        <option value="Facing 3">Facing 3</option>
                      </Field>
                    </div>
                  </li>
                </ul>
                <div className="steps-form__buttons-bar">
                  <DecoratedButton
                    className="steps-form__button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </DecoratedButton>
                  <DecoratedButton
                    type="submit"
                    className="steps-form__button steps-form__button--orange"
                  >
                    Save &#38; Continue
                  </DecoratedButton>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}

      {formStage === 2 && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ errors, touched, isValid }) => {
            return (
              <Form>
                <ul className="steps-form__list">
                  <li className="steps-form__item">
                    <label htmlFor="name">
                      {errors.name && touched.name ? (
                        <span className="error">{errors.name}</span>
                      ) : (
                        <span>Name</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="name">
                        <option defaultValue hidden>
                          Owner
                        </option>
                        <option value="Owner 1">Owner 1</option>
                        <option value="Owner 2">Owner 2</option>
                        <option value="Owner 3">Owner 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="mobile">
                      {errors.mobile && touched.mobile ? (
                        <span className="error">{errors.mobile}</span>
                      ) : (
                        <span>Mobile</span>
                      )}
                    </label>
                    <Field
                      type="text"
                      name="mobile"
                      placeholder="Enter Mobile Number"
                    />
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="postedBy">
                      {errors.postedBy && touched.postedBy ? (
                        <span className="error">{errors.postedBy}</span>
                      ) : (
                        <span>Posted By</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="postedBy">
                        <option defaultValue hidden>
                          Posted By
                        </option>
                        <option value="Posted By 1">Posted By 1</option>
                        <option value="Posted By 2">Posted By 2</option>
                        <option value="Posted By 3">Posted By 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="saleType">
                      {errors.saleType && touched.saleType ? (
                        <span className="error">{errors.saleType}</span>
                      ) : (
                        <span>Sale Type</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="saleType">
                        <option defaultValue hidden>
                          Please Select
                        </option>
                        <option value="Sale Type 1">Sale Type 1</option>
                        <option value="Sale Type 2">Sale Type 2</option>
                        <option value="Sale Type 3">Sale Type 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="featuredPackage">
                      {errors.featuredPackage && touched.featuredPackage ? (
                        <span className="error">{errors.featuredPackage}</span>
                      ) : (
                        <span>Featured Package</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="featuredPackage">
                        <option defaultValue hidden>
                          Please Select
                        </option>
                        <option value="Featured Package 1">
                          Featured Package 1
                        </option>
                        <option value="Featured Package 2">
                          Featured Package 2
                        </option>
                        <option value="Featured Package 3">
                          Featured Package 3
                        </option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="ppdPackage">
                      {errors.ppdPackage && touched.ppdPackage ? (
                        <span className="error">{errors.ppdPackage}</span>
                      ) : (
                        <span>PPD Package</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="ppdPackage">
                        <option defaultValue hidden>
                          Please Select
                        </option>
                        <option value="PPD Package 1">PPD Package 1</option>
                        <option value="PPD Package 2">PPD Package 2</option>
                        <option value="PPD Package 3">PPD Package 3</option>
                      </Field>
                    </div>
                  </li>
                </ul>
                <div className="steps-form__buttons-bar">
                  <DecoratedButton
                    className="steps-form__button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </DecoratedButton>
                  <DecoratedButton
                    type="submit"
                    className="steps-form__button steps-form__button--orange"
                  >
                    Save &#38; Continue
                  </DecoratedButton>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}

      {formStage === 3 && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ errors, touched, isValid }) => {
            return (
              <Form>
                <ul className="steps-form__list">
                  <li className="steps-form__item">
                    <label htmlFor="email">
                      {errors.email && touched.email ? (
                        <span className="error">{errors.email}</span>
                      ) : (
                        <span>Email</span>
                      )}
                    </label>
                    <Field type="email" name="email" placeholder="Email" />
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="city">
                      {errors.city && touched.city ? (
                        <span className="error">{errors.city}</span>
                      ) : (
                        <span>City</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="city">
                        <option defaultValue hidden>
                          City
                        </option>
                        <option value="city 1">city 1</option>
                        <option value="city 2">city 2</option>
                        <option value="city 3">city 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="area">
                      {errors.area && touched.area ? (
                        <span className="error">{errors.area}</span>
                      ) : (
                        <span>Area</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="area">
                        <option defaultValue hidden>
                          Area
                        </option>
                        <option value="area 1">area 1</option>
                        <option value="area 2">area 2</option>
                        <option value="area 3">area 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="pincode">
                      {errors.pincode && touched.pincode ? (
                        <span className="error">{errors.pincode}</span>
                      ) : (
                        <span>Pincode</span>
                      )}
                    </label>
                    <div className="steps-form__select-wrap">
                      <Field as="select" name="pincode">
                        <option defaultValue hidden>
                          Pincode
                        </option>
                        <option value="pincode 1">pincode 1</option>
                        <option value="pincode 2">pincode 2</option>
                        <option value="pincode 3">pincode 3</option>
                      </Field>
                    </div>
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="address">
                      {errors.address && touched.address ? (
                        <span className="error">{errors.address}</span>
                      ) : (
                        <span>Address</span>
                      )}
                    </label>
                    <Field type="text" name="address" placeholder="Address" />
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="landmark">
                      {errors.landmark && touched.landmark ? (
                        <span className="error">{errors.landmark}</span>
                      ) : (
                        <span>Landmark</span>
                      )}
                    </label>
                    <Field type="text" name="landmark" placeholder="Landmark" />
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="latitude">
                      {errors.latitude && touched.latitude ? (
                        <span className="error">{errors.latitude}</span>
                      ) : (
                        <span>Latitude</span>
                      )}
                    </label>
                    <Field type="text" name="latitude" placeholder="Latitude" />
                  </li>

                  <li className="steps-form__item">
                    <label htmlFor="longitude">
                      {errors.longitude && touched.longitude ? (
                        <span className="error">{errors.longitude}</span>
                      ) : (
                        <span>Longitude</span>
                      )}
                    </label>
                    <Field
                      type="text"
                      name="longitude"
                      placeholder="Longitude"
                    />
                  </li>
                </ul>
                <div className="steps-form__buttons-bar">
                  <DecoratedButton
                    className="steps-form__button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </DecoratedButton>
                  <DecoratedButton
                    type="submit"
                    className="steps-form__button steps-form__button--orange"
                  >
                    Save &#38; Continue
                  </DecoratedButton>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
    </div>
  );
};

export default StepsForm;
