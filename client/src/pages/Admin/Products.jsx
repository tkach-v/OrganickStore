import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Title} from "../../assets/styles/common";
import {StyledAdmin, AdminTable, AdminTableTh, AdminTableTd} from "./styles";

function Orders(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error getting products:', error);
      });
  }, []);
  return (<main>
    <StyledAdmin>
      <Title>List of products</Title>
      <AdminTable>
        <thead>
        <tr>
          <AdminTableTh>Id</AdminTableTh>
          <AdminTableTh>Name</AdminTableTh>
          <AdminTableTh>Category</AdminTableTh>
          <AdminTableTh>Price</AdminTableTh>
          <AdminTableTh>Discount</AdminTableTh>
          <AdminTableTh>Rating</AdminTableTh>
          <AdminTableTh>Image URL</AdminTableTh>
        </tr>
        </thead>
        <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <AdminTableTd>{product.id}</AdminTableTd>
            <AdminTableTd>{product.name}</AdminTableTd>
            <AdminTableTd>{product.category}</AdminTableTd>
            <AdminTableTd>${product.price}</AdminTableTd>
            <AdminTableTd>{product.discount}%</AdminTableTd>
            <AdminTableTd>{product.rate}</AdminTableTd>
            <AdminTableTd>{product.img_url}</AdminTableTd>
          </tr>
        ))}
        </tbody>
      </AdminTable>
    </StyledAdmin>
  </main>);
}

export default Orders;