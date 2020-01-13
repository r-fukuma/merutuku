<template>
  <el-container>
    <el-header class="header" height="45px">
      <h1>
        <i class="el-icon-message" style="vertical-align: middle"></i>
        メルつく
      </h1>
    </el-header>
    <el-container>
      <el-aside width="400px">
        <side-menu />
      </el-aside>
      <el-main style="padding:5px 20px">
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
}
h1 {
  font-size: 28px;
}
* {
  margin: 0;
}
</style>
