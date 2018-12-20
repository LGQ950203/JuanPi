import React,{Component,Fragment} from "react";
import {HashRouter as Router,Route,Link,Switch} from "react-router-dom";
import "./css/my.css";

export default class My extends Component{
    render(){
        return (
            <Fragment>
                <header id="userHeader">
                    <div className="headerTop">
                        <a href="javascript:window.history.go(-1)" className="iconfont">&#xe605;</a>
                        <p>个人中心</p>
                    </div>
                    <div className="headerBottom">
                        <Link to="/my/register">注册</Link>
                        <i className="line"></i>
                        <Link to="/my/login">登录</Link>
                    </div>
                </header>
                <section id="userbox">
                    <Link to="#" className="myOrder">我的订单</Link>
                </section>
            </Fragment>
        )
    }
}