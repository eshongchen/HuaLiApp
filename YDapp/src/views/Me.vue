<template>
    <div >
        <div class="Use">
            <div class="f1">
                <div class="notLogin">
                    <p>欢迎来到花礼网</p>
                    <router-link to="/login">
                        <button>登录/注册</button>
                    </router-link>
                    
                </div>
            </div>
            <div class="card f2">
                <p class="title">我的订单</p>
                <div class="bod">
                    <div class="item">
                        <img src="../assets/index/icon1-pay.png" alt="">
                        <p>待付款</p>
                    </div>
                    <div class="item">
                        <img src="../assets/index/icon2-car.png" alt="">
                        <p>今日配送</p>
                    </div>
                    <div class="item">
                        <img src="../assets/index/icon3-evalu.png" alt="">
                        <p>待评价</p>
                    </div>
                    
                </div>
            </div>
            <div class="card f3">
                <div class="bod">
                    <div class="item">
                        <img src="../assets/index/icon4-er.png" alt="">
                        <p>联系客服</p>
                    </div>
                    <div class="item">
                        <img src="../assets/index/icon5-help.png" alt="">
                        <p>帮助中心</p>
                    </div>
                    <div class="item">
                        <img src="../assets/index/icon6-about.png" alt="">
                        <p>关于花礼</p>
                    </div>
                    <div class="item">
                        <img src="../assets/index/icon7-setting.png" alt="">
                        <p>设置</p>
                    </div>
                </div>
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
             active:'me',
       }
   }
   
}
</script>
<style  scoped>
    .Use{   
        position: relative;
    }
    .f1{
        color: #fff;
        font-size: 20px;
        /* font-weight: bolder; */
        width: 100%;
        background-color: #ff734c;
        background-repeat: no-repeat;
        height: 200px;
        position: relative;
    }
    .f1  .notLogin{
        border: 1 solid #f00;
        width: 200px;
        height: 100px;
        top: 20%;
        left: 50%;
        margin-left: -100px;
        position: absolute;
    }
    .f1 button{
        outline: 0;
        background-color:#fff;
        font-size: 18px;
        font-weight: bolder;
        width: 150px;
        height: 50px;
        margin-top: 20px;
        border-radius: 25px;
    }
    .f2{
        position:absolute;
        width: 95%;
        margin: 0 2.5%;
        height: 130px;
        margin-top: -20px;
        background-color: white;
        z-index: 1;
        padding: 10px;
        text-align: left;
    }
    .f2 .title{
        font-size: 17px;
        font-weight: bolder;
    }
    .f2 .bod{
        padding-top: 20px;
        margin-top:10px;
        width: 100%;
        border-top:1px solid #ddd;
        position: relative;
        justify-content: space-around;
    }
    .f2 .bod .item{
        float: left;
        text-align: center;
        width: 33.33%;
    }   
    .card{
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 2%;
        box-sizing: border-box;
        justify-content: space-around;
        float: left;
        /* box-shadow: 0 3px 14px 1px #ddd; */
    }
    .f3{
        width: 95%;
        margin: 130px  2.5% 0 2.5%;
        height: 100px;
        background-color: white;
    }
    .f3 .bod{
        padding-top: 20px;
        width: 100%;
        position: relative;
        justify-content: space-around;
    }
    .f3 .bod .item{
        float: left;
        text-align: center;
        width: 25%;
    } 
</style>

