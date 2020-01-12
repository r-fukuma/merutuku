<template>
  <mail-form />
</template>

<script>
export default {
  components: {
    MailForm: () => import('~/components/TheMailForm.vue')
  }
}
</script>
