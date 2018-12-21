import React, { Component,Fragment } from "react";
import { Link } from "react-router-dom";

export default class Host extends Component {
    render() {
        let {homeAdvert} = this.props;
        return (
            <Fragment>
                <div className="advert_top">
                    <Link to="#">
                        <img src={homeAdvert.length>0?homeAdvert[6].data[0].child[0].pic:"正在加载"} />
                    </Link>
                </div>
                <div className="advert_bottom">
                    <Link to="#">
                        <img src={homeAdvert.length>0?homeAdvert[5].data[0].child[0].pic:"正在加载"} />
                    </Link>
                </div>
            </Fragment>
        )
    }
}