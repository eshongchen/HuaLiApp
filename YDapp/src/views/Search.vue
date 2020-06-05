<template>
  <div>
    <!-- header -->
    <mt-header title="搜索结果">
      <router-link to="/kind" slot="left">
        <mt-button  icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <ul class="S-top">
        <li><span>综合</span></li>
        <li><span>销量</span></li>
        <li><span>价格</span></li>
        <li><span>新品</span></li>
      </ul>
    </div>
    <div class="product-list">
        <div class="product-item" @click="details(item.Fid)" v-for="(item,index) of data" :key="index">
          <img :src="item.Imag" alt="">
          <div>
            <p class="desc">{{item.Instro}}</p>
            <p class="price">￥{{item.Price}}</p>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      keyword:'',
      data:[]
    }
  },
  methods:{
    details(Fid){
       this.$router.push('/details/'+Fid);
    }
  },
  mounted() {
    this.keyword =this.$route.params.key

    this.axios.get('search/'+this.keyword).then(res=>{
     for(var item of res.data){
       item.Imag=require('../assets/images/img/'+item.Imag);
      } 
      this.data=res.data;
      // console.log(this.data)
   })

  },
}
</script>
<style  scoped>
body{
  margin: 0;
  /* background-color:#111; */
}
.mint-header{
    color: black;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    font-size: 16px;
    font-weight: bolder; 
}
.S-top{
  list-style: none;
  padding: 0;
  height: 40px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
}
.S-top span{
  line-height: 40px;
  font-size: 16px;
}
.S-top span:active{
  color: #ff734c;
}
.product-list{
  display: flex;
  justify-content:space-evenly;
  width: 100%;
  background-color: rgb(242, 246, 245);
  padding-top: 7px;
  flex-flow: wrap;
  
}
.product-item{
  width: 47%;
  height: 240px;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 7px;
  border-radius: 4px;
  text-align: left;
}
.product-item img{
  width: 100%;
  height: 170px;
  
}
.product-item p{
  font-size:15px ;
  font-weight: bolder;
}
.product-item div{
  padding-left: 7px;
  overflow: hidden;
}
.product-item>div>.desc{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-item>div>.price{
  margin-top: 10px;
  color: #ff734c;
}
</style>