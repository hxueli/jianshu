<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="block">
      <!--<span class="demonstration">默认 Hover 指示器触发</span>-->
      <el-carousel height="200px">
        <el-carousel-item v-for="item in 2" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <hr>
    <span class="tag-main">
    <el-tag><img src="../assets/c3.png" width="20px" height="20px"/>标签一</el-tag>
    <el-tag><img src="../assets/c3.png" width="20px" height="20px"/>标签一</el-tag>
    <el-tag><img src="../assets/c3.png" width="20px" height="20px"/>标签一</el-tag><br>
    <el-tag><img src="../assets/c3.png" width="20px" height="20px"/>标签一</el-tag>
    <el-tag><img src="../assets/c3.png" width="20px" height="20px"/>标签一</el-tag>
      </span>
    <br>
    <!--<h1>home</h1>-->
  <el-tag><router-link id="Carousel" to="/Home/Carousel"><a>Carousel</a></router-link></el-tag>
    <el-tag><router-link id="One" to="/Home/One">One</router-link></el-tag>
      <el-tag><router-link id="Two" to="/Home/Two">Two</router-link></el-tag>
  <hr>
  <router-view></router-view>
  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #3f3f3f;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .tag-main .el-tag {
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
  }
  .el-carousel__item:nth-child(n) {
    background-color: lightgray;
  }

  a {
    text-decoration: none;}

  .el-tag {
    margin: 2px;
  }

  .el-tag img {
    margin: 6px;
    /*line-height:32px;*/
    /*图片和文字在一行，设置对齐居中*/
    vertical-align: middle;

  }
  .el-carousel__container {
    /*height: 200px !important;*/
    /*width: 60%;*/
  }

  .el-carousel__indicators {
    /*left: 30%;*/
  }

  .el-carousel__item {
    /*width: 100%;*/
  }
</style>
