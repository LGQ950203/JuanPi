import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Home from "./components/home/home";
import Classify from "./components/classify/classify";
import ShoppingCar from "./components/shoppingcar/shoppingcar";
import My from "./components/my/my";

import {icon_action} from "./action/actionCreator";
import { Provider,connect } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    let {iconPic} = this.props;
    console.log(iconPic)
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/classify" component={Classify} />
              <Route path="/shoppingCar" component={ShoppingCar} />
              <Route path="/my" component={My} />
              <Redirect path="/" to="/home" />
            </Switch>
            <div id="footer">
              <ul>
                <li>
                  <NavLink to="/home">
                    <span>首页</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/classify">
                    <span>分类</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shoppingCar">
                    <span>购物车</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my">
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
  componentDidMount(){
    this.props.getData()
  }
}

const mapStateToProps = (state)=>({
  iconPic:state.home.iconPic
})

const mapDispatchToProps = (dispatch)=>({
  getData(){
    dispatch(icon_action())
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
