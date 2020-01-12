<template>
  <el-container>
    <el-aside width="400px">
      <side-menu />
    </el-aside>
    <el-main style="padding:0 20px">
      <mail-form />
    </el-main>
  </el-container>
</template>

<script>
export default {
  components: {
    SideMenu: () => import('~/components/TheSideMenu.vue'),
    MailForm: () => import('~/components/TheMailForm.vue')
  }
}
</script>
