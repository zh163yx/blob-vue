<style> 
    .wbCon,
    .editor{
        height: 100%;    
    }
    .btn{
        float: right;
        margin-right: 20px;
    }
</style>
<template>
    <el-container class="wbCon">
         <el-main>
            <mavon-editor class="editor"  :ishljs = "true" :toolbars="markdownOption" ref=md @imgAdd="$imgAdd" @imgDel="$imgDel" v-model="notebook"/>
         </el-main>
         <el-footer height="40px">
            <el-button class="btn" type="success" @click="dialogShow = true">发布</el-button>
            <el-button class="btn" type="info" @click="save">保存</el-button>
         </el-footer>
         <el-dialog :close-on-click-modal='false' width="350px" :visible.sync="dialogShow">
            <el-form> 
                <el-form-item label="发布类型" label-width="80px">
                <el-select v-model="blogData" placeholder="选择类型" style="width:120px">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select> 
                <el-button type="primary" @click="submit">确 定</el-button>
                </el-form-item>
             
            </el-form>
        </el-dialog>
    </el-container>
        
      
</template>
<script>

export default {
   prop:[],
   data() {
       return {
            markdownOption: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: false, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: true, // 预览
            },
            notebook: "#### how to use mavonEditor in nuxt.js",
            dialogShow:false,
            blogData:null,
       
       }
   },
   methods: {
      // 绑定@imgAdd event
        $imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           formdata.append('image', $file);
           this.$axios({
               url: 'http://localhost:8000',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((url) => {
               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
               /**
               * $vm 指为mavonEditor实例，可以通过如下两种方式获取
               * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
               * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
               */
              console.log(pos,url)
               $vm.$img2Url(pos, url);
           })
        },
        $imgDel(pos,$file){
            console.log(pos,$file)
        },
        submit(){
            console.log(this.notebook)
            this.dialogShow = false;
        },
        save(){
            console.log('ss')
        }
   },
}
</script>
