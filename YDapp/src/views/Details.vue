<template>
  <div>
    <mt-header title="商品详情" fixed >
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="de-pic">
      <img :src="data.Imag" alt="">
    </div>
    <div class="de-desc">
      <p class="text">{{data.Cpmc}}</p>
      <p class="text-ad">经典爆款 年销售冠军</p>
      <div class="text-pn">
        <span>￥{{data.Price}}</span>
        <span>已售{{data.Sales}}件</span>
      </div>
    </div>
    <div class="de-desc deli">
      <div>
        <span>花语</span>
      </div>
      <div>
        <span>你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。</span>
      </div>
    </div>
    <div class="de-desc deli2">
      <div>
        <span>花材</span>
      </div>
      <div>
        <span>{{data.Instro}}</span>
      </div>
    </div>
    <div class="boot">
      
      <div class="cart">
        <span>加入购物车</span>
      </div>
      
    </div>
    <div class="eval">
      <div class="eval-header">
        <span>订单评价</span>
        <span>最近已有312条评论</span>
      </div>
      <div class="eval-item">
        <div class="eval-top">
          <img src="../assets/index/kicon3.jpg" alt="">
          <span>小小</span>
        </div>
        <div style="margin-top:10px">
          <span>喧哗杀大龙肯德基爱丽丝</span>
        </div>
        <div>
            <img style="width:80px;height:80px;margin:15px 0" src="../assets/index/kicon3.jpg" alt="">
        </div>
      </div>
      <div class="eval-item">
        <div class="eval-top">
          <img src="../assets/index/kicon3.jpg" alt="">
          <span>小小</span>
        </div>
        <div style="margin-top:10px">
          <span>喧哗杀大龙肯德基爱丽丝</span>
        </div>
        <div>
            <img style="width:80px;height:80px;margin:15px 0" src="../assets/index/kicon3.jpg" alt="">
        </div>
      </div>
      <div class="eval-item">
        <div class="eval-top">
          <img src="../assets/index/kicon3.jpg" alt="">
          <span>小小</span>
        </div>
        <div style="margin-top:10px">
          <span>喧哗杀大龙肯德基爱丽丝</span>
        </div>
        <div>
            <img style="width:80px;height:80px;margin:15px 0" src="../assets/index/kicon3.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      data:[]
    }
  },
  mounted() {
    var id = this.$route.params.id;
        // console.log( this.$route.params.id);
    this.axios.get('/details/'+id).then(res=>{
      var data=res.data.result[0];
      data.Imag=require(`../assets/images/img/${data.Imag}`);
      this.data=data;
      console.log(this.data);
    });
  },
}
</script>
<style  scoped>
body{
  margin: 0;
}
.mint-header{
    color: black;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    font-size: 16px;
    font-weight: bolder; 
}
.de-pic{
  margin-top: 40px;
  width: 100%;
  height: 344px;
  overflow: hidden;
  border-bottom:1px solid lightslategray;
}
.de-desc{
  text-align: left;
  padding: 15px 15px;
}
.de-desc > .text{
  font-size: 15px;
  font-weight: bolder;
  margin-bottom: 2px;
}
.de-desc > .text-ad{
  margin-top: 9px;
    font-size: 14px;
    font-weight: bolder;
    color: #ff734c;
}
.de-desc>.text-pn{
  display: flex;
  justify-content: space-between;
  padding-top: 17px;
}
.de-desc>.text-pn>span:first-child{
  font-size: 20px;
    font-weight: bolder;
    color: #ff734c;
}
.de-desc>.text-pn>span:last-child{
  font-weight: bold;
  font-size: 14px;
}
.deli{
  border-top: 7px solid rgb(243, 235, 235);
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(243, 235, 235);;
}
.deli>div:first-child{
  width: 50px;
}
.deli2{
  /* border-top: 7px solid rgb(243, 235, 235); */
  display: flex;
  justify-content: space-between;
  border-bottom: 7px solid rgb(243, 235, 235);
  
}
.deli2>div:first-child{
  width: 50px;
}

.cart{
  float: right;
  width: 100px;
  height: 50px;
  background-color:#ff734c;
  
}
.cart span{
 line-height: 50px;
 font-size: 16px;
 color: #fff;
}
.boot{
  border-bottom: 7px solid rgb(243, 235, 235);
  height: 50px;
  width: 100%;
}
.eval>.eval-header{
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(243, 235, 235);;
}
.eval>.eval-header>span:first-child{
  font-size: 14px;
}
.eval-item{
  padding: 10px 15px;
  text-align: left;
  border-bottom: 1px solid rgb(243, 235, 235);;

}
.eval-item>.eval-top{
  display:flex;
  align-items: center;
}
.eval-item>.eval-top>img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px; 
}

</style>