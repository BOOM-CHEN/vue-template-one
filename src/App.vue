<template>
  <div>
    <h1>App 根组件</h1>
    <router-link to="/home">首页</router-link>&nbsp;
    <router-link to="/movie">电影</router-link>
    <hr>
    <router-view></router-view>
  </div>

</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="less" scoped>

</style>
