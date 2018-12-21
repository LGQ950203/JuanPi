import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import "../css/login.css";
import JuanpiID from "./juanpiID";
import Phone from "./phone";
export default class Login extends Component {
    render() {
        return (
            <Fragment>
                <header id="headerNav">
                    <a href="javascript:window.history.go(-1)">
                        <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e-1&sv=449ce9ee" />
                    </a>
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
                    <a href="javascript:;" className="loginButton">登 录</a>
                    <div>
                        <label>
                            <input type="checkbox" checked/>
                            <i className="before">
                                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&sv=449ce9ee"/>
                            </i>两周内免登录
                        </label>
                        <Link to="#">忘记密码？</Link>
                    </div>
                    <div className="loginApp">
                        <h3>第三方账号快速登录</h3>
                        <div>
                            <Link to="#">
                                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/tencent.png?29cf7667-1&sv=449ce9ee"/>
                            </Link>
                            <Link to="#">
                                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/taobao.png?b6b2268f-1&sv=449ce9ee"/>
                            </Link>
                            <Link to="#">
                                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/sina.png?e6100489-1&sv=449ce9ee"/>
                            </Link>
                        </div>
                        <ul>
                            <li>
                                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/unexpress.png?6a15f6a5-1&sv=449ce9ee" />
                                全程包邮
                            </li>
                            <li>
                                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/search.png?597c2e82-1&sv=449ce9ee" />
                                100%人工质检
                            </li>
                            <li>
                                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/seven.png?902d32d9-1&sv=449ce9ee" />
                                7天放心退
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}