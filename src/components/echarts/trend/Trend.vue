<template>
  <div class="trend-chart">
    <div id="trend-container"></div>
  </div>
</template>

<script>
import optionPublicFun from "../../../utils/optionPublic.js";
require("echarts/lib/chart/line")
require("echarts/lib/component/tooltip")
require("echarts/lib/component/grid")
export default {
  name: "echarts",
  data() {
    return {
      myChart: {}
    };
  },
  created() {
    this.$nextTick(() => {
      this.barCharts();
    });
  },
  methods: {
    barCharts() {
      this.myChart = new optionPublicFun().init("trend-container");
      this.myChart.setOption({
        tooltip: {
          trigger: "axis",
          position: function(pt) {
            return [pt[0], "10%"];
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              width: 1
            }
          },
          data: ["11/1", "11/2", "11/3", "11/4", "11/5", "11/6", "11/7","11/6", "11/7"]
        },
        axisLabel: {
          color: "#fff"
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              width: 1
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#1B283E",
              width: 1
            }
          },
          boundaryGap: [0, "100%"]
        },
        series: [
          {
            name: "模拟数据",
            type: "line",
            smooth: true,
            symbol: "none",
            sampling: "average",
            itemStyle: {
              color: "#009890"
            },
            areaStyle: {
              color: "#2C4369"
            },
            data: ["89", "37", "66", "15", "46", "5", "35","46", "5"]
          }
        ]
      });
    }
  },
  watch: {
    echartObj: {
      handler: function(val) {
        this.echartObj = val;
        this.barCharts();
      },
      deep: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.trend-chart {
  width: 100%;
  height: 100%;
  position: relative;
  #trend-container {
    width: 100%;
    height: 100%;
  }
}
</style>