<template>
  <el-config-provider namespace="ep" style="">
    <BaseHeader v-if="state.showMenu" style=""/>
    <BaseSide v-if="state.showMenu"/>
    <router-view style="display: flex;"/>
<!--    <div class="flex-container" style="background-color: #42b8dd;display: flex">-->
<!--    </div>-->
  </el-config-provider>
</template>

<script setup>
// 不需要菜单的路径数组
import {useRouter} from "vue-router";
import {reactive} from "vue";

const noMenu = ['/login']
const router = useRouter()
const state = reactive({
  showMenu: true, // 是否需要显示菜单
})
// 监听路由的变化
router.beforeEach((to) => {
  state.showMenu = !noMenu.includes(to.path)
})
</script>
<style>
.flex-container {
  display: flex;
  min-height: 80vh;
  /*background-color: #42b8dd;*/
  border-color: #42b8dd;
}

</style>
