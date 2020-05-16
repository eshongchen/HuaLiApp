<template>
    <div>
        <div>cart</div>
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
       }
   }
   
}
</script>


