<template>
  <div class="pie-chart" v-bind:style="{height:clientHeight}">
    <div id="one-module-container"></div>
  </div>
</template>

<script>
import optionPublicFun from "../../../utils/optionPublic.js";
import optionPieFun from "./optionPie.js";
import getOneModual from "../../../api/oneModule.js";
const colors = ["#FCD85A", "#0084C8", "#D8514B", "#9CCB63"];
export default {
  name: "echarts",
  data() {
    return {
      clientHeight:"100%",
      myChart: {}
    };
  },
  created() {
    // 向后台发送数据请求
    getOneModual({ timeid: 1, moduleid: 1 }).then(data => {
      this.$nextTick(() => {
        this.oneModulePieCharts(data.data);
      });
    });
  },
  methods: {
    setClient(){
      let clientHeight = document.documentElement
              ? document.documentElement.clientHeight
              : document.body.clientHeight;
      console.log(clientHeight)
      this.clientHeight = clientHeight-125+"px";
    },
    oneModulePieCharts(data) {
      this.myChart = new optionPublicFun().init("one-module-container");
      this.myChart.setOption({
        color: colors,
        tooltip: new optionPieFun(data).firstPieTooltip("bold", 14,"second"),
        legend: new optionPieFun(data).firstPieLegend("bold", 14, "13%"),
        series: new optionPieFun(data).firstPieSeries("second")
      });
    }
  },
  mounted() {
    let nowPath = this.$route.path;
    if (nowPath == "/whole/subpie") {
      this.setClient();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pie-chart {
  width: 100%;
  height: 100%;
  #one-module-container {
    width: 100%;
    height: 90%;
  }
}
</style>