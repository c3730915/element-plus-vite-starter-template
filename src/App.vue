

  <template>
    <el-config-provider namespace="ep" style="">
    <el-container class="layout-container-demo" style="height: 100vh">

      <el-container>
        <el-header style="text-align: right; font-size: 12px" v-if="state.showMenu">
          <el-menu
              default-active='/apply/university'
              class="el-menu-demo"
              mode="horizontal"
              :router="true">

            <el-menu-item index="/apply/university">申请大学</el-menu-item>
            <el-menu-item index="/apply/visa">申请签证</el-menu-item>
          </el-menu>

        </el-header>


        <el-main>

          <router-view  style="height: 80vh"></router-view>
        </el-main>
      </el-container>
    </el-container>
    </el-config-provider>
  </template>

  <script lang="ts" setup>
  import { ref } from 'vue'
  import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
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

  <style scoped>
  .layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
    height: 100vh;
  }
  .layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
  }
  .layout-container-demo .el-menu {
    border-right: none;
  }
  .layout-container-demo .el-main {
    padding: 0;
  }
  .layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
  </style>
