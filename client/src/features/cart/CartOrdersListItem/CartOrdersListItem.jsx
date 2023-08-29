import React, {useState, useEffect} from "react";
import {
  CartOrdersListItemImageContainer,
  CartOrdersListItemInfoContainer,
  CartOrdersListItemTitleAndPrice, CartQuantityFormRowOuter, CartQuantityInput,
  StyledCartOrdersListItem
} from "./styles";
import {CorrectedImage, FormFieldErrorMessage, QuantityFormField, QuantityFormRowInner} from "../../../assets/styles/common";
import {CustomButton} from "../../../components/CustomButtonLink/CustomButtonLink";
import {Prices} from "../../../components/Prices/Prices";
import axios from "axios";
import * as Yup from "yup";
import {ErrorMessage, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {removeItem, updateItem} from "../cartSlice";

function QuantityForm({quantity, product_id}) {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    quantity: Yup.number()
      .required('Required')
      .integer('Must be an integer')
      .min(1, 'Quantity must be greater than 0')
      .typeError('Must be a valid number')
  })
  return (
    <Formik
      initialValues={{
        quantity: quantity,
      }}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
        <Form>
          <QuantityFormField>
            <CartQuantityFormRowOuter>
              <QuantityFormRowInner>
                <label htmlFor="quantity">Quantity:</label>
                <CartQuantityInput
                  type="text"
                  name="quantity"
                  onChange={handleChange}
                  onBlur={e => {
                    handleBlur(e)
                    if (!touched.quantity || !errors.quantity) {
                      dispatch(updateItem({
                        'product_id': product_id,
                        'quantity': Number(values.quantity)
                      }));
                    }
                  }}
                  value={values.quantity}
                  $isError={touched.quantity && errors.quantity}
                />
              </QuantityFormRowInner>
              <CustomButton
                type="button"
                $color="#FFFFFF"
                $backgroundColor={props => props.theme.colors.title}
                $paddingY="1rem"
                $paddingX="2rem"
                onClick={() => dispatch(removeItem(product_id))}
              >X</CustomButton>
            </CartQuantityFormRowOuter>
            <ErrorMessage
              name="quantity"
              component={FormFieldErrorMessage}
              style={{marginTop: "0.5rem"}}/>
          </QuantityFormField>
        </Form>
      )}
    </Formik>
  );
}

function CartOrdersListItem({item}) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [ordersListItem, setOrdersListItem] = useState({});

  // get orders list item
  useEffect(() => {
    axios.get(`http://localhost:5000/products/${item.product_id}`)
      .then(response => {
        setOrdersListItem(response.data);
      })
      .catch(error => {
        console.error('Error while getting product:', error);
      });
  }, [item.product_id]);

  const isSmallScreen = window.matchMedia('(max-width: 550px)').matches;

  const priceBeforeFontSize = isSmallScreen ? '1rem' : '1.33333rem';
  const priceCurrentFontSize = isSmallScreen ? '1.4rem' : '2.22222rem';

  return (
    <StyledCartOrdersListItem>
      <CartOrdersListItemInfoContainer>
        <CartOrdersListItemImageContainer>
          <CorrectedImage src={ordersListItem.img_url} alt={ordersListItem.name}/>
        </CartOrdersListItemImageContainer>
        <CartOrdersListItemTitleAndPrice>
          <div>{ordersListItem.name}</div>
          <Prices
            price={ordersListItem.price}
            discount={ordersListItem.discount}
            $priceBeforeFontSize={priceBeforeFontSize}
            $priceCurrentFontSize={priceCurrentFontSize}
          />
        </CartOrdersListItemTitleAndPrice>
      </CartOrdersListItemInfoContainer>
      <QuantityForm quantity={quantity} setQuantity={setQuantity} product_id={item.product_id}/>
    </StyledCartOrdersListItem>
  );
}

export default CartOrdersListItem;