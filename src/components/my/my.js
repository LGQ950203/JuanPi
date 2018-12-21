<<<<<<< HEAD
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./css/my.css";

export default class My extends Component {
    render() {
=======
import React,{Component,Fragment} from "react";
import {HashRouter as Router,Route,Link,Switch} from "react-router-dom";
import "./css/my.css";

export default class My extends Component{
    render(){
>>>>>>> lgq
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
<<<<<<< HEAD
                    <Link to="#" className="myOrder"><span>我的订单</span><span>全部订单</span></Link>
                    <div className="userItem">
                        <Link to="#">
                            <i className="iconfont">&#xe60c;</i>
                            <span>待付款</span>
                        </Link>
                        <Link to="#">
                            <i className="iconfont">&#xe604;</i>
                            <span>待成团</span>
                        </Link>
                        <Link to="#">
                            <i className="iconfont">&#xe638;</i>
                            <span>待收货</span>
                        </Link>
                        <Link to="#">
                            <i className="iconfont">&#xe631;</i>
                            <span>退款/售后</span>
                        </Link>
                    </div>
                    <div className="userList">
                        <Link to="#">我的优惠券</Link>
                        <Link to="#">我的收藏</Link>
                        <Link to="#">我的拼团</Link>
                        <Link to="#"><span>我的免单券</span><span>0张</span></Link>
                        <Link to="#"><span>借钱</span><span>新用户免费领1000元</span></Link>
                    </div>
                    <div className="userList">
                        <Link to="#">客服中心</Link>
                        <Link to="#">关于卷皮</Link>
                    </div>
                    <footer id="footerNav">
                        <Link to="/home">返回首页</Link>
                        <Link to="#">客户端</Link>
                        <Link to="#">电脑版</Link>
                    </footer>
=======
                    <Link to="#" className="myOrder">我的订单</Link>
>>>>>>> lgq
                </section>
            </Fragment>
        )
    }
}