<template>
  <!--<el-card class="box-card">-->
    <div slot="header" class="clearfix">
      <span class="card">
        <ul>
          <li><img class="img-Avatar" src="../../assets/logo.png" width="24px" height="24px"/></li>
          <li>昵称</li>
          <li class="time"><time >{{ currentDate }}</time></li>
        </ul>
        <div class="content">
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
      </div>
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
      };
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
  }

  .time {
    margin: 10px 20px 1px;
    font-size: 13px;
    color: #999;
  }

  ul li {font-size: 24px}

  .img-Avatar {margin: 7px}

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
