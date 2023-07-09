<template>
<div>
 <ApplyTimeLine center="true" class="time_line"
                :activities="itemList"
                reviewDate="2023-05-01"
                title="申请达尔豪斯大学时间线"
                :cardText="cardContent"

 ></ApplyTimeLine>
</div>
</template>

<script setup lang="ts">

import {onMounted, reactive, ref} from "vue";
import EventList from '~/composables/dataStructure'
import {CircleCheckFilled, Search} from "@element-plus/icons-vue";
import {calcDayDiff} from "~/composables/util";

let cardContent = '距离review 已经过去了' + calcDayDiff("2023-05-01") + "天";

const itemList: EventList = reactive([
  {
    title: '提交申请',
    content: 'Custom icon',
    timestamp: '2023-04-07',
    icon: 'CircleCheckFilled',
    color: '#0bbd87',
    check:false,
  },
  {
    title: '材料收齐',
    content: 'Custom icon',
    timestamp: '2023-05-01',
    icon: CircleCheckFilled,
    color: '#03fcc2',
    check:true,
  }
])


</script>
<style scoped>

</style>