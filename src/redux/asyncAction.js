import * as types from './const';
export let asyActionLIST=(url,type,dispatch)=>{//读取列表
	console.log(0);
	dispatch({type:types.VIEW_LODING,payload:false});
	fetch(
	url
	).then(
	res=>res.json()//解流
	).then(
	data=>{
	dispatch({type:types.VIEW_LODING,payload:false})
	dispatch({type:type,payload:data})	
	}
	)
	
}
//读取列表的数组数据
//读取详细的数据
export let asyActionLists=(url,type,dispatch,index)=>{//详情	  
	fetch(
	 url
	).then(
	res=>res.json()
	).then(
	data=>{
	dispatch({type:types.VIEW_LODING,payload:false});
	dispatch({type:type,payload:data[index]}
	);
	}	
	)
	return {type:types.VIEW_FOOT,payload:true}
	 
}
export let asyActionDetail=(url,type,dispatch,index)=>{//详情	  
	fetch(
	 url
	).then(
	res=>res.json()
	).then(
	data=>{
	dispatch({type:types.VIEW_LODING,payload:false});
	dispatch({type:type,payload:data[index]}
	);
	}	
	)
	return {type:types.VIEW_FOOT,payload:false}
}
export let asyActionCar=(url,type,dispatch,index)=>{//购物车的信息
	  
	fetch(
	url
	).then(
	res=>res.json()
	).then(
	data=>{
	dispatch({type:types.VIEW_LODING,payload:false});
	dispatch({type:type,payload:data[index]}
	);
	
	}
		
	)
	return {type:types.VIEW_FOOT,payload:true}
}
//异步请求的授权
export let asyActionAuth=(url,type,usrname,password)=>(dispatch,getState)=>{
	console.log(getState().list);//登陆注册的数据
	dispatch({type:types.VIEW_LODING,payload:true})  ;
	
	return ()=>{
	fetch(
		url,
	 
	).then(
	res=>res.json()
	).then(
	data=>{
	dispatch({type:types.VIEW_LODING,payload:false});
	dispatch({type:type,payload:data}
	);	
	}
	 )
	}
		
	
	 
}

 