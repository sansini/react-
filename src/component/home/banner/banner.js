import ReactSwipe from 'react-swipe';
import React ,{Component} from 'react';
class Banner extends Component{
    constructor(props){
     super(props);
     this.state={
         datalist:[
             {
                 id:1,
                 imageUrl:"http://img2.vipbcw.com/2018/11/84c43a06e119f9fbd25db5d827df2efc?imageView2/2/w/640"
             },
             {
                 id:2,
                 imageUrl:"http://img2.vipbcw.com/2018/05/25f4f6667f67d00af202a849ba4d6314?imageView2/2/w/640"
             }
         ]
     }
    }
render(){
    return(
      
<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:3000}} key={this.state.datalist.length}>
                 {
                     this.state.datalist.map((item)=>
                         <div key={item.id}>
                              <img src={item.imageUrl} style={{width:'100%'}} alt="few" />
                         </div>
                     )
                 }
               </ReactSwipe>
    )
}
}

export default Banner;
