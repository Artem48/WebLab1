import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/markdowns',
      name: 'Markdown Files',
      component: MarkdownsAll
    },
    {
      path: '/markdowns/new',
      name: 'New Markdown',
      component: NewMarkdown
    },
    {
      path: '/markdowns/:id',
      name: 'Edit Markdown',
      component: EditMarkdown
    }
  ]
})
