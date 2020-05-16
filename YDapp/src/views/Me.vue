<template>
    <div>
        <div>me</div>
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


