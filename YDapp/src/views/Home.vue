<template>
    <div>
         <!-- header -->
        <mt-header fixed >
            <router-link to="/kind" slot="left">
                <img class="header-icon" src="../assets/index/header-icon-left.png" alt="" srcset="">
            </router-link>
            <router-link to="/" slot="right">
                <img class="header-icon" src="../assets/index/header-icon-right.png" alt="" srcset="">
            </router-link>
        </mt-header>
        <!-- 轮播 -->
        <div class="swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <a href=""><img class="swipe-img1" src="../assets/index/swipe.jpg" alt="" srcset=""></a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href=""><img class="swipe-img2" src="../assets/index/swipe1.png" alt="" srcset=""></a>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!--  -->
        <div >
            <ul class="bp">
                <li><img src="../assets/index/yes.png"><span>认证龙头企业</span> </li>
                <li><img src="../assets/index/yes.png"><span>13年品牌</span> </li>
                <li><img src="../assets/index/yes.png"><span>3小时送花</span> </li>
            </ul>
        </div>
        <!-- 520box界面 -->
        <div>
            <div>
                <img width="100%" src="../assets/index/F1box-img.gif" alt="">
            </div>
            <div>
                <div class="box520-body">
                    <div class="box520-body-item">
                        <div class="box520-body-left">
                            <div>经典爆款</div>
                            <div>年销售冠军</div>
                            <div>￥304</div>
                        </div>
                        <div class="box520-body-right">
                            <img width="100%" src="../assets/index/test1.jpg" alt="">
                        </div>
                    </div>
                    <div class="box520-body-item"></div>
                    <div class="box520-body-item"></div>
                    <div class="box520-body-item"></div>
                </div>
            </div>
        </div>
        
        <!-- 爱情 -->
        <div>
            <div class="product-title"><span>送恋人/爱情鲜花</span></div>
            <div class="product-body">
                <div class="product-cart">
                    <div class="product-img">
                        <img src="../assets/index/text2.jpg" alt="">
                    </div>
                    <div class="product-decs">
                        <p>一心一意</p>
                        <p>红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶8枝</p>
                        
                        <div class="dd">
                            <p >年销售冠军</p>
                        </div>
                        
                        <p class="biaoqian">经典爆款，年销售冠军！</p>
                        <div class="bottom">
                            <div class="price">
                                <p>￥304</p>
                                <p>已销售12.2万件</p>
                            </div>
                            <div >
                                <img class="cart-icon" src="../assets/index/cart.png" alt="">
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="product-more">
                <button >查看更多</button>
            </div>
        </div>
        <div class="yinying"></div>
        <!-- 长辈 -->
        <div>
            <div class="product-title"><span>送长辈鲜花</span></div>
            <div class="product-body">
                <div class="product-cart">
                    <div class="product-img">
                        <img src="../assets/index/text2.jpg" alt="">
                    </div>
                    <div class="product-decs">
                        <p>一心一意</p>
                        <p>红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶8枝</p>
                        
                        <div class="dd">
                            <p >年销售冠军</p>
                        </div>
                        
                        <p class="biaoqian">经典爆款，年销售冠军！</p>
                        <div class="bottom">
                            <div class="price">
                                <p>￥304</p>
                                <p>已销售12.2万件</p>
                            </div>
                            <div >
                                <img class="cart-icon" src="../assets/index/cart.png" alt="">
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="product-more">
                <button >查看更多</button>
            </div>
        </div>
        <div class="yinying"></div>
        <!-- 永生 -->
        <div>
            <div class="product-title"><span>永生花推荐</span></div>
            <div class="product-body">
                <div class="product-cart">
                    <div class="product-img">
                        <img src="../assets/index/text2.jpg" alt="">
                    </div>
                    <div class="product-decs">
                        <p>一心一意</p>
                        <p>红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶8枝</p>
                        
                        <div class="dd">
                            <p >年销售冠军</p>
                        </div>
                        
                        <p class="biaoqian">经典爆款，年销售冠军！</p>
                        <div class="bottom">
                            <div class="price">
                                <p>￥304</p>
                                <p>已销售12.2万件</p>
                            </div>
                            <div >
                                <img class="cart-icon" src="../assets/index/cart.png" alt="">
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="product-more">
                <button >查看更多</button>
            </div>
        </div>
        <div class="yinying"></div>
        <div style="margin-bottom:54px"></div>
            <!-- <img class="logo" src="../assets/index/pc_hualogo.png" alt=""> -->
        <tabbar :active="active"></tabbar>
    </div>
