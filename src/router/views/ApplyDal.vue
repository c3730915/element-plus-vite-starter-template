<template>
<div>
 <ApplyTimeLine center="true" class="time_line" :activities="itemList" reviewDate="2023-05-01" title="申请达尔豪斯大学时间线"></ApplyTimeLine>
<!--  <ApplyTimeLine class="time_line" :activities="itemList2" review-date="2023-04-25" title="申请劳伦森大学时间线"></ApplyTimeLine>-->
</div>
</template>

<script setup lang="ts">

import {reactive} from "vue";
import EventList from '~/composables/dataStructure'
import {CircleCheckFilled, Search} from "@element-plus/icons-vue";

const itemList: EventList = reactive([
  {
    title: '提交申请',
    content: 'Custom icon',
    timestamp: '2023-04-07',
    icon: 'CircleCheckFilled',
    color: '#0bbd87',
  },
  {
    title: '材料收齐',
    content: 'Custom icon',
    timestamp: '2023-05-01',
    icon: CircleCheckFilled,
    color: '#03fcc2',
  }
])

// 劳伦森申请
const itemList2: EventList = reactive([
  {
    title: '提交申请',
    content: 'Custom icon',
    timestamp: '2023-04-17',
    icon: 'CircleCheckFilled',
    color: '#0bbd87',
  },
  {
    title: '材料收齐',
    content: 'Custom icon',
    timestamp: '2023-04-25',
    icon: CircleCheckFilled,
    color: '#03fcc2',
  }
])
</script>
<style scoped>

/*.time_line{*/
/*  margin: auto;*/
/*}*/
</style>