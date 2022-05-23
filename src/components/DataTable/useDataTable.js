import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementWatchCounter } from "../../store/slices/ppdSlice";

const useDataTable = (
  switchFormShown,
  setEditinItemID,
  setIsitemEditing
) => {
  const filterValue = useSelector((state) => state.ppd.filterValue);
  const data = useSelector((state) => state.ppd.list);

  const dispatch = useDispatch();

  const handleEdit = (id) => {
    switchFormShown();
    setIsitemEditing(true);
    setEditinItemID(id);
  };

  const handleWatch = (id) => {
    dispatch(incrementWatchCounter(id));
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
