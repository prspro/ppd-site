import { useDispatch } from "react-redux";
import { add } from "../../store/slices/ppdSlice";

const useDataTable = () => {
  const dispatch = useDispatch();

  const addPPDitem = () => {
    dispatch(
      add({
        id: "PPD1125",
        image: "",
        propertyType: "Plot",
        contact: "97852 52525",
        area: "1200",
        views: 2,
        status: "sold",
        date: "",
        isAdded: true,
      })
    );
  };

  return {
    addPPDitem,
  };
};

export default useDataTable;
