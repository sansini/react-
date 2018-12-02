import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import './foot.scss';

class Footer extends Component{
    routerender(){
        let {routes}=this.props
        return(
            routes.map(item=>(
               <NavLink to={item.path} activeClassName="active"  key={item.id} exact={item.exact}>
             <s className={item.icon}></s>
             <p>{item.title}</p>
             </NavLink>    
            ))
           
        )
    }
    render(){
       return(
           <div className="footer-box">
           <div className="menu_foot">
            
             {this.routerender()}
          </div>
           </div>
       ) 
    }
}
Footer.defaultProps={
    routes:[
        {
            id:1,
            icon:"fa fa-home",
            title:"首页",
            path:"/",
            exact:true
        },
        {
            id:2,
            icon:"fa fa-bars",
            title:"分类",
            path:"/list"
        },
        
        {
            id:3,
            icon:"fa fa-shopping-cart",
            title:"购物车",
            path:"/car"
        },
        {
            id:5,
            icon:"fa fa-user-o",
            title:"我的",
            path:"/user"
        }
    ]
}
export default Footer;