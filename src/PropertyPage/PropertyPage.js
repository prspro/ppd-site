import React from "react";
import StepsBar from "../components/StepsBar/StepsBar";
import StepsForm from "../components/StepsForm/StepsForm";
import Summary from "../components/Summary/Summary";
import DataList from "../components/DataList/DataList";

import usePropertyPage from "./usePropertyPage";

const PropertyPage = () => {
  const {
    formStage,
    setFormStage,
    passedStage,
    setPasedStage,
    formData,
    setFormData,
    formStageData,
    setFormStageData,
    isFormShown,
    switchFormShown,
    isItemEditing,
    setIsitemEditing,
    editinItemID,
    setEditinItemID,
  } = usePropertyPage();

  if (isFormShown) {
    return (
      <React.Fragment>
        <StepsBar
          formStage={formStage}
          setFormStage={setFormStage}
          passedStage={passedStage}
        />
        <StepsForm
          formStage={formStage}
          setFormStage={setFormStage}
          switchFormShown={switchFormShown}
          formData={formData}
          setFormData={setFormData}
          formStageData={formStageData}
          setFormStageData={setFormStageData}
          passedStage={passedStage}
          setPasedStage={setPasedStage}
          isItemEditing={isItemEditing}
          editinItemID={editinItemID}
          setIsitemEditing={setIsitemEditing}
        />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Summary />
        <DataList switchFormShown={switchFormShown} setEditinItemID={setEditinItemID} setIsitemEditing={setIsitemEditing}/>
      </React.Fragment>
    );
  }
};

export default PropertyPage;
