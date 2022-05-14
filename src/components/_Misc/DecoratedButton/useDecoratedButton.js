const useDecoratedButton = () => {

  const onClickHandler = (func) => {
    if (typeof func === "function") {
      func();
    }
  };

  return {
    onClickHandler
  };
};

export default useDecoratedButton;
