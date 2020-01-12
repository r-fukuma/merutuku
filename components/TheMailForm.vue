<template>
  <div>
    <el-input ref="title" v-model="getTitle" style="margin: 10px 0;"></el-input>
    <el-input ref="content" v-model="getContent" :rows="25" type="textarea" />
    <el-button @click="copyTitle">
      タイトルをコピーする
    </el-button>
    <el-button @click="copyContent">
      本文をコピーする
    </el-button>
    <el-button @click="deleteContent" icon="el-icon-delete" />
  </div>
</template>
<script>
export default {
  computed: {
    getTitle() {
      return this.$store.state.mailTitle
    },
    getContent() {
      return this.$store.state.mailContent
    }
  },
  methods: {
    copyTitle() {
      const targetTitle = this.$refs.title.value
      navigator.clipboard.writeText(targetTitle)
      this.$message({
        showClose: true,
        message: 'タイトルをコピーしました',
        type: 'success'
      })
    },
    copyContent() {
      const targetContent = this.$refs.content.value
      navigator.clipboard.writeText(targetContent)
      this.$message({
        showClose: true,
        message: '本文をコピーしました',
        type: 'success'
      })
    },
    deleteContent() {
      this.$refs.content.value = ''
    }
  }
}
</script>
