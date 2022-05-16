import { React, useState } from "react";

const useStepsBar = (formStage, setFormStage, passedStage) => {

  const isButtonActive = (btnIndex) => {
    return btnIndex === formStage;
  };

  const isStagePassed = (btnIndex) => {
    return btnIndex < passedStage;
  };

  const setAllowedFormStage = (btnIndex) => {
    if (passedStage > btnIndex) {
      setFormStage(btnIndex);
    }
  };

  return {
    isButtonActive,
    isStagePassed,
    setAllowedFormStage,
  };
};

export default useStepsBar;
