import React from 'react';
import {FormFieldErrorMessage, Title} from "../../../assets/styles/common";
import {ErrorMessage, Form, Formik} from "formik";
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import {CustomButton} from "../../../components/CustomButtonLink/CustomButtonLink";
import styled, {css} from "styled-components";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {removeAll} from "../cartSlice";

const CartFormWrapper = styled(Title)`
  max-width: 1400px;
  margin: 5rem auto 0;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.5s ease-in-out;
`

const CartFormFieldsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 2.5rem;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

const CartFormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.8rem;

`

const CartFormFieldWide = styled(CartFormField)`
  grid-column: span 2;
`

const CartFormInputStyles = css`
  color: ${props => props.theme.colors.title};
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-style: italic;
  font-weight: 400;
  border-radius: 0.88889rem;
  border: 1px solid ${props => (props.$isError ? props.theme.colors.error : '#7EB693')};
  background: #FFF;
  padding: 1.5rem 1.2rem;
  width: 100%;

  &::placeholder {
    color: #ABABAB;
  }
`

const CartFormInput = styled.input`
  ${CartFormInputStyles}
`

const CartFormText = styled.textarea`
  resize: none;
  ${CartFormInputStyles}
`

function CartForm({visible}) {
  const products = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .matches(/^[^\d_!@#$%^&*()+=[\]{}|\\:;"'<>,.?/`~]*$/, 'Invalid characters in full name')
      .required('Required'),
    email: Yup.string()
      .email('Enter a valid email')
      .required('Required'),
    address: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .typeError('Must be a string')
      .required('Required'),
    phone: Yup.string()
      .matches(/^\+?[0-9]{8,15}$/, 'Invalid phone number')
      .required('Required'),
  })
  return (
    <CartFormWrapper $visible={visible}>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          address: '',
          phone: '',
          message: '',
        }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (products.length < 1) {
            alert("Choose the products you want to order");
            return
          }

          const postData = {...values,
            products: [...products]
          }
          axios.post('http://localhost:5000/orders', postData)
            .then(response => {
              dispatch(removeAll());
              window.scrollTo(0, 0);
              navigate('/completed-order');
            }).catch(error => {
              alert(`Error: ${error}`);
            }
          );
        }}
      >
        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
          <Form>
            <CartFormFieldsContainer>
              <CartFormField>
                <label htmlFor="fullName">Full Name*</label>
                <CartFormInput
                  placeholder="Your Full Name"
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                  $isError={touched.fullName && errors.fullName}
                />
                <ErrorMessage name="fullName" component={FormFieldErrorMessage}/>
              </CartFormField>
              <CartFormField>
                <label htmlFor="fullName">Your Email*</label>
                <CartFormInput
                  placeholder="example@yourmail.com"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  $isError={touched.email && errors.email}
                />
                <ErrorMessage name="email" component={FormFieldErrorMessage}/>
              </CartFormField>
              <CartFormField>
                <label htmlFor="fullName">Address*</label>
                <CartFormInput
                  placeholder="your company  address"
                  type="text"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  $isError={touched.address && errors.address}
                />
                <ErrorMessage name="address" component={FormFieldErrorMessage}/>
              </CartFormField>
              <CartFormField>
                <label htmlFor="fullName">Phone number*</label>
                <CartFormInput
                  placeholder="Enter your phone"
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  $isError={touched.phone && errors.phone}
                />
                <ErrorMessage name="phone" component={FormFieldErrorMessage}/>
              </CartFormField>
              <CartFormFieldWide>
                <label htmlFor="fullName">Message</label>
                <CartFormText
                  rows='8'
                  placeholder="some extra information"
                  type="text"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
              </CartFormFieldWide>
            </CartFormFieldsContainer>
            <CustomButton
              type='submit'
              onClick={handleSubmit}
              disabled={!isValid && !dirty}
              $color="#FFFFFF"
              $backgroundColor={props => props.theme.colors.title}
              $paddingX="4.2rem"
              $marginTop="5rem"
            >Confirm</CustomButton>
          </Form>
        )}
      </Formik>
    </CartFormWrapper>
  );
}

export default CartForm;