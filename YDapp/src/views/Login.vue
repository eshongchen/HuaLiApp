<template>
    <div>
        <!-- 退出 -->
        <div class="back">
            <router-link class="back-a" to="/me">
                <span>×</span>
            </router-link>
        </div>
        <div class="logo">
            <img src="../assets/index/pc_hualogo.png" alt="">
        </div>
        <div class="inputBox">
            <p>手机号</p>
            <input type="text" v-model="uname" placeholder="请输入手机号">
            <p>密码</p>
            <input type="text" v-model="upwd" placeholder="请输入密码">
        </div>
        <div >
            <mt-button class="btn" @click="login" type="danger" size="normal">登录</mt-button>
        </div>
        <div class="register">
            <router-link to="/register">
                <span>手机号注册</span>
            </router-link>
        </div>
        <div class="qtlogin">
            <div class="qtlogin-item">
                <img src="../assets/index/weixin.png" alt=""><span>微信</span>
            </div>
            <div class="qtlogin-item">
                <img src="../assets/index/QQ.png" alt=""><span>QQ</span>
            </div>
            <div class="qtlogin-item">
                <img src="../assets/index/zhifubao.png" alt=""><span>支付宝</span>
            </div>
            <div class="qtlogin-item">
                <img src="../assets/index/email.png" alt=""><span>邮箱注册</span>
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            uname:'',
            upwd:''
        }
    },
    methods:{
        ...mapMutations({
            Logined:'logined'
        }),
        login(){
           var regExp=new RegExp(/^1[3-9]\d{9}$/) ;
           if(!regExp.test(this.uname)){
               this.$toast('手机号格式不正确');
               return false;
           }else if(this.upwd.length<6||this.upwd.length>12){
               this.$toast('密码应为6-12位');
           }else {
               console.log(this.uname,this.upwd)
               this.axios.post('/login?','uname='+this.uname+'&upwd='+this.upwd).then((res)=>{
                //    console.log(res);res.data.result
                if(res.data.code==1){
                    // console.log(res.data.result[0])
                    this.Logined({'id':res.data.result[0].uid,'uname':res.data.result[0].uname})
                    sessionStorage.setItem('id',res.data.result[0].uid);
                    sessionStorage.setItem('uname',res.data.result[0].uname);
                    sessionStorage.setItem('isLogin',true);
                    this.$router.push('/me');
                }else{
                    this.$toast('用户名或密码错误');
                }
                    
               })
           }
        }
    }

}
</script>
<style  scoped>
.back{
    margin: 30px 20px;
    font-size: 30px ;
    text-align:left;
    text-decoration: none;
}
.back-a{
    text-decoration: none;
}
.inputBox{
    margin-top: 40px;
    text-align: left;
    padding:0 30px 20px 30px;
}
.inputBox>p{
    font-size: 17px;
    font-weight: bolder;
    display: block;
    margin: 20px 0;
}
.inputBox>input{
    width: 100%;
    height: 40px;
    outline: none;
    border-bottom: 1px solid rgba(200, 200, 200, 0.7);
    font-size: 17px;
}

.btn{
    width: 80%;
    height: 50px;
    background-color: #ff734c;
    border-radius: 25px;
}
.register {
    margin: 30px;
    font-size: 18px;
}
.register >a{
    color: #777;
    text-decoration: none;

}
.qtlogin{
    margin:150px 20px 0 20px;
    display: flex;
    justify-content: space-around;
    height: 24px;
   
}
.qtlogin-item{
    display: flex;
     height: 24px;
    
}
.qtlogin-item>span{
    /* display: inline !important; */
    font-size: 14px;
    line-height: 24px;
}
.qtlogin-item>img{ 
    width: 24px;  
    height: 24px;
   
}
</style>
