import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  width: 960px;
  margin: 0 auto;
`;

export const LeftContainer = styled.div`
  width: 66.7%;
`;

export const Carousel = styled.div`
  position: relative;
`;

export const CarouselItem = styled.div`
  display: none;
  &.active {
    display: block;
  }
  .link {
    cursor: pointer;
    color: #333;
  }
  .img {
    overflow: hidden;
    width: 100%;
    height: 270px;
    background-color: hsla(0, 0%, 71%, 0.2);
  }
`;

export const CarouselControl = styled.span`
  position: absolute;
  top: 50%;
  margin-top: -20px;
  display: none;
  height: 50px;
  width: 40px;
  cursor: pointer;
  .control-icon {
    position: absolute;
    top: 50%;
    width: 24px;
    margin-top: -14px;
  }
  &.right {
    right: 0;
  }
  &.show {
    display: inline-block;
  }
`;

export const ArticleList = styled.ul``;

export const RightContainer = styled.div`
  width: 33.3%;
  padding-left: 40px;
`;
