import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './user.scss';
class User extends Component{
    handle(){
        window.history.go(-1)
    }
    render(){
        return(

            <div>

            <div className="user_header">
            <div className="header-left" onClick={this.handle.bind(this)} >取消</div>
            登陆
            <Link to="/register" className="header-right">注册</Link>
            </div>

            <div className="login-tab">
                <ul>
                    <li>账号密码登陆</li>
                    <li>手机验证码登陆</li>
                </ul>
            </div>
            <div className="login-box">
              <div className="login_item">
            <i className="fa fa-mobile"></i>
              <input type="text" placeholder="用户名" />
              </div>
              <div className="login_item">
              <i className="fa fa-lock"></i>
              <input type="text" placeholder="密码" />
              </div>
              <div className="login-btn">登陆</div>
              <a href="javascript:;" className="forget">忘记密码</a>
            </div>

{/*last*/}
            </div>
        )
    }
}
export default User;