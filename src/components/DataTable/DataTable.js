import React from "react";
import useDataTable from "../DataList/useDataList";
import "./datatable.sass";

const DataTable = () => {
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
        <tr>
          <td>PPD1125</td>
          <td>____</td>
          <td>Plot</td>
          <td>97852 52525</td>
          <td>1200</td>
          <td>02</td>
          <td>Sold</td>
          <td>00</td>
          <td>____</td>
        </tr>
        <tr>
          <td>PPD1125</td>
          <td>____</td>
          <td>Plot</td>
          <td>97852 52525</td>
          <td>1200</td>
          <td>02</td>
          <td>Sold</td>
          <td>00</td>
          <td>____</td>
        </tr>
        <tr>
          <td>PPD1125</td>
          <td>____</td>
          <td>Plot</td>
          <td>97852 52525</td>
          <td>1200</td>
          <td>02</td>
          <td>Sold</td>
          <td>00</td>
          <td>____</td>
        </tr>
        <tr>
          <td>PPD1125</td>
          <td>____</td>
          <td>Plot</td>
          <td>97852 52525</td>
          <td>1200</td>
          <td>02</td>
          <td>Sold</td>
          <td>00</td>
          <td>____</td>
        </tr>
        <tr>
          <td>PPD1125</td>
          <td>____</td>
          <td>Plot</td>
          <td>97852 52525</td>
          <td>1200</td>
          <td>02</td>
          <td>Sold</td>
          <td>00</td>
          <td>____</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DataTable;
