import { useState, React } from "react";

const usePropertyPage = () => {
  const [formStage, setFormStage] = useState(0);
  const [passedStage, setPasedStage] = useState(0);
  const [formData, setFormData] = useState({});
  const [formStageData, setFormStageData] = useState([{}, {}, {}, {}]);
  const [isFormShown, setIsFormShown] = useState(false);
  const [isItemEditing, setIsitemEditing] = useState(false);
  const [editinItemID, setEditinItemID] = useState("");

  const switchFormShown = () => {
    setIsFormShown((isShown) => !isShown);
  };

  return {
    formStage,
    setFormStage,
    passedStage,
    setPasedStage,
    formStageData,
    setFormStageData,
    formData,
    setFormData,
    isFormShown,
    switchFormShown,
    isItemEditing,
    setIsitemEditing,
    editinItemID,
    setEditinItemID,
  };
};

export default usePropertyPage;
