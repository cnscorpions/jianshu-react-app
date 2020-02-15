import React, { Component } from "react";

import { HomeWrapper, LeftContainer, RightContainer, Carousel, CarouselItem, CarouselControl } from "./homeStyle";
import banner01 from "../../assets/img/banner01.png";
import banner02 from "../../assets/img/banner02.png";
import arrowPrevious from "../../assets/img/arrow-previous.png";
import arrowNext from "../../assets/img/arrow-next.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      showCarouselControl: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleToPrevious = this.handleToPrevious.bind(this);
    this.handleToNext = this.handleToNext.bind(this);
  }

  handleMouseEnter() {
    this.setState(state => ({
      showCarouselControl: true
    }));
  }

  handleMouseLeave() {
    this.setState(state => ({
      showCarouselControl: false
    }));
  }

  handleToPrevious() {
    this.setState(state => ({
      index: state.index === 1 ? 2 : 1
    }));
  }

  handleToNext() {
    this.setState(state => ({
      index: state.index === 2 ? 1 : 2
    }));
  }

  render() {
    return (
      <HomeWrapper>
        <LeftContainer>
          <Carousel onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <CarouselItem className={this.state.index === 1 ? "active" : null}>
              <a className="link" href="/">
                <img className="img" alt="banner01" src={banner01} />
              </a>
            </CarouselItem>
            <CarouselItem className={this.state.index === 2 ? "active" : null}>
              <a className="link" href="/">
                <img className="img" alt="banner02" src={banner02} />
              </a>
            </CarouselItem>
            <CarouselControl className={this.state.showCarouselControl ? "show" : null} onClick={this.handleToPrevious}>
              <img className="control-icon" alt="" src={arrowPrevious} />
            </CarouselControl>
            <CarouselControl
              className={this.state.showCarouselControl ? "right show" : "right"}
              onClick={this.handleToNext}
            >
              <img className="control-icon" alt="" src={arrowNext} />
            </CarouselControl>
          </Carousel>
        </LeftContainer>
        <RightContainer>右边部分</RightContainer>
      </HomeWrapper>
    );
  }
}

export default Home;
