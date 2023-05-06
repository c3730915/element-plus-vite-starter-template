<template>
  <el-config-provider namespace="ep">
      <BaseHeader />
      <div style="display: flex;">
        <BaseSide style="min-height: 10vh"/>
      </div>

    <router-view></router-view>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
.layout{
   /*height: 20vh;*/
}

</style>
