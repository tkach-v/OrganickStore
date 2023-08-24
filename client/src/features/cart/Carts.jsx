import React, {useState} from 'react';
import {CorrectedImage} from "../../assets/styles/common";
import {
  CartTitle,
  CartContent,
  CartContentInner,
  CartOrdersList,
  StyledCartOrdersListItem,
  CartOrdersListItemInfoContainer,
  CartOrdersListItemImageContainer,
  CartSummaries,
  CartOrdersListItemTitleAndPrice,
  CartOrdersListItemBeforeDiscount,
  CartOrdersListItemQuantityContainer,
  CartOrdersListItemQuantityInput,
  CartOrdersListItemPriceWrapper,
  CartFormWrapper,
  CartFormField,
  CartFormInput,
  CartFormError, CartFormFieldsContainer, CartFormFieldWide, CartFormText,
} from "./styles";
import {ErrorMessage, Form, Formik} from "formik";
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import {CustomArrowButton, CustomButton} from "../../components/CustomButtonLink/CustomButtonLink";

function CartOrdersListItem({name, imageUrl, currentPrice, beforeDiscountPrice, amount}) {
  const [quantity, setQuantity] = useState(amount);
  const handleQuantityChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue === '' || isNaN(inputValue) || parseInt(inputValue) <= 0) {
      setQuantity('');
    } else {
      setQuantity(inputValue);
    }
  };
  return (
    <StyledCartOrdersListItem>
      <CartOrdersListItemInfoContainer>
        <CartOrdersListItemImageContainer>
          <CorrectedImage src={imageUrl} alt={name + 'image'}/>
        </CartOrdersListItemImageContainer>
        <CartOrdersListItemTitleAndPrice>
          <div>{name}</div>
          <CartOrdersListItemPriceWrapper>
            <CartOrdersListItemBeforeDiscount>
              <span>$</span>
              <span
                style={{textDecoration: 'line-through', textDecorationThickness: '4px'}}>{beforeDiscountPrice}</span>
            </CartOrdersListItemBeforeDiscount>
            <div>${currentPrice}</div>
          </CartOrdersListItemPriceWrapper>
        </CartOrdersListItemTitleAndPrice>
      </CartOrdersListItemInfoContainer>
      <CartOrdersListItemQuantityContainer>
        <div>Quantity:</div>
        <CartOrdersListItemQuantityInput
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <CustomButton type="button"
                      $color="#FFFFFF"
                      $backgroundColor={props => props.theme.colors.title}
                      $paddingY="1rem"
                      $paddingX="2rem"
                      onClick={() => console.log(`Remove ${name} from cart`)}
        >X</CustomButton>
      </CartOrdersListItemQuantityContainer>
    </StyledCartOrdersListItem>
  );
}

function CartForm({visible}) {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .matches(/^[^\d_!@#$%^&*()+=[\]{}|\\:;"'<>,.?/`~]*$/, 'Invalid characters in full name')
      .required('Required'),
    email: Yup.string()
      .email('Enter a valid email')
      .required('Required'),
    address: Yup.string()
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
          console.log(values);
          window.scrollTo(0, 0);
          navigate('/completed-order');
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
                <ErrorMessage name="fullName" component={CartFormError}/>
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
                <ErrorMessage name="email" component={CartFormError}/>
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
                <ErrorMessage name="address" component={CartFormError}/>
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
                <ErrorMessage name="phone" component={CartFormError}/>
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

function Carts() {
  const [visibleForm, setVisibleForm] = useState(false);
  const total = 26;
  const discount = 14;

  return (
    <div>
      <CartTitle>Cart</CartTitle>
      <CartContent>
        <CartContentInner>
          <CartOrdersList>
            <CartOrdersListItem
              name="Health Pistachios"
              imageUrl="./img/shop/mung-bean-1.png"
              currentPrice="50"
              beforeDiscountPrice="100"
              amount={1}
            />
          </CartOrdersList>
          <CartSummaries>
            <div>Total Cost {total}$</div>
            <div>Discount {discount}$</div>
          </CartSummaries>
          {visibleForm ? null : (
            <CustomArrowButton type="Button"
                               $paddingX="3.2rem"
                               $marginTop="4rem"
                               $color="#FFFFFF"
                               $backgroundColor={props => props.theme.colors.title}
                               onClick={(e) => setVisibleForm(true)}
            >To order</CustomArrowButton>
          )}
          <CartForm visible={visibleForm}/>
        </CartContentInner>
      </CartContent>
    </div>
  );
}

export default Carts;