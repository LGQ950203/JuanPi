import React,{Component} from "react";
export default class JuanpiID extends Component {
    render(){
        return (
            <div className="loginInput">
                <input type="text" placeholder="手机号/邮箱/用户名" />
                <input type="passward" placeholder="密码" />
            </div>
        )
    }
}