<template>
  <div class="Echarts">
    <div id="main" style="width: 600px;height:400px;margin: 0 auto"></div>
  </div>
</template>

<script>
export default {
  name: 'TopFiveBar',
  data () {
    return {
      url: 'http://localhost:8081/top_five'
    }
  },
  methods: {
    topFiveBarInit () {
      const myChart = this.$echarts.init(document.getElementById('main'))
      // 没有加载出来显示加载动画
      myChart.showLoading()
      this.axios({
        method: 'get',
        url: this.url,
        data: {}
      }).then(function (response) {
        console.log(response.data)
        myChart.hideLoading()
        const xList = response.data.map(function (item) {
          return item.cat_id
        })
        const yList = response.data.map(function (item) {
          return item.num
        })
        console.log(yList)
        const option = {
          title: {
            text: '销量前五的商品类别',
            subtext: 'x轴为商品id, y轴为商品销量'
          },
          /* 显示刻度 */
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: xList
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: yList,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            }
          }]
        }
        myChart.setOption(option)
      })
    }
  },
  mounted () {
    this.topFiveBarInit()
  }
}
</script>

<style scoped>

</style>
