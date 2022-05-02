import React from "react";
import useDataTable from "../DataTable/useDataTable";
import "./datatable.sass";
import SVGicon from "../_Misc/SVGicon/SVGicon";
// import classNames from "classnames";

const DataTable = () => {
  const { dataList } = useDataTable();

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>PPD ID</th>
          <th>Image</th>
          <th>Property</th>
          <th>Contact</th>
          <th>Area</th>
          <th>Views</th>
          <th>Status</th>
          <th>Days Left</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {dataList.map((entry, idx) => {
          return (
            <tr key={idx} >
              <td>{entry.id}</td>
              <td>
                <button>
                  <SVGicon className={"data-table__image"} id={"image"} />
                </button>
              </td>
              <td>{entry.propertyType}</td>
              <td>{entry.contact}</td>
              <td>{entry.area}</td>
              <td>{entry.views}</td>
              <td>
                <div className="data-table__status-wrap">
                {entry.status}
                </div>
                </td>
              <td>{entry.date}</td>
              <td>
                <div className="data-table__action">
                  <button>
                    <SVGicon className={"data-table__watch"} id={"watch"} />
                  </button>
                  <button>
                    <SVGicon className={"data-table__edit"} id={"edit"} />
                  </button>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
