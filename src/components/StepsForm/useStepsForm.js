import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPPD, updatePPD } from "../../store/slices/ppdSlice";

const useStepsForm = (
  formStage,
  setFormStage,
  switchFormShown,
  formData,
  setFormData,
  formStageData,
  setFormStageData,
  passedStage,
  setPasedStage,
  isItemEditing,
  editinItemID,
  setIsitemEditing,
) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.ppd.list);
  const lastItemID = parseInt(data[data.length - 1].id);
  const editingItemData = data.find((entry) => entry.id === editinItemID);

  const formScreenInitialValues = [
    {
      propertyType: isItemEditing ? editingItemData.propertyType : "",
      negotable: isItemEditing ? editingItemData.negotable : "",
      price: isItemEditing ? editingItemData.price : "",
      ownership: isItemEditing ? editingItemData.ownership : "",
      propertAge: isItemEditing ? editingItemData.propertAge : "",
      propertApproved: isItemEditing ? editingItemData.propertApproved : "",
      propertyDescription: isItemEditing
        ? editingItemData.propertyDescription
        : "",
      bankLoan: isItemEditing ? editingItemData.bankLoan : "",
    },
    {
      ppdLength: isItemEditing ? editingItemData.ppdLength : "",
      ppdBreath: isItemEditing ? editingItemData.ppdBreath : "",
      totalArea: isItemEditing ? editingItemData.totalArea : "",
      areaUnit: isItemEditing ? editingItemData.areaUnit : "",
      numOfBHK: isItemEditing ? editingItemData.numOfBHK : "",
      numOfFloor: isItemEditing ? editingItemData.numOfFloor : "",
      attached: isItemEditing ? editingItemData.attached : "",
      westernToilet: isItemEditing ? editingItemData.westernToilet : "",
      furnished: isItemEditing ? editingItemData.furnished : "",
      carParking: isItemEditing ? editingItemData.carParking : "",
      lift: isItemEditing ? editingItemData.lift : "",
      electricity: isItemEditing ? editingItemData.electricity : "",
      facing: isItemEditing ? editingItemData.facing : "",
    },
    {
      name: isItemEditing ? editingItemData.name : "",
      mobile: isItemEditing ? editingItemData.mobile : "",
      postedBy: isItemEditing ? editingItemData.postedBy : "",
      saleType: isItemEditing ? editingItemData.saleType : "",
      featuredPackage: isItemEditing ? editingItemData.featuredPackage : "",
      ppdPackage: isItemEditing ? editingItemData.ppdPackage : "",
    },
    {
      email: isItemEditing ? editingItemData.email : "",
      city: isItemEditing ? editingItemData.city : "",
      area: isItemEditing ? editingItemData.area : "",
      pincode: isItemEditing ? editingItemData.pincode : "",
      address: isItemEditing ? editingItemData.address : "",
      landmark: isItemEditing ? editingItemData.landmark : "",
      latitude: isItemEditing ? editingItemData.latitude : "",
      longitude: isItemEditing ? editingItemData.longitude : "",
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

  const formValuesIniter = () => {
    if (
      !(
        Object.keys(formStageData[formStage]).length === 0 &&
        formStageData[formStage].constructor === Object
      )
    ) {
      return formStageData[formStage];
    } else {
      return formScreenInitialValues[formStage];
    }
  };

  const initialValues = formValuesIniter();

  const handleCancel = () => {
    setIsitemEditing(false);
    setPasedStage(0);
    setFormStage(0);
    switchFormShown();
    setFormStageData((prev) => {
      return prev.map((entry) => {
        return {};
      });
    });
  };

  const handleSubmit = (values, { setSubmitting }) => {
    if (formStage === 3) {
      if (isItemEditing) {
        dispatch(
          updatePPD({
            data: {
              ...editingItemData,
              ...formData,
              ...values,
            },
            id: editinItemID,
          })
        );
      } else {
        dispatch(
          addPPD({
            ...formData,
            ...values,
            id: (lastItemID + 1).toString(),
            views: 0,
            status: "unsold",
          })
        );
      }
      handleCancel();
      setSubmitting(false);
    } else {
      setFormData((data) => {
        return { ...data, ...values };
      });
      setFormStageData((prev) => {
        return prev.map((entry, idx) => {
          if (idx === formStage) {
            return values;
          } else {
            return entry;
          }
        });
      });
      if (formStage === passedStage) {
        setPasedStage((x) => x + 1);
        setFormStage((x) => x + 1);
      } else {
        setFormStage(passedStage);
      }
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
