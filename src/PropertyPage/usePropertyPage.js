import { useState, React } from "react";

const usePropertyPage = () => {
  const [formStage, setFormStage] = useState(0);
  const [formData, setFormData] = useState({});
  const [isFormShown, setIsFormShown] = useState(false);

  const switchFormShown = () => {
    setIsFormShown(isShown => !isShown);
  }

  return {
    formStage,
    setFormStage,
    formData,
    setFormData,
    isFormShown,
    switchFormShown,
  };
};

export default usePropertyPage;
