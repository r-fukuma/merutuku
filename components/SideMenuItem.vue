<template>
  <el-submenu :index="index">
    <template slot="title">
      <i :class="icon"></i>
      <span slot="title">{{ title }}</span>
    </template>
    <el-menu-item
      v-for="n in items"
      :key="n.id"
      @click="changeTemplate(n.title, n.content)"
    >
      {{ n.name }}
    </el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  props: {
    index: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'el-icon-info'
    },
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    changeTemplate(title, content) {
      this.$store.commit('changeTemplate', {
        title,
        content
      })
    }
  }
}
</script>
