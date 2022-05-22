import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementWatchCounter } from "../../store/slices/ppdSlice";

const useDataTable = () => {
  const filterValue = useSelector((state) => state.ppd.filterValue);
  const data = useSelector((state) => state.ppd.list);

  const dispatch = useDispatch();

  const handleEdit = () => {
    console.log("edit");
  };

  const handleWatch = (idx) => {
    dispatch(incrementWatchCounter(idx));
  };

  const dataList = data.filter((entry) => {
    return entry.id.includes(filterValue);
  });

  return {
    dataList,
    handleEdit,
    handleWatch,
  };
};

export default useDataTable;
