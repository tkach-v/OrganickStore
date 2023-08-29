import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import CartOrdersListItem from "../CartOrdersListItem/CartOrdersListItem";
import {useSelector} from "react-redux";
import axios from "axios";

export const StyledCartOrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
    align-items: start;
  }
`

export const CartSummaries = styled.div`
  font-size: 2.22222rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 1.5rem;
  @media (max-width: 1200px) {
    font-size: 1.7rem;
  }
  @media (max-width: 550px) {
    font-size: 1.4rem;
  }
`

function CartOrdersList({ordersItems}) {
  const orderedItemsList = useSelector(state => state.cart.items);
  const [totalCost, setTotalCost] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  useEffect(() => {
    const fetchProductData = async (productId) => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${productId}`);
        return response.data; // Повертаємо дані про продукт з API
      } catch (error) {
        console.error('Error fetching product data:', error);
        return null;
      }
    };

    // Обчислюємо загальну вартість та знижку
    const calculateTotals = async () => {
      let totalCost = 0;
      let totalDiscount = 0;

      for (const orderedItem of orderedItemsList) {
        const productData = await fetchProductData(orderedItem.product_id);
        if (productData) {
          const itemBeforeCost = productData.price * orderedItem.quantity;
          const itemCurrentCost = (productData.price - (productData.price * productData.discount / 100)) * orderedItem.quantity;
          totalCost += itemCurrentCost;
          totalDiscount += itemBeforeCost * productData.discount / 100;
        }
      }

      setTotalCost(totalCost);
      setTotalDiscount(totalDiscount);
    };

    calculateTotals();
  }, [orderedItemsList]);


  return (
    <div>
      <StyledCartOrdersList>
        {ordersItems.map(item => (
          <CartOrdersListItem
            key={item.product_id}
            item={item}
          />
        ))}
      </StyledCartOrdersList>
      <CartSummaries>
        <div>Total Cost {totalCost.toFixed(2)}$</div>
        <div>Discount {totalDiscount.toFixed(2)}$</div>
      </CartSummaries>
    </div>
  );
}

export default CartOrdersList;