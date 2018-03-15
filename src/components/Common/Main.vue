<template>

  <div class="hello">
    <ul>
      <li v-for="user in users">
        <a href="http://localhost:8080/#/SignIn"> <img class="profilePicture" src="../../assets/logo.png"  height="30px"/></a>
        <a><img class="artitleimg" src="../../assets/1.jpg" /></a>
        <a href="http://localhost:8080/#/SignUp" class="username">{{ user.username }}</a>
        <h3 style="display: block;">{{ user.atitle }}</h3>
        <span class="article">{{ user.article }}</span>
        <span>{{ user.alabel }}</span>
        <i class="iconfont">&#xe6e6;<span>{{ user.num1 }}</span></i>
        <i class="iconfont">&#xe86e;<span>{{ user.num2 }}</span></i>
        <i class="iconfont">&#xe758;<span>{{ user.num3 }}</span></i>


      </li>
    </ul>
    <ul>
    </ul>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  created () {
    axios.get('http://localhost:3000/api')
      .then(response => {
        console.log(response)
        this.users = response.data
      })
      .catch(error => {
        console.log(error)
        alert('error')
      })
  },
  data () {
    return {
      users: []
    }
  }
}
</script>

<style>
  @font-face {
    font-family: 'iconfont';  /* project id 593223 */
    src: url('//at.alicdn.com/t/font_593223_ckbjfm9yamxi529.eot');
    src: url('//at.alicdn.com/t/font_593223_ckbjfm9yamxi529.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_593223_ckbjfm9yamxi529.woff') format('woff'),
    url('//at.alicdn.com/t/font_593223_ckbjfm9yamxi529.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_593223_ckbjfm9yamxi529.svg#iconfont') format('svg');
  }

  .iconfont{
    margin-left: 2px;
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}

ul {
list-style-type: none;
padding: 0;
}
li {
text-align: left;
margin-left: 3%;
}
li .profilePicture {
  display: inline;
  vertical-align: middle;
  margin: 0 3px;
}
  .artitleimg {
    height: 137px;
    width: 35%;
    float: right;
    margin-right: 3%
  }
  .article {
    width: 60%;
    height: 42px;
    margin: 5px 0px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>











































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
