import { useState, useEffect } from "react";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addPPD } from "../../store/slices/ppdSlice";

const useStepsForm = (
  formStage,
  setFormStage,
  switchFormShown,
  formData,
  setFormData
) => {
  // const [formStage, setFormStage] = useState(0);
  // const [formData, setFormData] = useState({});

  console.log(formStage);

  const dispatch = useDispatch();

  const formScreenInitialValues = [
    {
      propertyType: "",
      negotable: "",
      price: "",
      ownership: "",
      propertAge: "",
      propertApproved: "",
      propertyDescription: "",
      bankLoan: "",
    },
    {
      ppdLength: "",
      ppdBreath: "",
      totalArea: "",
      areaUnit: "",
      numOfBHK: "",
      numOfFloor: "",
      attached: "",
      westernToilet: "",
      furnished: "",
      carParking: "",
      lift: "",
      electricity: "",
      facing: "",
    },
    {
      name: "",
      mobile: "",
      postedBy: "",
      saleType: "",
      featuredPackage: "",
      ppdPackage: "",
    },
    {
      email: "",
      city: "",
      area: "",
      pincode: "",
      address: "",
      landmark: "",
      latitude: "",
      longitude: "",
    },
  ];

  const formScreenValidationSchema = [
    {
      propertyType: Yup.string().required("Is required"),
      negotable: Yup.string().required("Is required"),
      price: Yup.number()
        .typeError("Price must be a number")
        .required("Is required")
        .min(0),
      ownership: Yup.string().required("Is required"),
      propertAge: Yup.string().required("Is required"),
      propertApproved: Yup.string().required("Is required"),
      propertyDescription: Yup.string().max(50),
      bankLoan: Yup.string().required("Is required").max(50),
    },
    {
      ppdLength: Yup.number()
        .typeError("Length must be a number")
        .required("Is required")
        .min(0),
      ppdBreath: Yup.number()
        .typeError("Breath must be a number")
        .required("Is required")
        .min(0),
      totalArea: Yup.number()
        .typeError("Total area must be a number")
        .required("Is required")
        .min(0),
      areaUnit: Yup.string().required("Is required"),
      numOfBHK: Yup.string().required("Is required"),
      numOfFloor: Yup.string().required("Is required"),
      attached: Yup.string().required("Is required"),
      westernToilet: Yup.string().required("Is required"),
      furnished: Yup.string().required("Is required"),
      carParking: Yup.string().required("Is required"),
      lift: Yup.string().required("Is required"),
      electricity: Yup.string().max(50).required("Is required"),
      facing: Yup.string().required("Is required"),
    },
    {
      name: Yup.string().required("Is required"),
      mobile: Yup.string().max(50).required("Is required"),
      postedBy: Yup.string().required("Is required"),
      saleType: Yup.string().required("Is required"),
      featuredPackage: Yup.string().required("Is required"),
      ppdPackage: Yup.string().required("Is required"),
    },
    {
      email: Yup.string().email("Enter correct email").required("Is required"),
      city: Yup.string().required("Is required"),
      area: Yup.string().required("Is required"),
      pincode: Yup.string().required("Is required"),
      address: Yup.string().max(50).required("Is required"),
      landmark: Yup.string().max(50).required("Is required"),
      latitude: Yup.string().max(50).required("Is required"),
      longitude: Yup.string().max(50).required("Is required"),
    },
  ];

  const validationSchema = Yup.object().shape(
    formScreenValidationSchema[formStage]
  );
  const initialValues = formScreenInitialValues[formStage];

  const handleCancel = () => {
    switchFormShown();
  };

  const handleSubmit = (values, { setSubmitting }) => {
    if (formStage === 3) {
      dispatch(
        addPPD({
          ...formData,
          ...values,
          id: "PPD100500",
          views: 0,
          status: "unsold",
        })
      );
      setFormStage(0);
      switchFormShown();
      setSubmitting(false);
    } else {
      setFormData((data) => {
        return { ...data, ...values };
      });
      setFormStage((x) => x + 1);
    }
  };

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    handleCancel,
    formStage,
  };
};

export default useStepsForm;
