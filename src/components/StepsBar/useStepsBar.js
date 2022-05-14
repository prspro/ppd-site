// import React from 'react';

const useStepsBar = (formStage, setFormStage) => {
  const isFirstActive = formStage === 0 ? true : false;

  const isButtonActive = (btnIndex) => {
    return btnIndex === formStage;
  };

  const setAllowedFormStage = (btnIndex) => {
    if (formStage > btnIndex) {
      setFormStage(btnIndex);
    }
  };

  return {
    isButtonActive,
    setAllowedFormStage,
  };
};

export default useStepsBar;
