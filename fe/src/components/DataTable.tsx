import React from "react";
import { ITableData } from "../Interface";

const Table: React.FC<ITableData> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>PROPERTY TYPE</th>
          <th>ADDRESS</th>
          <th>CITY</th>
          <th>STATE OR PROVINCE</th>
          <th>ZIP OR POSTAL CODE</th>
          <th>PRICE</th>
          <th>BEDS</th>
          <th>BATHS</th>
          <th>SQUARE FEET</th>
          <th>YEAR BUILD</th>
          <th>MLS#</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.propertyType}</td>
            <td>{row.address}</td>
            <td>{row.city}</td>
            <td>{row.state}</td>
            <td>{row.zip}</td>
            <td>{row.price}</td>
            <td>{row.beds}</td>
            <td>{row.baths}</td>
            <td>{row.sqft}</td>
            <td>{row.yearBuild}</td>
            <td>{row.mlsid}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
