import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/list'
    },
    {
        path: '/home',
        name: 'Home',
        props: true, //路徑參數可以用在元件中
        component: () =>
            import('../view/landingPage.vue'),
    },
    {
        path: '/list',
        name: 'List',
        props: true,
        component: () =>
            import('../view/listPage.vue'),
    },
    {
        path: '/favorite',
        name: 'Favorite',
        props: true,
        component: () =>
            import('../view/favoritePage.vue'),
    },
    ]

    const router = new VueRouter({
        mode: 'hash',
        base: '/',
        routes
      })
      // 注意這邊 export default router 對應到 main.js 的 import
export default router