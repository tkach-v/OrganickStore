import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Title} from "../../assets/styles/common";
import {StyledAdmin, AdminTable, AdminTableTh, AdminTableTd} from "./styles";

function Orders(props) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error getting orders:', error);
      });
  }, []);
  return (<main>
    <StyledAdmin>
      <Title>List of orders</Title>
      <AdminTable>
        <thead>
        <tr>
          <AdminTableTh rowSpan={2}>Id</AdminTableTh>
          <AdminTableTh colSpan={2}>Ordered products</AdminTableTh>
          <AdminTableTh rowSpan={2}>Full Name</AdminTableTh>
          <AdminTableTh rowSpan={2}>Email</AdminTableTh>
          <AdminTableTh rowSpan={2}>Address</AdminTableTh>
          <AdminTableTh rowSpan={2}>Phone</AdminTableTh>
          <AdminTableTh rowSpan={2}>Message</AdminTableTh>
        </tr>
        <tr>
          <AdminTableTh>Product Id</AdminTableTh>
          <AdminTableTh>Quantity</AdminTableTh>
        </tr>
        </thead>
        <tbody>
        {orders.map(order => (
          <React.Fragment key={order.id}>
            <tr>
              <AdminTableTd rowSpan={order.ordered_items.length + 1}>{order.id}</AdminTableTd>
              <td colSpan={2}></td>
              <AdminTableTd rowSpan={order.ordered_items.length + 1}>{order.full_name}</AdminTableTd>
              <AdminTableTd rowSpan={order.ordered_items.length + 1}>{order.email}</AdminTableTd>
              <AdminTableTd rowSpan={order.ordered_items.length + 1}>{order.address}</AdminTableTd>
              <AdminTableTd rowSpan={order.ordered_items.length + 1}>{order.phone}</AdminTableTd>
              <AdminTableTd rowSpan={order.ordered_items.length + 1}>{order.message}</AdminTableTd>
            </tr>
            {order.ordered_items.map(item => (
              <tr key={item.product_id}>
                <AdminTableTd style={{borderTop: "none"}}>{item.product_id}</AdminTableTd>
                <AdminTableTd style={{borderTop: "none"}}>{item.quantity}</AdminTableTd>
              </tr>
            ))}
          </React.Fragment>
        ))}
        </tbody>
      </AdminTable>
    </StyledAdmin>
  </main>);
}

export default Orders;