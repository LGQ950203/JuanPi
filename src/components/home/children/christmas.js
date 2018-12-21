import React,{Component,Fragment} from "react";
import { Link } from "react-router-dom";

export default class Christmas extends Component  {
    render(){
        let {homeChristmas} = this.props;
        return (
            <Fragment>
                <div className="Crsms_top">
                    <Link to="#">
                        <img src={homeChristmas.length>0?homeChristmas[2].data[0].child[0].pic:'正在加载'} alt="圣诞" />
                    </Link>
                </div>
                <div className="Crsms_center_top">
                    {
                        homeChristmas.length>0?homeChristmas[3].data.map((item,index)=>{
                            return <div key={index}>
                                <Link to="#">
                                    <img src={item.child[0].pic} alt="圣诞" />
                                </Link>
                            </div>
                        }):"正在加载"
                    }
                </div>
                <div className="Crsms_center_top">
                    {
                        homeChristmas.length>0?homeChristmas[4].data.map((item,index)=>{
                            return <div key={index}>
                                <Link to="#">
                                    <img src={item.child[0].pic} alt="圣诞" />
                                </Link>
                            </div>
                        }):"正在加载"
                    }
                </div>
            </Fragment>
        )
    }
}