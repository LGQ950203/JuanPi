import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Host extends Component {
    render() {
        let { homeHost } = this.props;
        return (
            <div id="home_host">
                <div className="big_pic">
                    <Link to="#">
                        <img src={homeHost.length > 0 ? homeHost[0].child[0].pic : "正在加载"} alt="广告" />
                    </Link>
                </div>
                <div className="small_pic">
                    {
                        homeHost.length>0?homeHost[1].child.map((item,index)=>{
                            return <Link to="#" key={index}>
                                <img src={item.pic} alt="广告" />
                            </Link>
                        }):"正在加载"
                    }
                </div>
            </div>
        )
    }
}