// 状態管理
export const state = () => ({
  mailTitle: '',
  mailContent: ''
})

export const mutations = {
  changeTemplate(state, { title, content }) {
    state.mailTitle = title
    state.mailContent = content
  }
}
