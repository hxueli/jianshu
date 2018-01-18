<template>
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
    <!--<h1>home</h1>-->
  <router-link id="Carousel" to="/Home/Carousel">Carousel</router-link>
  <router-link id="One" to="/Home/One">One</router-link>
  <router-link id="Two" to="/Home/Two">Two</router-link>
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

  .el-carousel__item:nth-child(n) {
    background-color: lightgray;
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
