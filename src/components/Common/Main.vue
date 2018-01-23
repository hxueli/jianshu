<template>
  <div>
    <table id = 'app'>
      <tr>
        <th>name</th>
        <th>age</th>
        <th>sex</th>
      </tr>
    <tr v-for = "pep in peps ">
      <td>{{pep.name}}</td>
      <td>{{pep.age}}</td>
      <td>
        <span v-if="pep.sex == 1">男</span>
        <span v-else>女</span>
      </td>
    </tr>
    </table>
  </div>
</template>

<!--<script>-->
  <!--import Vue from 'vue'-->
  <!--import VueRouter from 'vue-router'-->
  <!--Vue.use(VueResource)-->

  <!--var app = new Vue({-->
    <!--el: '#app',-->
    <!--data: {-->
      <!--peps: ''-->
    <!--},-->
    <!--mounted: function() {-->
      <!--this.getJsonInfo()-->
    <!--}-->
    <!--methods: {-->
      <!--getJsonInfo: function() {-->
        <!--this.$http.get('/post').then(function(response){-->
          <!--console.log(response.data.data)-->
          <!--var resdata = response.data.data-->
          <!--this.peps = resdata-->
        <!--}).catch(function(response){-->
          <!--console.log(response)-->
          <!--console.log("居然没有弹窗")-->
        <!--})-->
      <!--}-->
    <!--}-->
  <!--})-->
<!--</script>-->














































<!--<template>-->
  <!--<div class="card">-->
    <!--<span class="card-left">-->
      <!--<ul>-->
        <!--<li><img class="img-Avatar" src="../../assets/1.jpg"/></li>-->
        <!--<li>昵称</li>-->
        <!--<li class="time"><time >{{  currentDate  }}</time></li>-->
      <!--</ul>-->
      <!--<div class="content">-->
        <!--<h3>标题标题标题标题标题标题标题</h3>-->
        <!--内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容-->
        <!--</div>-->
      <!--<ul class="card-left-tag">-->
      <!--<el-tag class="card-tag">标签</el-tag>-->
        <!--<li><img src="../../assets/2.jpg"/>1</li>-->
        <!--<li><img src="../../assets/2.jpg"/>1</li>-->
        <!--<li><img src="../../assets/2.jpg"/>1</li>-->
        <!--</ul>-->
    <!--</span>-->
    <!--<span class="card-right">-->
          <!--<img class="content-img" src="../../assets/1.jpg"/>-->
    <!--</span>-->
  <!--</div>-->

<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--data() {-->
      <!--return {-->
        <!--currentDate: new Date()-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style>-->

  <!--.card {-->
    <!--display: flex;-->
    <!--margin: 2px 0px;-->

  <!--}-->

  <!--.card-left {-->
    <!--flex:60%-->
  <!--}-->

  <!--.card-left ul {-->
    <!--padding-left: 30px;-->
    <!--display: flex;-->
    <!--justify-content: flex-start;-->
    <!--align-items: center;-->
  <!--}-->

  <!--.card-tag {-->
    <!--padding: 2px 8px;-->
    <!--margin: 2px 4px;-->
  <!--}-->

  <!--.card-left-tag li img {-->
    <!--height: 20px;-->
    <!--width: 20px;-->
    <!--border-radius: 50%;-->
    <!--vertical-align: bottom;-->
    <!--margin: 0px 2px;-->
  <!--}-->

  <!--.card-right {-->
    <!--padding-right: 5%;-->
    <!--flex: 40%-->
  <!--}-->

  <!--.card-right img {-->
    <!--border-radius: 30px;-->
  <!--}-->



  <!--.content {-->
    <!--margin: 10px 30px ;-->
    <!--text-align: left;-->
    <!--line-height: 20px;-->
    <!--overflow: hidden;-->
    <!--text-overflow: ellipsis;-->
    <!--white-space: pre-line;-->
  <!--}-->

  <!--.content-img {-->
    <!--height: 100%;-->
    <!--width: 100%;-->
  <!--}-->

  <!--.time {-->
    <!--margin: 10px 20px 1px;-->
    <!--font-size: 13px;-->
    <!--color: #999;-->
  <!--}-->

  <!--.img-Avatar {-->
    <!--height: 40px;-->
    <!--width: 40px;-->
    <!--border-radius: 50%;-->
    <!--margin: 0px 7px;-->
    <!--vertical-align: top;-->
  <!--}-->


<!--</style>-->
