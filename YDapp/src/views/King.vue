<template>
    <div>
        <div>kind</div>
        
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
       }
   }
   
}
</script>
<style  scoped>
   
</style>


