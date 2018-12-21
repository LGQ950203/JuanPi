import React,{Component} from "react";
export default class Phone extends Component {
    render(){
        return (
            <div className="loginInput">
                <input type="text" placeholder="请输入手机号码" />
                <input type="passward" placeholder="请输入验证码" />
            </div>
        )
    }
}