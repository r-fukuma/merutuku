<template>
  <el-submenu index="100">
    <template slot="title">
      <i class="el-icon-s-tools"></i>
      <span slot="title">サイト情報</span>
    </template>
    <el-menu-item v-for="n in items" :key="n" @click="goTo(n.link)">
      {{ n.name }}
    </el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'merutukuとは？',
          link: '/about'
        }
      ]
    }
  },
  methods: {
    goTo(link) {
      this.$router.push(link)
    }
  }
}
</script>
