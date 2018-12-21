import React, { Component } from "react";
import Swiper from "swiper";
import "../../../../node_modules/swiper/dist/css/swiper.css";

export default class Banner extends Component {
    render() {
        let { homeBanner } = this.props;
        return (
            <div className="swiper-container home_banner" ref="home_banner">
                <div className="swiper-wrapper">
                    {
                        homeBanner.length > 0 ? homeBanner.map((item, index) => {
                            return <div className="swiper-slide" key={index}>
                                <img src={item.pic} alt="广告" />
                            </div>
                        }) : "正在加载"
                    }
                </div>
                <div className="swiper-pagination banner_pagination"></div>
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            new Swiper(this.refs.home_banner, {
                loop: true,
                autoplay: true
            })
        })

    }
}