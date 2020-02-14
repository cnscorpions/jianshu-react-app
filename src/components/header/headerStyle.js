import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  height: 58px;
  border: 1px solid #e7e7e7;
`;

// 给标签设置attrs
export const Logo = styled.a.attrs({ href: "/" })`
  float: left;
  height: 56px;
  padding: 0;
`;
export const WriteBtn = styled.a`
  float: right;
  width: 100px;
  height: 40px;
  line-height: 40px;
  margin: 8px 12px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
  text-align: center;
`;

export const SignupBtn = styled.a`
  float: right;
  width: 80px;
  height: 38px;
  line-height: 38px;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
  text-align: center;
`;

export const SignIn = styled.a`
  float: right;
  margin: 22px 6px 0 10px;
  font-size: 15px;
  color: #969696;
`;

export const NavContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 100%;
`;

export const NavItem = styled.div`
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  display: inline-block;
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    color: #999;
    &.focused {
      background: #999;
      color: #eee;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  display: none;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  margin-top: 9px;
  padding: 5px;
  width: 250px;
  height: 100px;
  left: 24px;
  top: 100%;
  border-radius: 4px;
  &::before {
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    content: "";
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    top: -5px;
    z-index: -1;
  }
  &.focused {
    display: block;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  margin: 9px 0 0 25px;
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;
