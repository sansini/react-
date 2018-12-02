import React,{Component} from 'react';
import './home.scss'; 
import Banner from './banner/banner.js';
import Banner2 from './banner2/banner2';
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            dates:[
                { 
                    "id":1,
                    "imgsrc":"http://img2.vipbcw.com/2018/11/731a5f2a7d9acba4049c43e4650c1e52?imageView2/2/w/100",
                    "title":"领券中心"
                },
                { 
                    "id":2,
                    "imgsrc":"http://img2.vipbcw.com/2018/11/c3e1da7aa4c7504b52d590ed044f4a22?imageView2/2/w/100",
                    "title":"签到有礼"
                },
                { 
                    "id":3,
                    "imgsrc":"http://img2.vipbcw.com/2018/11/99be00c403ddd355879bebae8d047d47?imageView2/2/w/100",
                    "title":"积分抽奖"
                },
                { 
                    "id":4,
                    "imgsrc":"http://img2.vipbcw.com/2018/11/bc28717fc656598221328bf6a8f831e3?imageView2/2/w/100",
                    "title":"会员中心"
                }
            ],
            datas:[
                {
                    "id":1,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/5fff9af1d657caeebcb061085ef865fd?imageView2/1/w/320/h/320",
                    "pro_name":"【2袋装】夏威夷果200g/袋",
                    "pro_desc":"百草味,奶油味,夏威夷果,奶油醇香,饱满,开果器,带壳坚果",   "price":"￥34.9",
                    "sprice":"￥73.9"
                    
                },
                {
                    "id":2,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/d54f2a38c6a13e7e7ec0634db544b71a?imageView2/1/w/320/h/320",
                    "pro_name":"【2袋装】夏威夷果200g/袋",
                    "pro_desc":"碧根果,坚果炒货,奶香四溢,带壳坚果,大果亻",   "price":"￥38.9",
                    "sprice":"￥65.8"
                    
                },
                {
                    "id":3,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/6b7251a1e8423109a3a5cc81f17f0ad1?imageView2/1/w/320/h/320",
                    "pro_name":"【2袋装】板栗仁200g/袋",
                    "pro_desc":"百草味,奶油味,夏威夷果,奶油醇香,饱满,开果器,带壳坚果",   "price":"￥21.9",
                    "sprice":"￥29.9"
                    
                },
                {
                    "id":4,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/6b2a3c0cf3743eeefcdba885b3e86793?imageView2/1/w/320/h/320",
                    "pro_name":"【2袋装】东北松子200g/袋",
                    "pro_desc":"百草味,奶油味,夏威夷果,奶油醇香,饱满,开果器,带壳坚果",   "price":"￥49.9",
                    "sprice":"￥78.9"
                    
                },
                {
                    "id":5,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/e770237d423228096b4bbd473a45c644?imageView2/1/w/320/h/320",
                    "pro_name":"【2袋装】芒果干200g/袋",
                    "pro_desc":"百草味,奶油味,夏威夷果,奶油醇香,饱满,开果器,带壳坚果",   "price":"￥23.9",
                    "sprice":"￥53.9"
                    
                },
                {
                    "id":6,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/22bbe47a9ef2b7e124ca1f23532f4259?imageView2/1/w/320/h/320",
                    "pro_name":"【2袋装】草莓干200g/袋",
                    "pro_desc":"百草味,奶油味,夏威夷果,奶油醇香,饱满,开果器,带壳坚果",   "price":"￥26.9",
                    "sprice":"￥46.9"
                    
                },
                {
                    "id":7,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/dbbddb0f355e7c8098d723fb46b6cc4a?imageView2/1/w/320/h/320",
                    "pro_name":"【2袋装】麻辣牛肉200g/袋",
                    "pro_desc":"百草味,奶油味,夏威夷果,奶油醇香,饱满,开果器,带壳坚果",   "price":"￥9.9",
                    "sprice":"￥29.9"
                    
                },
                {
                    "id":8,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/3b90d28ca103b96b13d5a12c4a6b3e64?imageView2/1/w/320/h/320",
                    "pro_name":"【2袋装】巴旦木200g/袋",
                    "pro_desc":"百草味,奶油味,夏威夷果,奶油醇香,饱满,开果器,带壳坚果",   "price":"￥36.9",
                    "sprice":"￥68.9"
                    
                },
                {
                    "id":8,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/3b90d28ca103b96b13d5a12c4a6b3e64?imageView2/1/w/320/h/320",
                    "pro_name":"【2袋装】巴旦木200g/袋",
                    "pro_desc":"百草味,奶油味,夏威夷果,奶油醇香,饱满,开果器,带壳坚果",   "price":"￥36.9",
                    "sprice":"￥68.9"
                    
                },
                {
                    "id":9,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/235471b0ac805260b3f2090d4105bf89?imageView2/1/w/320/h/320",
                    "pro_name":"【2袋装】山楂条200g/袋",
                    "pro_desc":"百草味,奶油味,夏威夷果,奶油醇香,饱满,开果器,带壳坚果",   "price":"￥7.9",
                    "sprice":"￥15.8"
                    
                },
                {
                    "id":10,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/9e5a6f2d6997b60aed7d3df34c7c396a?imageView2/1/w/320/h/320",
                    "pro_name":"【2袋装】香葱山药片200g/袋",
                    "pro_desc":"百草味,奶油味,夏威夷果,奶油醇香,饱满,开果器,带壳坚果",   "price":"￥12.9",
                    "sprice":"￥19.9"
                    
                },
                {
                    "id":11,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/3080262909da5ba40e9e7c92d6e205b0?imageView2/1/w/320/h/320",
                    "pro_name":"中秋大礼包",
                    "pro_desc":"百草味,奶油味,夏威夷果,奶油醇香,饱满,开果器,带壳坚果",   "price":"￥88",
                    "sprice":"￥168"
                    
                }
            ]
        }
    }
    render(){
        return(

            <div>
            <div className="header">百草味</div>
           <div className="nav">
           <ul>
             <li>果干蜜饯</li>
             <li>干果炒货</li>
             <li>肉脯</li>
             <li>糕点糖果</li>
            </ul>
            </div> 
            <div className="home-content">
            <Banner/>
             <div className="content-m1" >
             <ul>
                     {
                      this.state.dates.map((item)=>(
                      <li key={item.id}>
                      <a href="#">
                      <img src={item.imgsrc}/>
                      </a>
                      <p>{item.title}</p>
                  </li>    
                    ))
                     }
                </ul>

             </div>
             <div className="template6">
              <a href="javescript:;">
              <img src="http://img2.vipbcw.com/2018/05/4c01e763bd11c66dec5cecbd7f987ceb?imageView2/2/w/640"/>
                </a>
             </div>
             {/* 7*/}
             <div className="template7">
              <a href="javascript:;">
              <img src="http://img2.vipbcw.com/2018/11/65ee7ec7dabb6f13d4f053c32895be5c?imageView2/2/w/640"/>
              </a>
             </div>
             <div className="template9">
						  <div className="template_title">
						  <b></b>
						  热销爆款
						  <em>/</em>
						  <span>宅家必备美味</span>
						  </div>
							<div className="template_pro">
							<ul>
							{
								this.state.datas.map((item)=>(
						    	<li>
							<a href="javascript:;">
							<div className="pro_img">
							<img src={item.imgsrc}/>
							</div>
							
							<div className="pro_dt1">
							       <div className="pro_name">
							       {item.pro_name}
							         </div>
						              	<div className="pro_desc">
							               {item.pro_desc}
							               </div>
							<div className="pro_price">
							{item.price}
							<del>
							{item.sprice}
							</del>
							</div>
						
						 
							</div>
								</a>
							</li>
								))
							}
							</ul>
					 	
							</div>
							</div>
   				 
              
                      

               

            </div>{/*home-content*/}
</div>
                
           
            
        )
    }
}
export default Home;