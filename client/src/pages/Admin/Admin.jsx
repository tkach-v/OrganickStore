import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Title} from "../../assets/styles/common";
import styled, {css} from "styled-components";

const StyledAdmin = styled(Container)`
  text-align: center;
  padding-top: 2rem;
  max-width: 1600px;
`

const OrdersTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 2rem;
  font-family: Roboto, sans-serif;
`

const OrdersTableCell = css`
  border: 2px solid ${props => props.theme.colors.title};
  padding: 0.8rem 5px;
`

const OrdersTableTh = styled.th`
  color: ${props => props.theme.colors.title};
  font-weight: 800;
  font-size: 1.2rem;
  ${OrdersTableCell}
`

const OrdersTableTd = styled.td`
  ${OrdersTableCell}
`

function Admin(props) {
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
      <OrdersTable>
        <thead>
        <tr>
          <OrdersTableTh rowSpan={2}>Id</OrdersTableTh>
          <OrdersTableTh colSpan={2}>Ordered products</OrdersTableTh>
          <OrdersTableTh rowSpan={2}>Full Name</OrdersTableTh>
          <OrdersTableTh rowSpan={2}>Email</OrdersTableTh>
          <OrdersTableTh rowSpan={2}>Address</OrdersTableTh>
          <OrdersTableTh rowSpan={2}>Phone</OrdersTableTh>
          <OrdersTableTh rowSpan={2}>Message</OrdersTableTh>
        </tr>
        <tr>
          <OrdersTableTh>Product Id</OrdersTableTh>
          <OrdersTableTh>Quantity</OrdersTableTh>
        </tr>
        </thead>
        <tbody>
        {orders.map(order => (
          <React.Fragment key={order.id}>
            <tr>
              <OrdersTableTd rowSpan={order.ordered_items.length + 1}>{order.id}</OrdersTableTd>
              <td colSpan={2}></td>
              <OrdersTableTd rowSpan={order.ordered_items.length + 1}>{order.full_name}</OrdersTableTd>
              <OrdersTableTd rowSpan={order.ordered_items.length + 1}>{order.email}</OrdersTableTd>
              <OrdersTableTd rowSpan={order.ordered_items.length + 1}>{order.address}</OrdersTableTd>
              <OrdersTableTd rowSpan={order.ordered_items.length + 1}>{order.phone}</OrdersTableTd>
              <OrdersTableTd rowSpan={order.ordered_items.length + 1}>{order.message}</OrdersTableTd>
            </tr>
            {order.ordered_items.map(item => (
              <tr key={item.product_id}>
                <OrdersTableTd style={{borderTop: "none"}}>{item.product_id}</OrdersTableTd>
                <OrdersTableTd style={{borderTop: "none"}}>{item.quantity}</OrdersTableTd>
              </tr>
            ))}
          </React.Fragment>
        ))}
        </tbody>
      </OrdersTable>
    </StyledAdmin>
  </main>);
}

export default Admin;