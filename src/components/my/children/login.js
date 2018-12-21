<<<<<<< HEAD
import React, { Component, Fragment } from "react";
import { HashRouter as Router,Route,Link,NavLink,Switch,Redirect } from "react-router-dom";
import "../css/login.css";
import JuanpiID from "./juanpiID";
import Phone from "./phone";
export default class Login extends Component {
    render() {
        return (
            <Fragment>
                <header id="headerNav">
                    <Link to="javascript:window.history.go(-1)">
                        <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e-1&sv=449ce9ee" />
                    </Link>
                    <p>登录</p>
                    <Link to="/my/register">注册</Link>
                </header>
                <div id="login">
                    <div>
                        <NavLink to="/my/login/juanpiID">卷皮账号登录</NavLink>
                        <NavLink to="/my/login/phone">手机快捷登录</NavLink>
                    </div>
                    <Router>
                        <Switch>
                            <Route path="/my/login/juanpiID" component={JuanpiID} />
                            <Route path="/my/login/phone" component={Phone} />
                            <Redirect path="/my/login" to="/my/login/juanpiId" />
                        </Switch>
                    </Router>
                </div>
            </Fragment>
=======
import React,{Component} from "react";
export default class Login extends Component {
    render(){
        return (
            <div>Login</div>
>>>>>>> lgq
        )
    }
}