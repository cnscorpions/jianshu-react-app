import React, { Component } from "react";
import {
  LoginWrapper,
  LoginMain,
  LoginTitle,
  LoginContainer,
  LoginForm,
  MoreLogin,
  NameInput,
  PasswordInput,
  RememberBtn,
  ForgetPassword,
  RememberBtnInput,
  SubmitBtn
} from "./loginStyle";

class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <LoginMain>
          <LoginTitle>
            <a className="title" href="/login">
              登录
            </a>
          </LoginTitle>
          <LoginContainer>
            <LoginForm>
              <NameInput />
              <PasswordInput />
              <div>
                <RememberBtn>
                  <RememberBtnInput />
                  <span>记住我</span>
                </RememberBtn>
                <ForgetPassword>
                  <a data-toggle="dropdown" href="">
                    登录遇到问题?
                  </a>
                </ForgetPassword>
              </div>
              <SubmitBtn>
                <span id="sign-in-loading">登录</span>
              </SubmitBtn>
            </LoginForm>
            <MoreLogin></MoreLogin>
          </LoginContainer>
        </LoginMain>
      </LoginWrapper>
    );
  }
}

export default Login;
