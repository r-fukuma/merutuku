<template>
  <el-menu default-active="1" class="el-menu-vertical-demo">
    <el-menu-item-group title="テンプレート集" style="margin-top: 10px">
      <menu-item
        v-for="(n, i) in categories"
        :key="i + 1"
        :items="n.items"
        :icon="n.icon"
        :index="i + 1"
        :title="n.title"
      />
    </el-menu-item-group>
    <el-menu-item-group title="その他">
      <site-info />
      <el-menu-item @click="goTo('/request')" index="4">
        <i class="el-icon-edit-outline"></i>
        <span>リクエストフォーム</span>
      </el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<script>
import inform from '~/assets/mail-templates/inform.json'
import thanks from '~/assets/mail-templates/thanks.json'
// import reply from '~/assets/mail-templates/reply.json'
import request from '~/assets/mail-templates/request.json'
import apologize from '~/assets/mail-templates/apologize.json'
import inhouse from '~/assets/mail-templates/inhouse.json'
// import remind from '~/assets/mail-templates/remind.json'

export default {
  components: {
    MenuItem: () => import('~/components/SideMenuItem.vue'),
    SiteInfo: () => import('~/components/TheSiteInfo.vue')
  },
  data() {
    return {
      categories: [
        {
          items: inform,
          icon: 'el-icon-warning-outline',
          title: 'お知らせメール'
        },
        {
          items: thanks,
          icon: 'el-icon-present',
          title: 'お礼のメール'
        },
        // {
        //   items: reply,
        //   icon: 'el-icon-chat-dot-square',
        //   title: '回答'
        // },
        {
          items: apologize,
          icon: 'el-icon-heavy-rain',
          title: '謝罪のメール'
        },
        {
          items: request,
          icon: 'el-icon-document',
          title: '相談・依頼メール'
        },
        {
          items: inhouse,
          icon: 'el-icon-house',
          title: '社内向けのメール'
        }
        // {
        //   items: remind,
        //   icon: 'el-icon-thumb',
        //   title: '催促'
        // }
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
