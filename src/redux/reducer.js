import * as types from './const.js';
const reducer=(defaultstate,action)=>{
	/*defaulTstate代表的是state中已经存在的数据*/
	let {type,payload}=action;
	console.log(defaultstate,action)
	switch(type){
	 case types.VIEW_NAV:
	 return Object.assign({},defaultstate,{
		 bNav:payload
	 });
	 case types.VIEW_FOOT:
	 return Object.assign({},defaultstate,{
		 bFoot:payload
	 });
	 
	 case types.VIEW_LODING:
	 return Object.assign({},defaultstate,{
		 bLoding:payload
	 });
	 case types.CLEAR_HOME://清空购物车
	 return Object.assign({},defaultstate,{
	    car:[]
	 });
	 case types.REDUCE://购物车-
	 return Object.assign({},defaultstate,{
		 car:payload
	 });
	 case types.ADD://购物车+
	 return Object.assign({},defaultstate,{
		 car:payload
	 });
	 case types.ADD_CAR://加入购物车+
	 return Object.assign({},defaultstate,{
		 car:payload
	 });
	 case types.UPDATE_FOLLOW://加载列表
	 return Object.assign({},defaultstate,{
		 list:payload
	 });
	 case types.UPDATE_DETAIL://加载详情页
	 return Object.assign({},defaultstate,{
		 detail:payload
	 });
	 case types.UPDATE_USER://检测用户的登陆注册
	 return Object.assign({},defaultstate,{
		 user:payload
	 });
	 case types.UPDATE_LISTS://检测用户的登陆注册
	 return Object.assign({},defaultstate,{
		  lists:payload
	 });
	default:
		return defaultstate;
	}
	 
}
export default reducer;