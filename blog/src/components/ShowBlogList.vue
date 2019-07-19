<style>
/* pageFullScreen在index.css */
 .selectForm{
     text-align: right;
 }

</style>
<template>
   <el-container>  
        <el-header height="">
           <el-form :inline="true" :model="formData" class="demo-form-inline selectForm">
            
            <el-form-item label="类型">
                <el-select v-model="formData.type"  placeholder="类型">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="时间">
                <el-date-picker
                v-model="formData.time"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            </el-form>
        </el-header>
        <el-main >
            <el-scrollbar class="scrollbar">
                <el-table  :data="blogData" :show-header='false'  border stripe>
                    <el-table-column prop="time"> </el-table-column>
                    <el-table-column prop="title"> </el-table-column>
                </el-table>
            </el-scrollbar>  
        </el-main> 
   </el-container>
   
</template>
<script>
export default {
   prop:[],
   data() {
       return {
           pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
            blogData:[],
            formData:{
                type:null,
                time:null,
                endTime:null,
            },
       }
   },
   methods: {
       onSubmit() {
           console.log(this.formData)
       }
   },
}
</script>
