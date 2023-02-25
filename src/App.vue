<template>
  <div>
    <h1>App 根组件</h1>
    <el-button @click="getinfo">Default</el-button>
    <el-button type="primary" @click="getusers">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <router-link to="/home">首页</router-link>&nbsp;
    <router-link to="/movie">电影</router-link>
    <hr>
    <router-view></router-view>
  </div>

</template>

<script>


export default {
  name: 'App',
  methods:{
    async getinfo(){
      const {data: res}= await this.$http.get('/api/get',{params:{name:'zs',age:29}})
      console.log(res)
    },
    async getusers(){
      const {data: res}= await this.$http.get('/api/users')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
