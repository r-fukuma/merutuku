<template>
  <div>
    <div class="mail__title">
      <p style="margin:10px 0">件名</p>
      <input
        ref="title"
        :value="$store.state.mailTitle"
        class="mail__title_inner"
        type="text"
      />
    </div>
    <div class="mail__content">
      <p style="margin:10px 0">本文</p>
      <textarea
        ref="content"
        :value="$store.state.mailContent"
        rows="20"
        class="mail__content_inner"
      ></textarea>
    </div>
    <div class="mail__action">
      <el-button @click="copyTitle">
        <span style="font-weight:bold">件名</span> をコピー
      </el-button>
      <el-button @click="copyContent">
        <span style="font-weight:bold">本文</span> をコピー
      </el-button>
      <el-button @click="deleteContent" icon="el-icon-delete" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    copyTitle() {
      const targetTitle = this.$refs.title.value
      navigator.clipboard.writeText(targetTitle)
      this.$message({
        showClose: true,
        message: '件名をコピーしました',
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
      this.$refs.title.value = ''
      this.$refs.content.value = ''
    }
  }
}
</script>

<style>
.mail__title {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  margin: 10px 0;
}
.mail__content {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;
}
.mail__title_inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.mail__content_inner {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.mail__title_inner:focus,
.mail__content_inner:focus {
  border-color: #409eff;
  outline: 0;
}
.mail__action {
  margin: 10px 0;
}
</style>
