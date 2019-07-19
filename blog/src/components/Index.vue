<style>
/* pageFullScreen在index.css */
.main,.carousel{
    height: 100%; 
}
.image-slot > i{
    font-size: 50px; 
}
 
.el-carousel__item,.image-slot{ 
    text-align: center;
}
.el-carousel__container{ 
    height: calc(100% - 30px);
}
 
</style>
<template>
   <el-main class="main">
        <el-carousel :interval="4000" type="card" class="carousel" >
            <el-carousel-item v-for="item in imgList" :key="item">
                <el-image   :src="item" class="img medium">
                    <div slot="placeholder" class="image-slot">
                        <i class='el-icon-loading'></i>
                    </div>
                    <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </el-carousel-item>
        </el-carousel>
   </el-main>
   
</template>
<script>
export default {
   prop:[],
   data() {
       return {
           imgList:[
               'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563508072308&di=47d41f1c103d3df1ca63197bac5ef264&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2Fs8o2rulWOjG84nR9oIo%3DEa66KbDfwCzA4WxwRnDTLoWUr1534407019218compressflag.jpg',
                'http://dik.img.kttpdq.com/pic/46/32135/34d35bc48922d5c4.jpg',
                'http://dik.img.kttpdq.com/pic/47/32217/acb4fc2abcde8dd9_1366x768.jpg',
                'http://mobimg.b-cdn.net/pic/v2/gallery/preview/kino-zheleznyj_elovek_iron_man-18430.jpg'
           ]
       }
   },
}
</script>
