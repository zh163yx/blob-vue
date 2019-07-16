<style>
/* pageFullScreen在index.css */
 .loginCard{
     width: 300px;
     margin: auto;
 }
</style>
<template>
 <transition name="el-zoom-in-center">
    <el-card class="loginCard" v-show="isShow" :body-style="{ padding: '15px' }">
        <div slot="header">
            <span>登录</span>
        </div>
        <el-button type="text" @click="toRegister">注册</el-button>
        
    </el-card>
 </transition>
</template>
<script>
export default {
   prop:[],
   data() {
       return {
           isShow:false,//显示消失的动画标志
       }
   },
   methods: {
       toRegister() {
           this.isShow = false;
           this.$router.push({name:'Register'});
       }
   },
   mounted () {
       this.isShow = true;
   },
}
</script>
