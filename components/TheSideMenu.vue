<template>
  <el-menu default-active="1" class="el-menu-vertical-demo">
    <menu-item
      v-for="(n, i) in categories"
      :key="i + 1"
      :items="n.items"
      :icon="n.icon"
      :index="i + 1"
      :title="n.title"
    />
    <!-- <menu-item :items="thanks" index="2" title="お礼" />
    <menu-item :items="thanks" index="3" title="回答" />
    <menu-item :items="thanks" index="4" title="相談" /> -->
  </el-menu>
</template>

<script>
import inform from '~/assets/mail-templates/inform.json'
import thanks from '~/assets/mail-templates/thanks.json'
// import reply from '~/assets/mail-templates/reply.json'
import request from '~/assets/mail-templates/request.json'
import apologize from '~/assets/mail-templates/apologize.json'
// import greeting from '~/assets/mail-templates/greeting.json'
// import remind from '~/assets/mail-templates/remind.json'

export default {
  components: {
    MenuItem: () => import('~/components/SideMenuItem.vue')
  },
  data() {
    return {
      categories: [
        {
          items: inform,
          icon: 'el-icon-warning-outline',
          title: 'お知らせ・案内'
        },
        {
          items: thanks,
          icon: 'el-icon-present',
          title: 'お礼'
        },
        // {
        //   items: reply,
        //   icon: 'el-icon-chat-dot-square',
        //   title: '回答'
        // },
        {
          items: request,
          icon: 'el-icon-document',
          title: '相談・依頼'
        },
        {
          items: apologize,
          icon: 'el-icon-heavy-rain',
          title: '断り・謝罪'
        }
        // {
        //   items: greeting,
        //   icon: 'el-icon-sunny',
        //   title: '挨拶'
        // },
        // {
        //   items: remind,
        //   icon: 'el-icon-thumb',
        //   title: '催促'
        // }
      ]
    }
  }
}
</script>
