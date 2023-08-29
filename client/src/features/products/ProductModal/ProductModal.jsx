import React, {useState} from 'react';
import {
  Container,
  CorrectedImage, FormFieldErrorMessage,
  QuantityInput,
  Text,
  QuantityFormField,
  QuantityFormRowInner,
  QuantityFormRowOuter
} from "../../../assets/styles/common";
import {Prices} from "../../../components/Prices/Prices";
import {CustomArrowButton, CustomButton} from "../../../components/CustomButtonLink/CustomButtonLink";
import useBodyOverflow from "../../../hooks/useBodyOverflow";
import stars from "../../../assets/img/common/stars.svg"
import * as Yup from "yup";
import {ErrorMessage, Form, Formik} from "formik";
import {
  StyledModal,
  ModalInner,
  ModalCloseButtonContainer,
  ModalShortInfo,
  ModalImageContainer,
  ModalProductCategory,
  ModalShortInfoContent,
  ModalProductTitle,
  ModalMoreInfo,
  ModalMoreInfoButtons,
  ModalMoreInfoText,
} from "./styles";
import {useSelector, useDispatch} from "react-redux";
import {addItem} from "../../cart/cartSlice";

function QuantityForm({product_id}) {
  const cartItem = useSelector(state => state.cart.items.find(item => item.product_id === product_id));
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
        quantity: cartItem ? cartItem.quantity : 1,
      }}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(addItem({
          'product_id': product_id,
          'quantity': Number(values.quantity)
        }));
      }}
    >
      {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
        <Form>
          <QuantityFormField>
            <QuantityFormRowOuter>
              <QuantityFormRowInner>
                <label htmlFor="quantity">Quantity:</label>
                <QuantityInput
                  type="text"
                  name="quantity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.quantity}
                  $isError={touched.quantity && errors.quantity}
                />
              </QuantityFormRowInner>
              <CustomArrowButton
                type='submit'
                onClick={handleSubmit}
                disabled={!isValid && !dirty}
                $color="#FFFFFF"
                $backgroundColor={props => props.theme.colors.title}
              >Add To Cart</CustomArrowButton>
            </QuantityFormRowOuter>
            <ErrorMessage
              name="quantity"
              component={FormFieldErrorMessage}
              style={{marginTop: "0.5rem", maxWidth: "450px"}}/>
          </QuantityFormField>
        </Form>
      )}
    </Formik>
  );
}

function ProductModal({product, active, setActive}) {
  const [descriptionActive, setDescriptionActive] = useState(true);

  // block scrolling when modal opened
  useBodyOverflow(active)

  return (
    <StyledModal onClick={() => setActive(false)} $active={active}>
      <ModalInner onClick={e => e.stopPropagation()}>
        <Container>
          <ModalCloseButtonContainer>
            <CustomButton type="button"
                          $color="#FFFFFF"
                          $backgroundColor={props => props.theme.colors.title}
                          $paddingY="1rem"
                          $paddingX="2rem"
                          onClick={() => setActive(false)}
            >X</CustomButton>
          </ModalCloseButtonContainer>
          <ModalShortInfo>
            <ModalImageContainer>
              <ModalProductCategory>Millets</ModalProductCategory>
              <CorrectedImage src={product.img_url} alt={product.name}/>
            </ModalImageContainer>
            <ModalShortInfoContent>
              <ModalProductTitle>{product.name}</ModalProductTitle>
              <img style={{maxWidth: "4.6rem", paddingBottom: "0.5rem"}} src={stars} alt="5 stars"/>
              <Prices
                price={product.price}
                discount={product.discount}
                $priceCurrentFontSize="1.38889rem;"
                $priceBeforeFontSize="1.11111rem"
              />
              <Text
                $marginTop="1.5rem"
                $marginBottom="1.8rem"
              >{product.short_description}</Text>
              <QuantityForm product_id={product.id} />
            </ModalShortInfoContent>
          </ModalShortInfo>
          <ModalMoreInfo>
            <ModalMoreInfoButtons>
              <CustomButton
                type="button"
                $paddingX="3rem"
                $backgroundColor={descriptionActive ? '#EFF6F1' : props => props.theme.colors.title}
                $color={descriptionActive ? props => props.theme.colors.title : '#FFFFFF'}
                $border={descriptionActive ? '1px solid #000' : 'none'}
                onClick={() => setDescriptionActive(true)}
              >Product Description</CustomButton>
              <CustomButton
                type="button"
                $paddingX="3rem"
                $backgroundColor={descriptionActive ? props => props.theme.colors.title : '#EFF6F1'}
                $color={descriptionActive ? '#FFFFFF' : props => props.theme.colors.title}
                $border={descriptionActive ? 'none' : '1px solid #000'}
                onClick={() => setDescriptionActive(false)}
              >Additional Info</CustomButton>
            </ModalMoreInfoButtons>
            <ModalMoreInfoText>
              {descriptionActive ? product.long_description : product.additional_info}
            </ModalMoreInfoText>
          </ModalMoreInfo>
        </Container>
      </ModalInner>
    </StyledModal>
  );
}

export default ProductModal;