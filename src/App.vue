<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <BaseSide style="height: 200px;display: flow"/>

    <router-view />
  </el-config-provider>
</template>

<style>
.content {
  display: flow;
  flex-direction: column;

}
.main {
  height: 100vh;
  overflow: auto;
  padding: 10px;
}
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
.layout{
   /*height: 20vh;*/
}
.element-plus-logo {
  width: 50%;
}
</style>
