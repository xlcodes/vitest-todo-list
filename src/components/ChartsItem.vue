<template>
  <div ref="EchartsEl" class="echarts-container"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {
    opt: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    const main = this.$refs.EchartsEl
    const myChars = echarts.init(main)
    myChars.setOption(this.opt)
  }
}

</script>

<style scoped>
.echarts-container {
  min-width: 360px;
  min-height: 360px;
}
</style>