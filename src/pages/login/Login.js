import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/actionCreators/actionCreators";
import {
  LoginWrapper,
  LoginMain,
  LoginTitle,
  LoginContainer,
  LoginForm,
  MoreLogin,
  RememberBtn,
  ForgetPassword,
  RememberBtnInput,
  SubmitBtn
} from "./loginStyle";

class Login extends Component {
  constructor(props) {
    super(props);

    this.accountInput = React.createRef();
    this.passwordInput = React.createRef();

    this.handleAccountInput = this.handleAccountInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);

    this.state = {
      account: "",
      password: ""
    };
  }

  handleAccountInput(input) {
    this.setState(state => ({
      account: input.value
    }));
  }

  handlePasswordInput(input) {
    this.setState(state => ({
      password: input.value
    }));
  }

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
              <input
                placeholder="手机号或邮箱"
                value={this.state.account}
                onChange={() => this.handleAccountInput(this.accountInput.current)}
                ref={this.accountInput}
              />
              <input
                placeholder="密码"
                value={this.state.password}
                onChange={() => this.handlePasswordInput(this.passwordInput.current)}
                ref={this.passwordInput}
              />
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
              <SubmitBtn onClick={this.props.login.bind(this)}>
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

const mapStateToProps = state => ({
  isLoggedIn: state.login.get("isLoggedIn")
});

const mapDispatchToProps = dispatch => ({
  login(event) {
    event.preventDefault();
    const [account, password] = [this.accountInput.current.value, this.passwordInput.current.value];
    const obj = {
      account: account,
      password: password
    };
    console.log(account, password);
    dispatch(login(obj));
  }
});

export default connect(null, mapDispatchToProps)(Login);
