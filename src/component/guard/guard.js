import {Route,Redirect} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
  let AuthUser=({component:Component,auth,userData,...reset})=>(
    <Route {...reset} render={(props)=>(
        auth?
        <Component {...props} useruserData={userData}/> :
        <Redirect to="/login"/>
    )}/>
  );
let MapStateToProps=state=>(
    {
        auth:state.user.auth,
        userData:state.user.userData
    }
)

 
export default connect(
    MapStateToProps,
   
)(AuthUser);