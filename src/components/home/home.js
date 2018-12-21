import React, { Component,Fragment } from "react";
import { home_banner_action } from "../../action/actionCreator";
import { connect } from "react-redux";
import Search from "./children/search";
import Banner from "./children/banner";
import Nav from "./children/nav";
import Host from "./children/host";
import Christmas from "./children/christmas";
import Advert from "./children/advert";

class Home extends Component {
    render() {
        let { homeBanner, homeNav, homeHost, homeChristmas, homeAdvert } = this.props;
        return (
            <Fragment>
                <div className="wrapper" ref="wrapper">
                    <div className="content">
                        <Search />
                        <Banner homeBanner={homeBanner} />
                        <Nav homeNav={homeNav} />
                        <Host homeHost={homeHost} />
                        <Christmas homeChristmas={homeChristmas} />
                        <Advert homeAdvert={homeAdvert} />
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getDataBanner();
    }
}

const mapStateToProps = (state) => ({
    homeBanner: state.home.homeBanner,
    homeNav: state.home.homeNav,
    homeHost: state.home.homeHost,
    homeChristmas: state.home.homeChristmas,
    homeAdvert: state.home.homeAdvert
})

const mapDispatchToProps = (dispatch) => ({
    getDataBanner() {
        dispatch(home_banner_action())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)