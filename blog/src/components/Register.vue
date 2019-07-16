<style>
/* pageFullScreen在index.css */
.cardForm{
    width: 450px;
    margin:0 auto;
} 
</style>
<template>  
 <el-collapse-transition>

    <el-card v-show="isShow"  class="cardForm" :body-style="{ padding: '5px 10px 0px 0px' }">
        <div slot="header">
            <span>注册</span>
        </div>
        <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="80px">
            <el-form-item label="邮箱" prop="email" >
                <el-input v-model="registerForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="userName">
            <el-input v-model="registerForm.userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass" >
                <el-input v-model="registerForm.pass" show-password placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input v-model="registerForm.checkPass" show-password placeholder="请再次输入密码"></el-input>
                
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="onSubmit('registerForm')">立即创建</el-button>
                <el-button @click="resetForm('registerForm')">重置</el-button>
                <el-button type="text" @click="toLogin">已有账号?点击登录</el-button>
                
            </el-form-item>
        </el-form> 
    </el-card>
</el-collapse-transition> 
        
</template>
<script>
export default {
    name:'Login',
    prop:[],
    data() {
        var validateEmail = (rule,value,callback)=>{
            if(value === ''){
                callback(new Error("邮箱不能为空"))
            }else{
                callback();
            }
        };
        var validateUserName = (rule, value,callback)=>{
            if(value === ''){
                callback(new Error("请输入用户名"))
            }else if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,}$/.test(value)){
                callback(new Error("用户名必须为4位以上的数字与字母"))
            }else{
                callback();
            }
        };
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
       var validateCheckPass=(rule,value,callback)=>{
           if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
       };
       return {
           registerForm:{
                userName:'',
                email:'',
                pass:'',
                checkPass:''
           },
           rules:{
             email:[
                    {validator:validateEmail,trigger:'blur'},
                    {type:'email',message:'邮箱格式不正确',trigger:['blur','change']}
                    ],
               userName:[{validator:validateUserName,trigger:['blur','change']} ],
               pass:[{validator:validatePass,trigger:['blur','change']} ],
               checkPass:[{validator:validatePass,trigger:['blur','change']}]
           },
           isShow:false,
       }
   },
   methods: {
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
       toLogin(){
           this.isShow = false;
            this.$router.push({name:'Login'})
       }
   },
  mounted () {
      this.isShow = true;
  },
}
</script>
