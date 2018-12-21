import React,{Component} from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component  {
    render(){
        let {homeNav} = this.props;
        return (
            <div id="home_nav">
                {
                    homeNav.map((item,index)=>{
                        return <div key={index}>
                            <Link to="#">
                                <img src={item.child[0].pic} />
                            </Link>
                        </div>
                    })
                }
            </div>
        )
    }
}
