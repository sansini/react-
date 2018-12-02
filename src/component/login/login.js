import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './login.scss';
import {connect} from 'react-redux';
import { asyActionAuth } from '../../redux/asyncAction';
import * as types from "../../redux/const";
import { dispatch } from 'rxjs/internal/observable/range';
import state from '../../redux/state';
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            iptUser:'',
            password:''
        }
    }
    componentWillMount(){
        this.setState=({
            iptUser:this.refs.name,
            password:this.refs.pass 
        })
    }
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
              <input type="text" placeholder="用户名" ref="name"/>
              </div>
              <div className="login_item">
              <i className="fa fa-lock"></i>
              <input type="text" placeholder="密码"  ref="pass"/>
              </div>
              <div className="login-btn" 
              onClick={()=>{this.props.login(this.state.iptUser,this.state.password)}
              }>登陆</div>
              <a href="javascript:;" className="forget">忘记密码</a>
            </div>

{/*last*/}
            </div>
        )
    }
}
let MapStateToProps=()=>(
    {
      auth:state.user.auth
    }
);
let MapDispatchToProps=dispatch=>(
    {
        login:(username,password)=>{dispatch(asyActionAuth(
            "/data/user.json",
            types.UPDATE_USER,
          
            username,
            password ,
             
        ))}
 
    }
)
export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Login);