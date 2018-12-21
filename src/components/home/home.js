import React,{Component} from "react";
import {home_banner_action} from "../../action/actionCreator";
import {connect} from "react-redux";
import Search from "./children/search";
import Banner from "./children/banner";
import Nav from "./children/nav";

class Home extends Component{
    render(){
        let {homeBanner,homeNav,homeHost} = this.props;
        console.log(homeNav)
        return (
            <div>
                <Search />
                <Banner homeBanner={homeBanner} />
                <Nav homeNav={homeNav} />
            </div>
        )
    }
    componentDidMount(){
        this.props.getDataBanner();
    }
}

const mapStateToProps = (state)=>({
    homeBanner:state.home.homeBanner,
    homeNav:state.home.homeNav,
    homeHost:state.home.homeHost
})

const mapDispatchToProps = (dispatch)=>({
    getDataBanner(){
        dispatch(home_banner_action())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)