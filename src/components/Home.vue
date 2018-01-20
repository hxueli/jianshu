<template>
  <div class="container">
    <div class="container-main">
      <div class="block">
        <el-carousel height="220px">
          <el-carousel-item v-for="item in 3" :key="item">
            <!--<h3>{{ item }}</h3>-->
            <div v-if="item===1"><img src="../assets/1.jpg" height="220px" width="880px"/></div>
            <div v-if="item===2"><img src="../assets/2.jpg" height="220px" width="880px"/></div>
            <div v-if="item===3"><img src="../assets/3.jpg" height="220px" width="880px"/></div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <hr>
      <span  class="tag-main">
    <el-tag><a><img src="../assets/1.jpg"/>标签一</a></el-tag>
    <el-tag><a><img src="../assets/1.jpg"/>标签一</a></el-tag>
    <el-tag><a><img src="../assets/1.jpg"/>标签一</a></el-tag>
    <el-tag><a><img src="../assets/1.jpg"/>标签一</a></el-tag>
    <el-tag><a><img src="../assets/1.jpg"/>标签一</a></el-tag>
    <el-tag><a><img src="../assets/1.jpg"/>标签一</a></el-tag>
      </span>
      <br>

      <!--<el-tag>-->
        <!--<router-link id="Home" to="/Home"><a>Carousel</a></router-link>-->
      <!--</el-tag>-->
      <!--<el-tag>-->
        <!--<router-link id="One" to="/Home/One">One</router-link>-->
      <!--</el-tag>-->
      <!--<el-tag>-->
        <!--<router-link id="Two" to="/Home/Two">Two</router-link>-->
      <!--</el-tag>-->
      <hr>
      <div>
        <Main></Main>
        <Main></Main>
      </div>
      <!--<router-link id="Home" to="/Home"><a></a></router-link>-->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Main from './Common/Main.vue'

  export default {
    name: 'app',
    components: {
      Main
    }
  }
</script>

<style>

  .container {
    position: relative;
    width: 1214px;
    margin: 10px 76px;
  }

  .container-main {
    position: relative;
    width: 880px;

  }

  .el-carousel__item h3 {
    color: #3f3f3f;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .tag-main>.el-tag {
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
    opacity: 0.6;
  }

  a {
    text-decoration: none;
  }

  hr {
    margin: 20px;
  }

  .el-tag {
    padding: 0px 12px 0px 0px;
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: middle;
    overflow: hidden;
  }

  .el-tag img {
    width: 32px;
    height: 32px;
    margin: 0px 12px 0px 0px;
    /*图片和文字在一行，设置对齐居中*/
    vertical-align: middle;

  }

  .el-carousel__container {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .block div {
    border-radius: 12px;
  }

  .collection {

  }

</style>
