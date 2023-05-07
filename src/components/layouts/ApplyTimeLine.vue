<template>
  <el-timeline style="">

    <div style="margin-bottom: 5vh;text-align: center;font-size: 20px">
      {{title}}:
    </div>
    <el-timeline-item v-for="(activity, index) in activities"
                      :timestamp="activity.timestamp"
                      :key="index"
                      :color="activity.color"
                      :icon="activity.icon"
                      placement="top"
                      size="large"
    >


      <el-card :style="{'background-color': activity.color !== '#0bbd87'?activity.color:'white'}">
        <h4>{{activity.title}}</h4>
<!--        <p>Tom committed 2018/4/12 20:46</p>-->
      </el-card>
    </el-timeline-item>
  </el-timeline>

  <el-card shadow="always" style="width: 40vh;margin: auto;text-align: center"> 距离review 已经过去了{{calcDayDiff(reviewDate)}}天 </el-card>

  <div style="margin-top: 20vh"></div>
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