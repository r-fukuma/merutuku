<template>
  <el-container>
    <el-aside width="200px">
      <side-menu />
    </el-aside>
    <el-main>
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
