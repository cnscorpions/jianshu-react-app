import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100%;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  background-color: #f1f1f1;
`;

export const LoginMain = styled.div`
  display: inline-block;
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  box-sizing: border-box;
`;

export const LoginTitle = styled.h4`
  margin: 0 auto 50px;
  padding: 10px;
  font-size: 18px;
  font-weight: 400;
  color: #969696;
  .title {
    padding: 10px;
    color: #969696;
    font-weight: 700;
  }
`;

export const LoginContainer = styled.div``;

export const LoginForm = styled.form`
  margin: 0 0 20px;
  > input {
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0, 0%, 71%, 0.1);
    vertical-align: middle;
    box-sizing: border-box;
  }
`;

export const NameInput = styled.input.attrs({
  placeholder: "手机号或邮箱"
})``;

export const PasswordInput = styled.input.attrs({
  placeholder: "密码"
})``;

export const RememberBtn = styled.div`
  float: left;
  margin: 15px 0;
`;

export const RememberBtnInput = styled.input.attrs({
  type: "checkbox",
  value: "true",
  defaultChecked: "checked"
})``;

export const ForgetPassword = styled.div`
  float: right;
  position: relative;
  margin: 15px 0;
  font-size: 14px;
  > a {
    color: #999;
  }
`;

export const SubmitBtn = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
  span#sign-in-loading {
    position: relative;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-top: -4px;
    margin-right: 2px;
  }
`;

export const MoreLogin = styled.div``;
