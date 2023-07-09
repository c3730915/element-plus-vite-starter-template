<template>
<div>
  <ApplyTimeLine class="time_line" :activities="itemList2" review-date="2023-04-25" title="申请劳伦森大学时间线" :cardText="cardContent"></ApplyTimeLine>
</div>
</template>

<script setup lang="ts">

import {onMounted, reactive, ref} from "vue";
import EventList from '~/composables/dataStructure'
import {Check, CircleCheckFilled, Search} from "@element-plus/icons-vue";
import {calcDayDiff} from "~/composables/util";

let cardContent  = '距离截止交占位费还有' + -1 * calcDayDiff("2023-06-15") + "天" ;


// 劳伦森申请
const itemList2: EventList = reactive([
  {
    title: '提交申请',
    content: 'Custom icon',
    timestamp: '2023-04-17',
    icon: CircleCheckFilled,
    color: '#0bbd87',
    check:false,
  },
  {
    title: '材料收齐',
    content: 'Custom icon',
    timestamp: '2023-04-25',
    icon: CircleCheckFilled,
    color: '#0bbd87',
    check:false,
  },
  {
    title: '收到录取, 一共耗时24天',
    content: '一共耗时24天',
    timestamp: '2023-05-19',
    icon: Check,
    color: '#03fcc2',
    check:true,
  }
])
</script>
<style scoped>

/*.time_line{*/
/*  margin: auto;*/
/*}*/
</style>