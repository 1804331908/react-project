import { useState } from "react";
function Product() {

  const [checked, setChecked] = useState(true)
  const prodData = JSON.parse(localStorage.getItem("data"))
  const [products, setProducts] = useState(prodData);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  function matchedDate(date) {
    var d = new Date(date);

    var month1 = "" + (d.getMonth() + 1);
    var day1 = "" + d.getDate();
    var year1 = d.getFullYear();

    if (month1.length < 2) month1 = "0" + month1;
    if (day1.length < 2) day1 = "0" + day1;

    return [year1, month1, day1].join("-");
  }
  const filterProduct = (e) => {
   
     if (e.target.checked) {
      if (e.target.value === "Expired") {
        const expiredData = prodData.filter((element) => {
          const getDate = matchedDate(element.expiryDate)
          return getDate < today
        });
        setProducts(expiredData)
      }
      if (e.target.value === "Low Stock") {
        const lowStockData = prodData.filter((element) => {
          return element.stock < 100
        });
        setProducts(lowStockData)
      }

      else if (e.target.value === "Low Stock" && e.target.value === "Expired") {
        const bothData = prodData.filter((element) => {
          const getDate = matchedDate(element.expiryDate)
          return (
            element.stock < 100 || getDate < today 
          )
        })
        setProducts(bothData)
      }
    }
    else {
      if (e.target.value === "Low Stock") {
        const expiredData = prodData.filter((element) => {
          const getDate = matchedDate(element.expiryDate)
          return getDate < today
        })
        setProducts(expiredData)
      }
      else if (e.target.value === "Expired") {
        const lowStockData = prodData.filter((element) => {
          return element.stock < 100
        })
        setProducts(lowStockData)
      }
      else if(e.target.value === "Low Stock" && e.target.value === "Expired") {
        setProducts(prodData)
      }
    }
  }

  return (
    <div className="container table2-name">
      <div className="header">
        <h1>Products</h1>
      </div>

      <div className="table-box">
        <div className="left-div">
          <div className="checkbox-div">
            <h3>Filter</h3>
            <label>
              <input
                className="option1"
                id="expireDate"
                value="Expired"
                name="name-expire"
                dafaultChecked={checked}
                type="checkbox"
                onChange={(e) => filterProduct(e)}
              />
              Expired
            </label>
            <label>
              <input
                className="option1"
                id="lowStock"
                value="Low Stock"
                name="name-lowStock"
                dafaultChecked={checked}
                type="checkbox"
                onChange={(e) => filterProduct(e)}
              />
              Low Stock
            </label>
          </div>
        </div>
        <div id="table-wrapper2">
          <div id="table2-data">
            <table>
              <thead>
                <tr>
                  <th className="column1">ID</th>
                  <th className="column1">Product Name</th>
                  <th className="column1">Product Brand</th>
                  <th className="column1">Expiry Date</th>
                  <th className="column1">Unit Price</th>
                  <th className="column1">Stock</th>
                </tr>
              </thead>
              <tbody id="table2-body">
                {products.map((product, key) => (
                  <tr className="data-row" key={key}>
                    <td >{product.id}</td>
                    <td >{product.medicineName
                    }</td>
                    <td >{product.medicineBrand}</td>
                    <td >{product.expiryDate}</td>
                    <td >{product.unitPrice}</td>
                    <td >{product.stock
                    }</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
