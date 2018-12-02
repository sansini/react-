
import React,{Component} from 'react';
import './list.scss';
import {Router,Route,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { asyActionLIST } from '../../redux/asyncAction';
import * as types from "../../redux/const";
import querystring from 'query-string';
class List extends Component{
    
    componentDidMount(){
        this.props.getList();
        console.log(this.props.list);
    }
    render(){
        console.log(this.props);
        return(

            <div>
 <div className="list-box">
             
                <div className="container">
								
                  <a href="javascipt:;" className="classify">
                   <span className="input-box"> <em>新品</em></span>
 
                  </a>
										
                    <div className="classify-top">
                    <div className="classify-bottom">
                    <ul>
                        {
                            this.props.list.map(item=>(
                            <li key={item.id}>
                        <Link to={{ 
                            pathname:"/lists/"+item.id,
                            search:'list'+item.id
                            }}>    <img src={item.imgsrc}  alt=""/></Link>
                           <p>{item.title}</p>
                          
                          </li>
                            ))
                        }
                        
                    </ul>
                        <div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
            </div>
        )
    }
}
let MapStateToProps=(state)=>(
    {
      list:state.list  
    }
);
let MapDispatchToProps=(dispatch)=>(
{
 getList:()=>{asyActionLIST(
     '/list.json',
     types.UPDATE_FOLLOW ,
     dispatch

 )}
}
);
export default connect(

    MapStateToProps,
    MapDispatchToProps
)(List);