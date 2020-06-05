<template>
    <div>
        <mt-header fixed title="购物车"></mt-header>
        <div class="cart-product">
            <div class="cart-list">
                <div class="cart-item" v-for="(item,index) of data" :key="index">
                    <div class="cart-img" @click="Tdetails(item.fid)">
                        <img :src="item.Imag" alt="">
                    </div>
                    <div class="cart-desc">
                        <p @click="Tdetails(item.fid)" class="cart-desc-title">{{item.Cpmc}}</p>
                        <div class="cart-desc-num">
                            <span>数量</span>
                            <a @click="minusCartUpdate($store.state.id,item.count,item.fid)" href="java:script;">-</a>
                            <span>{{item.count}}</span>
                            <a @click="AddCartUpdate($store.state.id,item.count,item.fid)" href="java:script;">+</a>
                        </div>
                        <p class="price">￥{{item.Price}}</p>
                        <a href="java:script;" class="del">
                            <img @click="cartDel($store.state.id,item.fid)" src="../assets/index/delete.png" alt="">
                        </a>
                    </div>
                </div>
                
            </div>
           
        </div>
        <div class="cart-sum">
            <span>合计:</span>
            <span class="sum">￥{{this.total}}</span>
            <button>结算</button>
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
             active:'cart',
             data:[],
             total:0,
             cartCount:0,
            //  timeBool:true,
            //  timer:[]
       }
   },
   methods:{
       cartDel(uid,fid){
           console.log(uid,fid)
           
           this.axios.post('/cartDel?','uid='+uid+'&fid='+fid).then(res=>{
               
               if(res.data.affectedRows>0){
                   this.cartList();
               }
           })
       },
       cartList(){
           this.axios.get('/cartlist?uid='+this.$store.state.id).then((res)=>{
           console.log(res.data.result);
           this.total=0;
           res.data.result.map((item,index)=>{
               item.Imag=require('../assets/images/img/'+item.Imag);
               this.total+=item.Price*item.count;
           })
           this.data=res.data.result;
          })
       },
       cartUpdate(uid,count,fid){
            this.axios.post('/cartUpdate?','uid='+uid+'&count='+count+'&fid='+fid).then(res=>{
                        if(res.data.affectedRows>0){
                            this.cartList();
                        }
                    })
       },
       AddCartUpdate(uid,count,fid){
           
            count++;
            this.cartUpdate(uid,count,fid); 
            this.timeBool==true
            // clearTimeout(this.timer);
       },
       minusCartUpdate(uid,count,fid){
            if(count==1){
                this.cartDel(uid,fid);
            }else{
                count--;
                this.cartUpdate(uid,count,fid);  
            }   
            this.timeBool==true;
            // clearTimeout(this.timer);
       },
       Tdetails(Fid){
        this.$router.push('./details/'+Fid)
      },
       

   },
   mounted(){
       this.cartList();
   }
   
}
</script>
<style  scoped>
.mint-header{
    color: black;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    font-size: 16px;
    font-weight: bolder; 
}

.cart-product{
    width: 100%;
    margin-top: 40px;
    margin-bottom: 100px;
    background-color: #dedede;
}
.cart-list{
    background-color: #fff;
}
.cart-item{
    padding: 20px;
    border-bottom: 1px solid #ddd ;
    display: flex;
}
.cart-item .cart-img{
    width: 140px;
    height: 140px;
    /* border: 1px solid #ddd; */
    overflow: hidden;
}
.cart-item .cart-img img{
    width: 100%;
    height: 100%;
   
}
.cart-desc{
    width: 170px;
    margin-left: 20px;
    text-align: left;
    position: relative;
}
.cart-desc-title{
    font-size: 16px;
    font-weight: bolder;
}
.cart-desc-num{
    
    margin-top:60px ;
    font-size: 15px;
    font-weight: bolder;
    
}
.cart-desc-num span:first-child{
    margin-right: 10px;
}
.cart-desc-num a{
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    text-decoration: none;
    border: 1px solid #ddd;
    color: black;
}
.cart-desc-num span:nth-child(3){
    display: inline-block;
    width: 40px;
    height: 20px;
    line-height: 20px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    text-align: center;
}
.cart-desc .price{
    margin-top: 20px;
    color: #ff734c;
    font-size: 18px;
    font-weight: bolder;
}
.cart-desc .del{
    position: absolute;
    top: 0px;
    right: 10px;
}
.cart-sum{
    background-color: #fff;
    position: fixed;
    bottom: 50px;
    text-align: left;
    width: 100%;
    height: 52px;
    padding:0 12px;
    border: 1px solid #dee;
}
.cart-sum span{
    font-size: 18px;
    line-height: 50px;
    font-weight: bolder;
}
.cart-sum span:nth-child(2){
    color: #ff734c;
}
.cart-sum button{
    outline: 0;
    width: 130px;
    height: 50px;
    color: #fff;
    background-color: #ff734c ;
    text-align: center;
    font-size: 18px;
    float: right;
}
</style>

