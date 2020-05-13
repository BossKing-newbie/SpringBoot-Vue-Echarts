<template>
  <div class="Echarts">
    <div id="main" style="width: 600px;height:400px;margin: 0 auto"></div>
  </div>
</template>

<script>
export default {
  name: 'FindGenderAge',
  data () {
    return {
      url: 'http://localhost:8081/gender_age'
    }
  },
  methods: {
    findGenderAge () {
      const myChart = this.$echarts.init(document.getElementById('main'))
      // 没有加载出来显示加载动画
      myChart.showLoading()
      this.axios({
        method: 'get',
        url: this.url,
        data: {}
      }).then(function (response) {
        myChart.hideLoading()
        console.log(response.data)
        // 过滤男性女性
        const girlList = response.data.filter(function (item) {
          return item.gender === '女性'
        }).map(function (item) {
          return [parseInt(item.age_range), item.num]
        })
        console.log(girlList)
        const boyList = response.data.filter(function (item) {
          return item.gender === '男性'
        }).map(function (item) {
          return [parseInt(item.age_range), item.num]
        })
        console.log(boyList)
        const option = {
          title: {
            text: '男女买家各年龄段交易对比',
            subtext: '1:<18,2:[18,24]，' +
              '3:[25,29]，' +
              '4:[30,34]，5:[35,39]，' +
              '6:[40,49]，' +
              '7 adn 8:>=50'
          },
          tooltip: {
            trigger: 'axis',
            showDelay: 0,
            axisPointer: {
              type: 'cross',
              lineStyle: {
                type: 'dashed',
                width: 1
              }
            }
          },
          legend: {
            data: ['女性', '男性']
          },
          xAxis: [
            {
              type: 'value',
              power: 1,
              precision: 2,
              scale: true
            }
          ],
          yAxis: [
            {
              type: 'value',
              power: 1,
              precision: 2,
              scale: true
            }
          ],
          series: [
            {
              name: '女性',
              type: 'scatter',
              data: girlList
            },
            {
              name: '男性',
              type: 'scatter',
              data: boyList
            }
          ]
        }
        myChart.setOption(option)
      })
    }
  },
  mounted () {
    this.findGenderAge()
  }
}
</script>

<style scoped>

</style>
