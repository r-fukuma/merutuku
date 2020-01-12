<template>
  <el-menu default-active="1" class="el-menu-vertical-demo">
    <menu-item :items="recruit" index="1" title="就職・転職" />
    <menu-item :items="recruit" index="2" title="イベントの告知" />
  </el-menu>
</template>

<script>
import recruit from '~/assets/mail-templates/recruit.json'

export default {
  components: {
    MenuItem: () => import('~/components/SideMenuItem.vue')
  },
  data() {
    return {
      recruit: recruit
    }
  }
}
</script>