</template>
<script>
import tabbar from "../components/tabbar";
export default {
  components: {
    tabbar
  },
  data() {
    return {
      active: "home"
    };
  },
  methods: {
    handleChange(index) {}
  }
};
</script>
<style scoped>
.mint-header {
  height: 40px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("../assets/index/pc_hualogo.png");
  background-color: #0a4c0d;
  background-size: 150px 20px;
}
.header-icon {
  height: 20px;
  width: 20px;
  display: inline-block;
}
.swipe {
  width: 100%;
  height: 160px;
  margin-top: 40px;
  /* background-color: red; */
}
.swipe-img1 {
  /* width: 100%; */
  height: 100%;
  margin-left: -50%;
}
.swipe-img2 {
  /* width: 100%; */
  height: 100%;
  margin-left: -25%;
}
.bp {
  
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  font-size: 10px;
  justify-content: space-between;
  margin: 10px 30px;
  
}
.bp li{
    display: flex;
    justify-content: center
}
.box520-body{
    width: 100%;
    height: 200px;
    margin-top: -10px;
    background-color:#e26ca9a8;
    
    justify-content: space-around;
}
.box520-body-item{
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
}
.box520-body-item:first-child,.box520-body-item:nth-child(2) {
    float: left;
    margin-top: 5% ;
    margin-left: 2%;
    width:47%;
    height: 40%;
    background-color: white;
}
.box520-body-item:last-child,.box520-body-item:nth-child(3) {
    float: left;
    margin-top: 2% ;
    margin-left: 2%;
    width:47%;
    height: 40%;
    background-color: white;
}
.box520-body-left{
    width: 53%;
    height: 90%;
    margin-top:2%;
    text-align: left;
    padding-left: 7%;
}
.box520-body-right{
    width: 50%;
    height: 100%;
    margin-right: 2%;
    /* sbackground-color:black; */
}
.box520-body-left>div:first-child{
    font-size: 16px;
    font-weight: bolder;
}
.box520-body-left>div:nth-child(2){
    font-size: 14px;
    color: #333;
}
.box520-body-left>div:last-child{
    margin-top: 9px;
    font-size: 16px;
    font-weight: bolder;
    color: #ff734c;
}
.box520-body-right>img{
    width: 100%;
    height: 100%;
}
.product-title{
    width: 100%;
    height: 35px;
    /* text-align: center; */
    font-size: 16px;
    padding-top: 15px;
    font-weight: bolder;
    /* background-color: bisque; */
}
.product-body{
    width: 100%;
    /* margin:   auto; */
}
.product-cart{
    width: 95%;
    margin-left:2.5% ;
    margin-bottom: 18px;
    box-shadow: 0 3px 14px 1px #555;
    height: 200px;
    border-radius: 4px;
    /* background-color: chocolate; */
}
.product-cart .product-img{
    width: 50%;
    float: left;
    height: 100%;
}
.product-cart .product-img img{
    width: 100%;
    height: 100%;
}
.product-cart .product-decs{
    float: left;
    width: 50%;
    height: 100%;
    text-align: left;
    box-sizing: border-box;
    font-weight: bolder;
    font-size: 16px;
    padding:20px 0 20px 20px;
    overflow: hidden;
}
.product-cart .product-decs> p:nth-child(2){
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.product-cart .product-decs .dd{
    height:20px ;
    margin:10px 0;
    padding-left: 2px;
    font-size: 12px;
    width: 70px;
    color: #ff734c;
    border:1px solid #ff734c;
    border-radius: 10px;

}
.product-cart .product-decs .dd p{
    line-height: 20px;
}
.product-cart .product-decs .bottom{
    display: flex;
    justify-content: space-around;
    margin-top:20px;
}
.product-cart .product-decs  .bottom .price{
    
    color: #ff734c;
}
.product-cart .product-decs  .bottom .price p:nth-child(2){
    font-size: 12px;
    color:#555;
}
.product-cart .product-decs .biaoqian{
    font-size: 14px;
}
.product-cart .product-decs  .bottom .cart-icon{
    width: 30px;
    height: 30px;
}
.yinying{
    width:100%;
    height: 12px;
    background-color: #dedede;
}
.product-more{
    margin: 20px 0;
}
.product-more button{
    width: 100px;
    height: 30px;
    border:1px solid #000;
    border-radius: 2px;
    background-color: #fff;
}
</style>



