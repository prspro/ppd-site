import useDataList from "./useDataList";
import "./datalist.sass";
import DecoratedButton from "../_Misc/DecoratedButton/DecoratedButton";
import SearchBar from "../_Misc/SearchBar/SearchBar";
import DataTable from "../DataTable/DataTable";

const DataList = ({
  switchFormShown,
  setEditinItemID,
  setIsitemEditing,
}) => {
  const { addPPDitem } = useDataList(switchFormShown);

  return (
    <div className="data-list">
      <div className="data-list__upper-bar">
        <SearchBar className="data-list__search" placeholder="Search PPD ID" />
        <DecoratedButton className="data-list__add-btn" onClick={addPPDitem}>
          <div className="btn__plus"></div>
          <p>Add Property</p>
        </DecoratedButton>
      </div>
      <div className="data-list__inner-wrap">
        <DataTable
          switchFormShown={switchFormShown}
          setEditinItemID={setEditinItemID}
          setIsitemEditing={setIsitemEditing}
        />
      </div>
    </div>
  );
};

export default DataList;
