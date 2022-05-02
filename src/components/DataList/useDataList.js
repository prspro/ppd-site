import { useDispatch } from "react-redux";
import { addPPD } from "../../store/slices/ppdSlice";

const useDataTable = () => {
  const dispatch = useDispatch();

  const addPPDitem = () => {
    dispatch(
      addPPD({
        id: "PPD1125",
        image: "",
        propertyType: "Plot",
        contact: "97852 52525",
        area: "1200",
        views: 2,
        status: "sold",
        date: "",
      })
    );
  };

  return {
    addPPDitem,
  };
};

export default useDataTable;
