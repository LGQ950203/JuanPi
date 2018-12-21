import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Home from "./components/home/home";
import Classify from "./components/classify/classify";
import ShoppingCar from "./components/shoppingcar/shoppingcar";
import My from "./components/my/my";
import Register from "./components/my/children/register";
import Login from "./components/my/children/login";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="app">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/classify" component={Classify} />
              <Route path="/shoppingCar" component={ShoppingCar} />
              <Route path="/my" exact component={My} />
              <Route path="/my/register" component={Register} />
              <Route path="/my/login" component={Login} />
              <Redirect path="/" to="/home" />
            </Switch>
            <div id="footer">
              <ul>
                <li>
                  <NavLink to="/home">
                    <i className="iconfont">&#xe60b;</i>
                    <span>首页</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/classify">
                    <i className="iconfont">&#xe669;</i>
                    <span>分类</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shoppingCar">
                    <i className="iconfont">&#xe60a;</i>
                    <span>购物车</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my">
                    <i className="iconfont">&#xe61d;</i>
                    <span>我的卷皮</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;
