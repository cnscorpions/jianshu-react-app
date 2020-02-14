import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Wrapper,
  Logo,
  WriteBtn,
  SignupBtn,
  SignIn,
  NavContainer,
  NavItem,
  SearchWrapper,
  SearchInfo,
  NavSearch
} from "./headerStyle";
import { focusSearchInputAction, blurSearchInputAction, getItemList } from "../../store/actionCreators/actionCreators";
import LogoImg from "../../assets/img/jianshu-logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.getSearchItems = this.getSearchItems.bind(this);
  }

  getSearchItems = props => {
    const { isFocus, list } = props;
    return (
      <SearchInfo className={ isFocus ? "focused" : null}>
        <ul>
          { list.map((item, index) => (
            <li key={index}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </SearchInfo>
    );
  };

  render() {
    return (
      <Fragment>
        <Wrapper>
          <Logo>
            <img src={LogoImg} alt="Nav logo" style={{ height: "100%" }} />
          </Logo>
          <WriteBtn>
            <i className="iconfont" style={{ marginRight: "5px" }}>
              &#xe62e;
            </i>
            写文章
          </WriteBtn>
          <SignupBtn>注册</SignupBtn>
          <SignIn>登录</SignIn>
          <NavContainer>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <SearchWrapper>
              <NavSearch
                className={this.props.isFocus ? "focused" : null}
                onFocus={this.props.handleFocus}
                onBlur={this.props.handleBlur}
              ></NavSearch>
              <i className={this.props.isFocus ? "focused iconfont" : "iconfont"}>&#xe62b;</i>
              {this.getSearchItems(this.props)}
            </SearchWrapper>
            <NavItem className="right">
              <i className="iconfont">&#xe617;</i>
            </NavItem>
          </NavContainer>
        </Wrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFocus: state.header.get("isFocus"),
    list: state.header.get("list")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFocus() {
      const action = focusSearchInputAction();
      dispatch(action);
      dispatch(getItemList());
    },
    handleBlur() {
      const action = blurSearchInputAction();
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
