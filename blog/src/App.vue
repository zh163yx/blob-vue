
<style>
html,
body,
.father,
.container {
    height: 100%;
    margin: 0px;
}
.headerAside{
    width: 100px !important;
}
.header{
    height: 150px;
    width: calc(100% - 100px);
}
</style>

<template>
<div class="father" @click="ShowAnimate">
    <el-container  class="container"  direction='vertical'>
        <el-container direction='horizontal'>
            <el-header class="header" >
                <el-menu mode="horizontal" default-active="0" @select="handleSelect">
                    <el-menu-item index="0">
                        首页
                    </el-menu-item>
                    <el-menu-item index="1">
                        首页
                    </el-menu-item>
                    <el-menu-item index="2">
                        首页
                    </el-menu-item>
                    <el-menu-item index="3">
                        首页
                    </el-menu-item>
                </el-menu>

            </el-header>
            <el-aside class="headerAside">
                Aside content
            </el-aside>

        </el-container>
 
        <el-main height="">
            <router-view />
        </el-main> 
    </el-container>
</div>
</template>

<script>
export default {
    name: "App",
    methods: {
        ShowAnimate:function(e) {
            var i = $("<b></b>").text("✎"); //单数显示这个
            var x = e.pageX,
                y = e.pageY; //获取鼠标点击的位置坐标
            var red = Math.ceil(Math.random() * 255);
            var green = Math.ceil(Math.random() * 255);
            var cyan = Math.ceil(Math.random() * 255);
            var color = "rgb(" + red + "," + green + "," + cyan + ")";
            i.css({
                "z-index": 9999,
                top: y - 20,
                left: x,
                position: "absolute",
                color: color,
                "font-size": 20
            });
            $("body").append(i);
            i.animate(
                {
                    top: y - 180,
                    opacity: 0
                },
                1500,
                function() {
                    i.remove();
                }
            ); //设置动画
        },
        handleSelect(key, keyPath) {
            console.log(key);
            console.log(keyPath);
        }
    }
};
</script>
