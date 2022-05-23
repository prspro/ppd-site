const useDataTable = (switchFormShown) => {

  const addPPDitem = () => {
    switchFormShown();
  };

  return {
    addPPDitem,
  };
};

export default useDataTable;
