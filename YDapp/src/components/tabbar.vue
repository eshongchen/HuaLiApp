<template>
    <div>
       
        
        <!-- 底部导航 -->
        <mt-tabbar fixed v-model="selected" class="tabbar">
            <mt-tab-item  id="home">
                <img slot="icon"  v-if="selected=='home'" src="../assets/index/home_active.png">
                <img slot="icon"  v-else src="../assets/index/home.png">
                        首页
            </mt-tab-item>
            <mt-tab-item class="mt-tab-icon" id="kind">
                <img slot="icon"  v-if="selected=='kind'" src="../assets/index/kind_active.png">
                <img slot="icon"  v-else src="../assets/index/kind.png">
                    分类
            </mt-tab-item>
            <mt-tab-item  id="cart">
                <img slot="icon"  v-if="selected=='cart'" src="../assets/index/cart_active.png">
                <img slot="icon"  v-else src="../assets/index/cart.png">                    
                        购物车
            </mt-tab-item>
            <mt-tab-item  id="me">
                <img slot="icon"  v-if="selected=='me'" src="../assets/index/me_active.png">
                <img slot="icon"  v-else src="../assets/index/me.png">                    
                        我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    props:['active'],
    data(){
        return{
            selected:this.active,
        }
    },
    watch:{
        selected(value){
            if(value=='home'){
                this.$router.push('/');
            }else if(value=="me"){
                this.$router.push('/me')
            }else if(value=="cart"){
                this.$router.push('/cart')
            }else if(value=="kind"){
                this.$router.push('/kind')
            }
            // console.log(value);
        }
    }
}
</script>
<style scoped>
.tabbar{
   
    background-color:#efefef;
}


.mint-tabbar>.mint-tab-item.is-selected {
    background-color:#efefef;
    
    color: #ff734c;
}

</style>


