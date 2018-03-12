<template>
  <div id="app">
    <Header></Header>
    <!--<Aside></Aside>-->
    <!--<Main></Main>-->
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Common/Header.vue'
//  import Aside from './components/Common/Aside.vue'
//  import Main from './components/Common/Main.vue'

export default {
    name: 'app',
    components: {
      Header
//    Aside,
//    Main
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
