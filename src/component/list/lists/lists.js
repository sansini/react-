import React ,{Component}from 'react';
import './lists.scss';
import querystring from 'query-string'; 
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as types from '../../../redux/const';
import {asyActionLists} from '../../../redux/asyncAction';
class Lists extends Component{
    componentDidMount(){
        let id =this.props.match.params.id;
        console.log(this.props.match.params.id);
        this.props.getLists(id);
        console.log(this.props.getLists.lists);
        console.log(this.props.location.search)
    }
    render(){
       let dataName=  this.props.location.search ;
      
        let {lists}=this.props;
        console.log(this.props);
        return(
            <div className="lists">
 
             <div className="lists-header">
              <div className="left-box">
              <i className="fa fa-left" ></i>
              </div>
               热卖爆款
             </div>
               <ul className="content-banner">
               <li>销量</li>  
               <li>新品</li>
               <li>价格</li>
               </ul>
             <div className="list-content">
              
            <div className="content-main">
             <ul className="list-main">
            
{
                this.props.lists.map((item,index)=>(
                  <li key={index}>
                  <Link to={{ 
                            pathname:"/detail/"+item.id,
                            search: dataName 
                            }}>
                  <img src={item.imgsrc}/>
                   <h4>{item.pro_name}</h4>
                  <p className="list_name">{item.pro_desc}</p>
                 
                  <p className="list_price">{item.sprice}</p>
                  </Link>
                  <div className="list_car"><i className="fa fa-shopping-cart"></i></div>
              </li>    
               
             ))
             
             }
             </ul>

 
            </div>
             </div>

               
            </div>
        )
    }
}

let MapStateToProps=(state)=>(
    {
      lists:state.lists
    }
);
let MapDispatchToProps=(dispatch)=>(
{
 getLists:(id)=>dispatch(asyActionLists(
         '/detail.json',
          types.UPDATE_LISTS,
          dispatch,id

 ))
})


 
export default connect(

    MapStateToProps,
    MapDispatchToProps
)(Lists);
