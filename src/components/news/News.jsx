import React from 'react';
import styled from "styled-components";
import {Button, ButtonArrow, Container, CorrectedImage, Subtitle, Text, Title} from "../../styles/common";

const StyledNews = styled(Container)`
  padding-top: 9rem;
  padding-bottom: 9rem;
`

const NewsHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 2.5rem;
`

const NewsHeaderTitleBlock = styled.div`
  max-width: 970px;
`

const NewsHeaderButton = styled(Button)`
  border: 2px solid #274C5B;
  background: #FFFFFF;
  min-width: 213px;
`

const NewsContent = styled.div`
  display: flex;
  gap: 2.5rem;
`

const StyledNewsItem = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 3rem;
`

const NewsItemImage = styled.img`
  border-radius: 1.66667rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const NewsItemDate = styled(Title)`
  width: 82px;
  height: 82px;
  background: #FFFFFF;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  top: 2.5rem;
  left: 2rem;
  font-size: 1.11111rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NewsItemInfo = styled.div`
  width: calc(100% - 4rem);
  border-radius: 1.8rem;
  background: #FFFFFF;
  box-shadow: 0 20px 35px 0 rgba(167, 167, 167, 0.25);
  padding: 2.56rem 3rem 3.3rem 3rem;
  position: absolute;
  top: calc(50% - 3rem);
  left: 2rem;
`

const NewsItemInfoAuthor = styled(Title)`
  display: flex;
  align-items: center;
  gap: 0.44rem;
  font-size: 1rem;
  font-weight: 400;
`

function NewsItem(props) {
  return (
    <StyledNewsItem>
      <NewsItemImage src={props.imageUrl} alt="" />
      <NewsItemDate>
        <div style={{fontSize: "1.38889rem"}}>{props.day}</div>
        <div>{props.month}</div>
      </NewsItemDate>
      <NewsItemInfo>
        <NewsItemInfoAuthor>
          <img src="./img/news/author-icon.svg" alt=""/>
          <div>By {props.author}</div>
        </NewsItemInfoAuthor>
        <div style={{padding: "0.83rem 0"}}>
          <Title $fontSize="1.38889rem">{props.title}</Title>
          <Text>{props.description}</Text>
        </div>
        <Button>
          <div>Read More</div>
          <ButtonArrow>
            <img src="./img/common/arrow.svg" alt=""/>
          </ButtonArrow>
        </Button>
      </NewsItemInfo>
    </StyledNewsItem>
  );
}

function News() {
  return (
    <StyledNews>
      <NewsHeader>
        <NewsHeaderTitleBlock>
          <Subtitle>News</Subtitle>
          <Title>Discover weekly content about organic food, & more</Title>
        </NewsHeaderTitleBlock>
        <NewsHeaderButton>
          <div>More News</div>
          <ButtonArrow>
            <img src="./img/common/arrow.svg" alt=""/>
          </ButtonArrow>
        </NewsHeaderButton>
      </NewsHeader>
      <NewsContent>
        <NewsItem
          imageUrl="./img/news/new-1-image.jpg"
          day="25"
          month="Nov"
          author="Rachi Card"
          title="The Benefits of Vitamin D & How to Get It"
          description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        />
        <NewsItem
          imageUrl="./img/news/new-2-image.jpg"
          day="25"
          month="Nov"
          author="Rachi Card"
          title="The Benefits of Vitamin D & How to Get It"
          description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        />
      </NewsContent>
    </StyledNews>
  );
}

export default News;