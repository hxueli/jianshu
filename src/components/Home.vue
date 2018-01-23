<template>
  <div class="container">
    <div class="container-main">
      <div class="block">
        <el-carousel height="220px">
          <el-carousel-item v-for="item in 3" :key="item">
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

      <hr>
      <div>
        <Main></Main>
        <hr>
        <Main></Main>
      </div>
    </div>
    <div class="container-aside" >
<div>
  <ul>
    <li>新上榜</li>
    <li>七日热门</li>
    <li>30日热门</li>
    <li>简书出版</li>
    <li>简书大学堂</li>
  </ul>
  <div class="erweima">
    <span>二维码</span>
  </div>
  <ul>
    <span>推荐作者</span>
    <span>换一批</span>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</div>
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

  * {
    margin: 0px;
    list-style: none;
  }

  .container {
    position: relative;
    width: 1214px;
    margin: 10px auto;
  }

  .container-main {
    position: relative;
    width: 880px;

  }

  .container-aside {
    width: 334px;
    float: right;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 220px;
  }
  .erweima  {
    width: 294px;
    height: 80px;
    margin: 24px 0px;
    padding: 2px 0px;
    background-color: lightgray;
    border-radius: 20px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    float: right;
  }


  .container-aside ul li {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    height: 30px;
    margin: 6px 0px;
    padding: 4px 0px;
    background-color: gold;
    opacity:0.6;
    border-radius: 20px;
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
