<template>
  <el-container>
    <el-header class="header" height="50px">
      <i class="el-icon-message" style="vertical-align: middle"></i>
      merutuku
    </el-header>
    <el-container>
      <el-aside width="400px">
        <side-menu />
      </el-aside>
      <el-main style="padding:0 20px">
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  components: {
    SideMenu: () => import('~/components/TheSideMenu.vue')
  }
}
</script>

<style>
.header {
  background-color: #478899;
  color: white;
  font-size: 32px;
}
* {
  margin: 0;
}
</style>
