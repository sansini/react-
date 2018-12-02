import React,{Component} from 'react';
import './detail.scss';
import {connect} from 'react-redux';
import querystring from 'query-string';
import * as types from '../../redux/const';
import {asyActionDetail} from '../../redux/asyncAction';
import Item from 'antd/lib/list/Item';
import {Link} from 'react-router-dom';

class Detail extends Component{
    componentDidMount(){
        let id =this.props.match.params.id; 
        let data=this.props.location.search.substr(1);
        this.props.getDetail(data,id-1)
    }
     handle(){
             window.history.go(-1)
         }
    render(){
         let {detail,auth} =this.props;
         console.log(detail);
        
        return(
         
            <div className="detail_name">
              
              <div className="header-img">
                     <img src={detail.imgsrc}/>
                     <i className="fa fa-angle-left" onClick={()=>this.handle()}></i>
                </div>
             <div className="detail-content">
             <div className="show-price">
             <span className="new-price">{detail.price}</span>
             <del>{detail.sprice}</del>
             </div>
             <div className="show-title">
             <h3>{detail.pro_name}</h3>
             <p>{detail.pro_desc}</p>
             </div>
            
            </div>
            <div className="detail-footer">
            <ul>
                <li className="count">
                    <a href="javascript:;">
                    <i className="fa fa-address-book"></i>
                    <p>客服</p>
                    </a>
                </li>
                <li className="count">
                <a href="javascript:;"> 
                <i className="fa fa-star-o"></i>
                    <p>收藏</p> 
                    </a>
                </li>
                <li className="count">
                <Link to="/car">
                 <i className="fa fa-shopping-cart"></i>
                    <p>购物车</p>
                    </Link>
                </li>
                <li className="addcount">
                <Link to={auth===true?"/car":"/login" }>
                <span onClick={this.addcar}>加入购物车</span>
                 </Link>
                </li>
            </ul>
            </div>
             </div>

          
        )
    }
}
let  initMapStateToProps=(state)=>({
   detail:state.detail,
   auth:state.auth
})
let initMapDispatchToProps=(dispatch)=>({
    getDetail:(data,index)=>{
        dispatch(asyActionDetail(
            "/data/"+data+'.json',
              types.UPDATE_DETAIL,
               dispatch,
               index
        ))
    }
   

})
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Detail);