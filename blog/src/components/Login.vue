<style>
/* pageFullScreen在index.css */
 .loginCard{
     width: 500px;
     margin: auto;
 }
</style>
<template>
 <transition name="el-zoom-in-center">
    <el-card class="loginCard" v-show="isShow" :body-style="{ padding: '15px' }">
        <div slot="header">
            <span>登录</span>
        </div>
        <el-form :model="loginForm" ref="loginForm" status-icon :rules="rulers" label-width="80px">
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="loginForm.email" placeholder="请使用邮箱登录"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="loginForm.pass" show-password placeholder="请输入密码" ></el-input>
                
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="onSubmit('loginForm')">立即创建</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
                <el-button type="text" @click="toRegister">没有账号?点击注册</el-button>
            </el-form-item>
        </el-form>
        
        
    </el-card>
 </transition>
</template>
<script>
export default {
   prop:[],
   data() {
        var validatePass = (rule,value,callback)=>{
            if(value === ''){
                callback(new Error("请输入密码"))
            }else if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(value)){
                callback(new Error("密码必须为6位以上的数字与字母"))
            }else if(this.registerForm.checkPass !== ''){
                 this.$refs.registerForm.checkPass.validateField('checkPass')
            }else{
                callback();
            }
        };
        var validateEmail = (rule,value,callback)=>{
            if(value === ''){
                callback(new Error("邮箱不能为空"))
            }else{
                callback();
            }
        }
       return {
           isShow:false,//显示消失的动画标志
           loginForm:{
               email:'',
               pass:'',
           },
           rulers:{
               email:[
                    {validator:validateEmail,trigger:'blur'},
                    {type:'email',message:'邮箱格式不正确',trigger:['blur','change']}
                ],
                pass:[{validator:validatePass,trigger:['blur','change']}]
           }
       }
   },
   methods: {
       toRegister() {
           this.isShow = false;
           this.$router.push({name:'Register'});
       },
        onSubmit(form) {
            this.$refs[form].validate((validate)=>{
                if(validate){

                }else{
                    return false;
                }
            })
       },
       resetForm(form){
           this.$refs[form].resetFields();
       },
   },
   mounted () {
       this.isShow = true;
   },
}
</script>
