<template>
<el-container>
    <el-aside width="200px">
        <!-- Aside content -->
    </el-aside>
    <el-container>
        <el-header height="">
           Hello
           <el-input   placeholder="网址" />
           <el-button type="primary" @click="getByUrl"></el-button>
           
        </el-header>
        <el-main height="">
            <!-- Main content -->
        </el-main>
    </el-container>
</el-container>
 
</template>

<script>
export default {
    name:"TXT",
    data() {
        return { 
        }
    },
    methods: {
        getByUrl(){
            this.$axios({
                method:"get",
                url:"https://www.baidu.com"

            }).then(res=>{
                console.log(res.data)
            }).catch(error=>{

            });
        }
    }
}
</script>

<style>

</style>