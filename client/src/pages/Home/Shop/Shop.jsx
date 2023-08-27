import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Container, Subtitle, Title} from "../../../assets/styles/common";
import {CustomArrowButton, CustomArrowLink} from "../../../components/CustomButtonLink/CustomButtonLink";
import ProductsList from "../../../features/products/ProductsList";
import axios from "axios";
import ProductModal from "../../../features/products/ProductModal";

const StyledShop = styled(Container)`
  padding-bottom: 9rem;
  padding-top: 9rem;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    padding-bottom: 3rem;
    padding-top: 3rem;
  }
`

const ShopProducts = styled.div`
  padding-top: 2rem;
  padding-bottom: 6rem;
`

function Shop(props) {
  const [showLess, setShowLess] = useState(true)
  const [products, setProducts] = useState([]);
  const [modalActive, setModalActive] = useState(true);

  // shows the products with the best discount first
  useEffect(() => {
    axios.get(`http://localhost:5000/products?limit=${showLess ? 8 : 16}&ordering=product.discount+desc`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error while getting products:', error);
      });
  }, [showLess]);

  return (
    <StyledShop>
      {modalActive ? (
        <ProductModal
          active={modalActive}
          setActive={setModalActive}
          product={{
            "id": 1,
            "name": "Calabrese Broccoli",
            "img_url": "https://organick-store.s3.eu-central-1.amazonaws.com/products/calabrese-broccoli.png",
            "price": "20.00",
            "discount": 35,
            "rate": "5.00",
            "short_description": "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            "long_description": "A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
            "additional_info": "Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
            "category": "Vegetable"
          }}
        />
      ) : null}

      <Subtitle>Categories</Subtitle>
      <Title>Our Products</Title>
      <ShopProducts>
        <ProductsList products={products}/>
      </ShopProducts>
      <CustomArrowButton
        type="button"
        $color="#FFFFFF"
        $backgroundColor={showLess ? '#1E1E1E' : '#274C5B'}
        $marginLeft="auto"
        $marginRight="auto"
        onClick={() => (showLess ? setShowLess(false) : setShowLess(true))}
      >{showLess ? 'Load More' : 'Show Less'}</CustomArrowButton>
    </StyledShop>
  );
}

export default Shop;