<style>
/* pageFullScreen在index.css */
 .uCard,.bCard{
     width:100%; 
     margin-bottom: 20px;
 }
 .uCard{
     height: 200px;
 }
 .bCard{
     height: 300px;
 }
.table{
    overflow-x: hidden;
    height: 250px;
}
.scrollbar,.main {
    height: 100%; 
    overflow-x: hidden;
} 
.firstScrollbar > .el-scrollbar__wrap:first-of-type{
    overflow-x: hidden;
}
 
</style>
<template> 
    <el-scrollbar class="scrollbar firstScrollbar">
        <el-main class="main"> 
            <el-card class="uCard" :body-style="{ padding: '10px' }">
                <div slot="header">
                    <span>我的账号</span>
                </div>
                <!-- card body -->
                <el-form :inline="true"  ref="form" label-width="80px"> 
                    <el-form-item  label="用户名"  >
                        <el-input :readonly='true'></el-input>
                    </el-form-item>
                     <el-form-item label="邮箱"  >
                        <el-input :readonly='true'></el-input>
                    </el-form-item>
                    <el-form-item label="修改密码"  >
                        <el-input  placeholder="请输入原密码"></el-input>
                        <el-input  placeholder="请输入新密码"></el-input>
                        <el-button type="success" @click="updatePass">确定</el-button>
                    </el-form-item>
                   
                </el-form> 
            </el-card>
            <el-card class="bCard" :body-style="{ padding: '10px' }">
                <div slot="header">
                    <span>我的Blog</span>
                     <el-button style="float: right; padding: 3px 0" type="text" @click="writeBlog">发布Blog</el-button>
                </div>
                <!-- card body -->
                <div class="table">
                    <el-scrollbar class="scrollbar">
                        <el-table  :data="myBlog" :show-header='false' v-infinite-scroll="getBlog" border stripe>
                            <el-table-column prop="time"> </el-table-column>
                            <el-table-column prop="title"> </el-table-column>
                        </el-table>
                    </el-scrollbar>  
                </div>
                
            </el-card>
        </el-main> 
    </el-scrollbar>   
</template>
<script>
export default {
   prop:[],
   data() {
       return {
           myBlog:[{
               time:'2019/07/17',
               title:'test',
               link:'ss'
           }],
       }
   },
   methods: {
       getBlog() {
           console.log('s')
           this.myBlog.push({time:'2019/07/01',title:'test',link:'ss'})
          
       },
       updatePass(){

       },
       writeBlog(){
           this.$router.push({name:'WBlog'});
       }
   },
}
</script>
