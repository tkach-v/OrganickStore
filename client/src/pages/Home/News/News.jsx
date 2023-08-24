import React from 'react';
import {Subtitle, Text, Title} from "../../../assets/styles/common";
import {CustomArrowLink} from "../../../components/CustomButtonLink/CustomButtonLink";
import {
  StyledNewsItem,
  NewsItemImage,
  NewsItemDate,
  NewsItemInfo,
  NewsItemInfoAuthor,
  StyledNews,
  NewsHeader,
  NewsHeaderTitleBlock,
  NewsHeaderButton,
  NewsContent,
} from "./styles";
import new1Image from "../../../assets/img/home/news/new-1-image.jpg"
import new2Image from "../../../assets/img/home/news/new-2-image.jpg"

function NewsItem(props) {
  return (
    <StyledNewsItem>
      <NewsItemImage src={props.imageUrl} alt=""/>
      <NewsItemDate>
        <div style={{fontSize: "1.38889rem"}}>{props.day}</div>
        <div>{props.month}</div>
      </NewsItemDate>
      <NewsItemInfo>
        <NewsItemInfoAuthor>
          <img src="../../../assets/img/home/news/author-icon.svg" alt=""/>
          <div>By {props.author}</div>
        </NewsItemInfoAuthor>
        <div style={{padding: "0.83rem 0"}}>
          <Title $fontSize="1.38889rem">{props.title}</Title>
          <Text>{props.description}</Text>
        </div>
        <CustomArrowLink>Read More</CustomArrowLink>
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
        <NewsHeaderButton>More News</NewsHeaderButton>
      </NewsHeader>
      <NewsContent>
        <NewsItem
          imageUrl={new1Image}
          day="25"
          month="Nov"
          author="Rachi Card"
          title="The Benefits of Vitamin D & How to Get It"
          description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        />
        <NewsItem
          imageUrl={new2Image}
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