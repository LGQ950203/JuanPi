import React,{Component,Fragment} from "react";
import { NavLink } from "react-router-dom";
export default class Search extends Component{
    render(){
        return (
            <div>
                <div id="search">
                    <NavLink to="#" id="search_box">
                        <span className="search_pic">
                            <i className="iconfont">&#xe617;</i>
                        </span>
                        <span className="search_t">卷皮</span>
                        <span>搜索</span>
                    </NavLink>
                    <NavLink to="#" id="search_to">
                        <i className="iconfont">&#xe601;</i>
                    </NavLink>
                </div>
            </div>
        )
    }
}