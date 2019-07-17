<style>
 .container,
 .editor{
     height: 100%;
 }
 .editor{
     width:90%;
     margin: auto;
 }
 .item{
     margin-left: 30px;
     float: right;
 }

</style>
<template>
    <el-container class="container">
   
        <el-main>
            <mavon-editor class="editor"  :toolbarsFlag='false'  :subfield='false' defaultOpen="preview" :ishljs = "true" v-model="notebook"/>
        </el-main> 
        <el-footer height="50px">
            <el-badge   :value="12" class="item">
                <el-button size="small" >收藏</el-button>
            </el-badge>
            <el-badge    :value="12" class="item">
                <el-button size="small" >点赞</el-button>
            </el-badge>
            <el-badge    :value="12" class="item">
                <el-tag  >评论</el-tag>
            </el-badge>
        </el-footer>

    </el-container>
    
</template>
<script>
export default {
   prop:[],
   data() {
       return {
           notebook:'#### haha',
       }
   },
}
</script>
