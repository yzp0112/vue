<template>
  <div id="app">
  	<tabbar></tabbar>
    <router-view/>
  </div>
</template>

<script>
	import Tabbar from './components/tabbar'   //  ‘./’ 同级跳转
export default {
  name: 'app',
  components:{ //配置子组件
  	Tabbar
  },
  beforeCreate:function(){ //路由重定向
  	this.$router.push('/')
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
}
</style>
