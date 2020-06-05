<template>
    <div>
        <!-- 搜索栏 -->
        <div class="search">
            <!-- <span><img src="../assets/index/delete.png" alt=""></span> -->
            <input type="text"  placeholder="搜索" v-model="keyword" >
            <button @click="search()">搜索</button>
        </div>
        <!-- 分类栏 -->
        <div class="kiddL">
            <div class="nav">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">热门推荐</mt-tab-item>
                    <mt-tab-item id="2">鲜花</mt-tab-item>
                    <mt-tab-item id="3">永生花</mt-tab-item>
                    <mt-tab-item id="4">特色礼品</mt-tab-item>
                    <mt-tab-item id="5">礼栏</mt-tab-item>
                    <mt-tab-item id="6">绿植花卉</mt-tab-item>
                </mt-navbar>
            </div>
            <div class="page">
                <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                        <div class="label-img">
                           <img width="100%" src="../assets/index/kind1.jpg" alt="">
                        </div>
                        <div class="page-radius">
                            <div  class="item">
                                <img  src="../assets/index/kicon3.jpg" alt="">
                                <p>送恋人鲜花</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon4.jpg" alt="">
                                <p>送长辈鲜花</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon5.jpg" alt="">
                                <p>生日鲜花</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon6.jpg" alt="">
                                <p>礼盒鲜花</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon9.jpg" alt="">
                                <p>永生花</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon11.jpg" alt="">
                                <p>创意礼品</p>
                            </div>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        <div class="label-img">
                           <img width="100%" src="../assets/index/kind2.jpg" alt="">
                        </div>
                        <div class="page-radius">
                            <div class="text">
                                <p>对象</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon4.jpg" alt="">
                                <p>送女友</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon11.jpg" alt="">
                                <p>送男性</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon10.jpg" alt="">
                                <p>送长辈</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon9.jpg" alt="">
                                <p>送朋友</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon8.jpg" alt="">
                                <p>送情人</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon6.jpg" alt="">
                                <p>送亲人</p>
                            </div>
                        </div>
                        <div class="page-radius">
                            <div class="text">
                                <p>场合</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon11.jpg" alt="">
                                <p>爱情</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon3.jpg" alt="">
                                <p>生日</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon4.jpg" alt="">
                                <p>探望</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon5.jpg" alt="">
                                <p>商务</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon6.jpg" alt="">
                                <p>祝贺</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon8.jpg" alt="">
                                <p>婚庆</p>
                            </div>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="3">
                        <div class="label-img">
                           <img width="100%" src="../assets/index/kind2.jpg" alt="">
                        </div>
                        <div class="page-radius">
                            <div class="text">
                                <p>对象</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon4.jpg" alt="">
                                <p>送女友</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon11.jpg" alt="">
                                <p>送男性</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon10.jpg" alt="">
                                <p>送长辈</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon9.jpg" alt="">
                                <p>送朋友</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon8.jpg" alt="">
                                <p>送情人</p>
                            </div>
                            <div  class="item">
                                <img  src="../assets/index/kicon6.jpg" alt="">
                                <p>送亲人</p>
                            </div>
                        </div>
                        
                    </mt-tab-container-item>
                    <mt-tab-container-item id="4">
                        <div>4</div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="5">
                        <div>5</div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="6">
                        <div>6</div>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
        
        <tabbar :active="active"></tabbar>
    </div>
</template>
<script>
import tabbar from '../components/tabbar'
export default {
    components:{
        tabbar
    },
   data(){
       return{
            selected:'1',
             active:'kind',
             keyword:''
       }
   },
   methods: {
       search(){
           this.keyword=this.keyword.trim()
           if(this.keyword!=''){
               this.$router.push(`/search/${this.keyword}`)
           }
       }
   },
}
</script>
<style  scoped>
   .search{
       width: 100%;
       height: 60px;
       position: relative;
       /* background-color: bisque; */
   }
   .search input{
       outline: 0;
       width: 250px;
       margin: 5px 0;
       height: 40px;
       padding: 0  18px 0 40px;
       border-radius: 20px;
       background-color: #eee;
       box-sizing:initial;
   }
   .search button{
       outline: 0;
       width: 60px;
       margin-left: 10px;
       height: 30px;
       border-radius:15px ;
       background-color:#ff734c ;
       color: #fff;
   }
   .search::before{
       content: '';
       display: inline-block;
       background-image: url('../assets/index/search.png');
       width: 20px;
       height: 20px;
       background-repeat: no-repeat;
       position:absolute;
       top: 17px;
       left: 20px;
   }
   
   .kiddL{
       display: flex;
       
   }
   .nav{
       flex: 2;
       height: 645px;
       border-top: 1px solid #BBB;
       border-right: 1px solid #BBB;
   }
   .page{
       flex:7;
        border-top: 1px solid #BBB;
        
   }
   .mint-navbar{
       
       display: block;
   }
   .mint-navbar .mint-tab-item.is-selected {
       border: 0;
    border-left: 0.07895rem solid #ff734c ;
    color:#ff734c ;
    margin-bottom: -0.07895rem;
    }
    .page .label-img{
        padding: 7px
    }
     .page .label-img img{
     
         width: 100%;
         
     }
     .page-radius::after{
         content: '';
         display: table;
         clear:both;
     }
    .page-radius{
        width: 95%;
        margin: 2%;
        border-radius: 4px;
        padding: 2%;
        box-sizing: border-box;
        justify-content: space-around;
        box-shadow: 0 3px 14px 1px #ddd;
    }
.item{
   float: left;
   width: 33.33%;
    flex-wrap: wrap;
    
}
.item img{
    width: 50px;
    height: 50px;
    
    border-radius:50% ;
}
.item p{
    font-size: 12px;
    font-weight: bolder;
}
.page-radius .text{
    padding: 10px;
    text-align: left;
    font-size: 15px;
    font-weight: bolder;
}
</style>


