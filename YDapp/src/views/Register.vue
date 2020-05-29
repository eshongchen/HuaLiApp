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
            <input type="text" placeholder="请输入手机号" v-model="uname">
            <p>验证码</p>
            <div>
                <input type="text" placeholder="请输入验证码" v-model="code"><span @click="getCode">获取验证码</span>
            </div>
            <p>密码</p>
            <input type="text" placeholder="请输入密码" v-model="upwd">
        </div>
        <div >
            <mt-button class="btn" type="danger" size="normal" @click="register">注册</mt-button>
        </div>
        <div class="login">
            <router-link to="/login">
                <span>账号密码登录</span>
            </router-link>
        </div>
        <div class="qtlogin">
            <div class="qtlogin-item">
                <img src="../assets/index/weixin.png" alt=""><span >微信</span>
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
export default {
    data(){
        return {
            uname:'',
            upwd:'',
            code:''
        }
    },
    methods:{
        register(){
            var regExp=new RegExp(/^1[3-9]\d{9}$/) ;
           if(!regExp.test(this.uname)){
               this.$toast('手机号格式不正确');
               return false;
           }else if(this.upwd.length<6||this.upwd.length>12){
               this.$toast('密码应为6-12位');
           }else if(this.code!=''){
                this.axios.post('/register?','uname='+this.uname+'&upwd='+this.upwd).then(res=>{
                  var code=res.data.code;
                  if(code==0){
                    this.$toast('注册失败，因为用户名已存在!');
                    this.uname='';
                    this.upwd='';
                  }else if(code==1){
                    this.$toast('注册成功');
                    this.uname='';
                    this.upwd='';
                    this.code='';
                  }
                });
           }
        }
        ,
        getCode(){
            this.code=Math.floor(Math.random()*10000+1000);
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
.inputBox>p,.inputBox>div{
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
.inputBox>div>input{
    width: 70%;
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
.login {
    margin: 30px;
    font-size: 18px;
     

}
.login >a{
    color: #777;
    text-decoration: none;

}
.qtlogin{
    margin:45px 20px 0 20px;
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
