import React, { Component } from 'react';
import { Route,Switch,withRouter } from 'react-router-dom'
import './App.css'
import Footer from './component/footer/footer.js';
import Home from './component/home/home.js';
import Car from './component/car/car.js';
import List from './component/list/list.js';
import Login from './component/login/login.js';
import Register from './component/register/register.js';
import User from './component/user/user.js';
import Lists from './component/list/lists/lists';
import Deatil from './component/detail/detail';
import Loding from './component/loding/Loding';
import AuthUser from './component/guard/guard.js';
import {connect} from 'react-redux';
class App extends Component {
  constructor(props){
    super(props);
     
  }
   
  renderRouter(){
    let {routes}=this.props
    
    return(
      <>
      <Switch> 
     
        {
          routes.map(item=>(
            <Route key={item.id} path={item.path} component={item.component} exact={item.exact}/>
          ))
        }
        <AuthUser path="/user" 
        component={User}/>
      </Switch>
      
      </>
    )
  }
    
  
  render() {
   
    return (
    
       <div className="App">        
          {this.props.bLoding && <Loding/>} 
         {this.renderRouter()}
      {this.props.bFoot&&<Footer/>} 
      
       </div>
    
    );
  }
}
App.defaultProps={
  routes:[
    {
      id:1,
      path:'/',
      component:Home,
      exact:true
    },
    {
      id:2,
      path:'/list',
      component:List,
      exact:false
    },
     
    {
      id:3,
      path:'/car',
      component:Car,
      exact:false
    },
    {
      id:4,
      path:'/login',
      component:Login,
      exact:false
    },
    {
      id:5,
      path:'/register',
      component:Register,
      exact:false
    },
    {
      id:6,
      path:'/lists/:id',
      component:Lists,
      exact:false
    },
    {
      id:7,
      path:'/detail/:id',
      component:Deatil,
      exact:false
    },
    
  ]
}
let MapStateToProps=(state)=>(
  {
    bLoding:state.bLoding,
    bFoot:state.bFoot
  }
)

let MapDispatchToProps=(dispatch)=>(
  {

  }
)
export default connect(
  MapStateToProps,
  MapDispatchToProps
)(App);
