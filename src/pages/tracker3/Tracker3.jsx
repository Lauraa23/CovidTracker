import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { ProductService } from "./serviceProductService";

const Tracker3 = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   ProductService.getProductsMini().then((data) => setProducts(data));
  // }, []);

  return (
    <div>
      <DataTable
        rows={10}
        // value={products}
        showGridlines
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="Top Cases" header="Cases"></Column>
        <Column field="Today Cases" header="Today Cases"></Column>
        <Column field="Top Deaths" header="Top Deaths"></Column>
        <Column field="Today Deaths" header="Today Deaths"></Column>
        <Column field="Top Active" header="Top Active"></Column>
        <Column field="Top Recover" header="Top Recover"></Column>
      </DataTable>
    </div>
  );
};

export default Tracker3;
