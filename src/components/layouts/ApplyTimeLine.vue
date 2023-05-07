<template>
  <el-timeline style="">

    <div style="margin-bottom: 5vh;text-align: center;font-size: 20px">
      {{title}}:
    </div>
    <el-timeline-item v-for="(activity, index) in activities"
                      :timestamp="activity.timestamp"
                      :key="index"
                      :hollow="activity.timestamp !== reviewDate"
                      placement="top"
                      size="large"
                      type="primary"
                      style="max-width: 20vh;margin: auto;min-height: 12vh"
    >


      <span v-show="activity.timestamp === reviewDate" style="margin-right: 10px">
        <el-icon color="green" size="15"><CircleCheckFilled /></el-icon>
      </span>
        <span>{{activity.title}}</span>
    </el-timeline-item>
  </el-timeline>

  <el-card shadow="always" style="width: 40vh;margin: auto;text-align: center"> 距离review 已经过去了{{calcDayDiff(reviewDate)}}天 </el-card>

  <el-divider />
  <div style="margin-top: 10vh"></div>
</template>

<script setup lang="ts">
import {CircleCheckFilled, InfoFilled, MoreFilled, Loading, Search} from '@element-plus/icons-vue'

import EventList from '~/composables/dataStructure'
import {calcDayDiff} from "~/composables/util";
import {computed} from "vue";

interface Props {
  activities: EventList,
  title:String,
  reviewDate:String
}

defineProps<Props>()

// const dayDiff = computed(() => {
//   calcDayDiff()
// });

;

</script>

<style scoped>

</style>