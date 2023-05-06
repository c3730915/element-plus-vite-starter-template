<template>
  <el-config-provider namespace="ep">
    <BaseHeader style=""/>
    <div class="flex-container">
      <BaseSide/>
      <router-view/>
    </div>

  </el-config-provider>
</template>

<style>
.flex-container {
  display: flex;
  min-height: 80vh;
  /*background-color: #42b8dd;*/
  border-color: #42b8dd;
}
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
