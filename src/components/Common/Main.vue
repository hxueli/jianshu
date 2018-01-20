<template>
  <!--<el-card class="box-card">-->
    <div slot="header" class="clearfix">
      <span class="card">
        <ul>
          <li><img class="img-Avatar" src="../../assets/1.jpg" height="24" width="24"/></li>
          <li>昵称</li>
          <li class="time"><time >{{  currentDate  }}</time></li>
        </ul>
        <div class="content">
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容
      </div>
        <ul>
        <el-tag>标签</el-tag>
        <el-tag>标签</el-tag>
        <el-tag>标签</el-tag>
        <el-tag>标签</el-tag>
          </ul>
      <img class="content-img" src="../../assets/1.jpg" height="160px" width="300px" />

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
  ul>.el-tag {
    padding: 0px 12px;
    margin: 0px;
  }
  .clearfix {
    margin: 0px 20px;
    width: 840px;
  }

  .card {
    position: relative;
    display: inline-table;
    width: 880px;
  }

  .content {
    margin: 12px 0px;
    text-align: left;
    line-height: 20px;
    width: 60%;
    height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
  }

  .content-img {
    position: absolute;
    right: 40px;
    top: 0px;
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


  span ul {
    list-style:none;
    display: flex;
    margin: 0px;
    padding: 0px;
  }
</style>
