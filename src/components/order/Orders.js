import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Orders() {
    const orderData = JSON.parse(localStorage.getItem("orderData"));
    const [orders, setOrders] = useState(orderData);
   const [checked, setChecked] = useState(true);
   const [checkedItem, setCheckedItem] = useState(['New', 'Packed', 'InTransit', 'Delivered']);


   const filterOrder = (e) => {
    if(e.target.checked){
        const filterOrdersData = [...checkedItem, e.target.value]
        setCheckedItem(filterOrdersData)

        const newdata = orderData.filter((element) => {
            return filterOrdersData.includes(element.orderStatus);
        });
        setOrders(newdata)
    }
    else{
        const filterOrdersData = checkedItem.filter(element => element != e.target.value);
        setCheckedItem(filterOrdersData)
        const newdata = orderData.filter((element) => {
            return filterOrdersData.includes(element.orderStatus);
        });
        setOrders(newdata)
    }
   }

   
    
    return (
        <div className="container table1-name">
            <div className="header">
                <h1>Orders</h1>
            </div>
            <div className="table-box">
                <div className="left-div">
                    <div className="checkbox-div">
                        <h3 className="filter">Filter</h3>
                        <label>
                            <input
                                className="option"
                                name="name-new"
                                onChange={(e) => filterOrder(e)}
                                defaultChecked= {checked}
                                type="checkbox"
                                value="New"
                            />
                            New
                        </label>
                        <label>
                            <input
                                className="option"
                                name="name-packed"
                                onChange={(e) => filterOrder(e)}
                                defaultChecked= {checked}
                                type="checkbox"
                                value="Packed"
                            />
                            Packed
                        </label>
                        <label>
                            <input
                                className="option"
                                name="name-InTransit"
                                onChange={(e) => filterOrder(e)}
                                defaultChecked= {checked}
                                type="checkbox"
                                value="InTransit"
                            />
                            InTransit
                        </label>
                        <label>
                            <input
                                className="option"
                                name="name-Delivery"
                                onChange={(e) => filterOrder(e)}
                                defaultChecked= {checked}
                                type="checkbox"
                                value="Delivered"
                            />
                            Delivered
                        </label>
                    </div>
                </div>
                <div id="table-wrapper">
                    <div id="table-data">
                        <table>
                            <thead>
                            <tr>
                                <th className="column">ID</th>
                                <th className="column">Customer</th>
                                <th className="column">Date</th>
                                <th className="column">Amount</th>
                                <th className="column">Status</th>
                            </tr>
                            </thead>
                            <tbody id="table-body">
                                {orders.map((order, key) => (
                                    <tr className="data-row" key={key} >
                                        <td  >{order.id}</td>
                                        <td >{order.customerName}</td>
                                        <td >{order.orderDate + " " + order.orderTime}</td>
                                        <td >{order.amount}</td>
                                        <td >{order.orderStatus}</td>
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

export default Orders;
