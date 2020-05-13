<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/compared/gender">查询男女买家对比</router-link> |
      <router-link to="/compared/sale_action">所有买家消费行为比例</router-link> |
      <router-link to="/scatter">男女买家各年龄段交易对比</router-link> |
      <router-link to="/bar">获取销量前五的商品类别</router-link> |
      <router-link to="/map">各个省份的总成交量对比</router-link>
    </div>
    <router-view :key="key"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  name: 'App',
  /* 阻止组件复用 */
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
    }
  }
}
</script>
