<template>
  <!--<el-card class="box-card">-->
    <div slot="header" class="clearfix">
      <span class="card">
        <ul>
          <li><img class="img-Avatar" src="../../assets/c6.png" height="24" width="24"/></li>
          <li>昵称</li>
          <li class="time"><time >{{  currentDate  }}</time></li>
        </ul>
        <div class="content"><img class="content-img" src="../../assets/c1.png" height="100%" width="30%" />
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容
      </div>
        <ul>
        <el-tag>标签</el-tag>
        <el-tag>标签</el-tag>
        <el-tag>标签</el-tag>
        <el-tag>标签</el-tag>
          </ul>
        <hr>
      </span>
    </div>

    <!--<div v-for="o in 3" :key="o" class="text item">-->
    <!--{{'内容 ' + o }}-->
    <!--</div>-->
  <!--</el-card>-->
</template>

<script>
  export default {
    data() {
      return {
        currentDate: new Date()
      }
    }
  }
</script>

<style>
  .card {
    display: inline-table;
    width: 80%;
  }

  .content {
    text-align: left;
    line-height: 20px;
    width: 100%;
    height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    /*display: -webkit-box;*/
    /*-webkit-box-orient: vertical;*/
    /*-webkit-line-clamp: 4;*/
    /*display: -webkit-box;*/
    /*-webkit-box-orient: vertical;*/
    /*-webkit-line-clamp: 4;*/
  }

  .content-img {
    float: right;
  }

  .time {
    margin: 10px 20px 1px;
    font-size: 13px;
    color: #999;
  }

  .img-Avatar {
    margin: 0px 7px;
    vertical-align: middle;
  }

  /*.text {*/
    /*font-size: 14px;*/
  /*}*/

  /*.item {*/
    /*margin-bottom: 8px;*/
  /*}*/

  /*.clearfix:before,*/
  /*.clearfix:after {*/
    /*display: table;*/
    /*content: "";*/
  /*}*/
  /*.clearfix:after {*/
    /*clear: both*/
  /*}*/

  /*.box-card {*/
    /*display: inline-block;*/
    /*width: 480px;*/
  /*}*/

  /*.el-card__header {*/
    /*padding: 12px;*/
  /*}*/

  span ul {
    list-style:none;
    display: flex;
    margin: 0px;
    padding: 0px;
  }
</style>
