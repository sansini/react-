import React ,{Component} from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import './banner2.scss';
class Banner2 extends Component{
    constructor(props){
     super(props);
     this.state={
         dates:[
            [
                {
                    "id":1,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/b0426fe0192e771e3f398bf77193b269?imageView2/1/w/320/h/320",
                    "title":"香辣味手撕蟹棒120",
                    "price":"￥18.9",
                    "sprice":"￥27.8"
                } ,
                {
                    "id":2,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/bd8312ed92b49ba1ee8c330b0c280d31?imageView2/1/w/320/h/320",
                    "title":"精制猪肉脯长方片200g",
                    "price":"￥19.9",
                    "sprice":"￥39.8"
                },
                {
                    "id":3,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/69f3e661420554a83fda103d8a420fbb?imageView2/1/w/320/h/320",
                    "title":"【2袋装】奶油味夏威夷果200g/袋",
                    "price":"￥34.9",
                    "sprice":"￥73.8"
                },
                {
                    "id":4,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/384c2a26390c48b7b5bdd08a247f2c15?imageView2/1/w/320/h/320",
                    "title":"【3袋装】芒果干120g/袋",
                    "price":"￥29.9",
                    "sprice":"￥66.8"
                },
                {
                    "id":5,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/10f5080592b4466d3f5ebcf5a69911d4?imageView2/1/w/320/h/320",
                    "title":"麻辣牛板筋125g/袋",
                    "price":"￥13.9",
                    "sprice":"￥27.9"
                },
                {
                    "id":6,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/21f3d7ff64dc8ac50ae666553aad8ca7?imageView2/1/w/320/h/320",
                    "title":"炭烧腰果120g/袋",
                    "price":"￥11.9",
                    "sprice":"￥33.8"
                },
                {
                    "id":7,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/67910c9524b548f5861bbd061950f69e?imageView2/1/w/320/h/320",
                    "title":"中秋坚果大礼包1380",
                    "price":"￥88",
                    "sprice":"￥168"
                },
                {
                    "id":8,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/bd61c91bc43ba18dcdb9acf4aacae0f2?imageView2/1/w/320/h/320",
                    "title":"【2袋装】手撕鱿鱼80g/袋",
                    "price":"￥21.8",
                    "sprice":"￥41.6"
                },
                {
                    "id":9,
                    "imgsrc":"http://img2.vipbcw.com/2018/09/36539fbdf396901e5bb848ec6acfaa66?imageView2/1/w/320/h/320",
                    "title":"中秋坚果大礼包1450",
                    "price":"￥128",
                    "sprice":"￥258"
                }
                
                
                
            ]
         ]
     }

    }
    componentDidMount(){
                new Swiper('#home-banner3', {
                
                          slidesPerView: 4,
                          spaceBetween: 20,
                          centeredSlides: true,
                           
                });
        
            }
    render(){
        return(
            <div className="swiper-container " id="home-banner3">
                <div className="swiper-wrapper">
                    {this.state.dates.map((item,index)=>(
                        <div key={index} className="swiper-slide">
                         <a href="javascript:;">
						              <img src={item.imgsrc} alt=""/>
						              <p className="p_name">{item.title}</p>
						               <p className="p_price">{item.price}<del>{item.sprice}</del></p>
						 </a>
                         </div>
                    ))}
                </div>
                
   
            </div>
        )
    }
}

export default Banner2;