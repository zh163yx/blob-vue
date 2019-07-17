<style>
/* pageFullScreen在index.css */
 .card{
     width:100%;
     height: 300px;
     margin-bottom: 20px;
 }
.table{
    overflow-x: hidden;
    height: 250px;
}
.scrollbar {
    height: 100%; 
     overflow-x: hidden;
}
.container{
   
}
</style>
<template>
   <el-container class="container"> 
         
        <el-header height="30">
            <!-- Header content -->
        </el-header>
        <el-scrollbar class="scrollbar">
            <el-main class="main"> 
                <el-card class="card" :body-style="{ padding: '10px' }">
                    <div slot="header">
                        <span>我的账号</span>
                    </div>
                    <!-- card body -->
                    <div>  
                        <el-form  ref="form" label-width="80px"> 
                            <el-form-item label="用户名" style="width:100px">
                                <el-input readonly="true"></el-input>
                            </el-form-item>
                            <el-form-item label="修改密码" style="width:100px">
                                <el-input  placeholder="请输入原密码"></el-input>
                                <el-input  placeholder="请输入新密码"></el-input>
                                <el-button type="success" @click="updatePass">确定</el-button>
                            </el-form-item>
                            <el-form-item label="邮箱" style="width:100px">
                                <el-input readonly="true"></el-input>
                            </el-form-item>
                        </el-form>
                        
                        
                        
                    </div> 
                </el-card>
                <el-card class="card" :body-style="{ padding: '10px' }">
                    <div slot="header">
                        <span>我的Blog</span>
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
   </el-container>
   
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
          
       }
   },
}
</script>
