<template>
  <div class="Echarts">
    <div id="main" style="width: 600px;height:400px;margin: 0 auto"></div>
  </div>
</template>

<script>
require('../../assets/js/china') // 引入china.js地图文件
export default {
  name: 'Map',
  data () {
    return {
      url: 'http://localhost:8081/province'
    }
  },
  methods: {
    findProvince () {
      const myChart = this.$echarts.init(document.getElementById('main'))
      // 没有加载出来显示加载动画
      myChart.showLoading()
      // map-option.js
      this.axios({
        method: 'get',
        url: this.url,
        data: {}
      }).then(function (response) {
        console.log(response.data)
        myChart.hideLoading()
        const mapList = response.data.map(function (item) {
          return { name: item.province, value: item.num }
        })
        const option = {
          title: {
            text: '各个省份的总成交量对比',
            subtext: '淘宝数据来源',
            x: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['成交量']
          },
          dataRange: {
            min: 43671,
            max: 45000,
            x: 'left',
            y: 'bottom',
            text: ['高', '低'],
            calculable: true
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
              china: true
            }
          },
          series: [
            {
              name: '成交量',
              type: 'map',
              mapType: 'china',
              roam: false,
              itemStyle: {
                normal: { label: { show: true } },
                emphasis: { label: { show: true } }
              },
              data: mapList
            }
          ]
        }
        myChart.setOption(option)
      })
    }
  },
  mounted () {
    this.findProvince()
  }
}
</script>

<style scoped>

</style>
