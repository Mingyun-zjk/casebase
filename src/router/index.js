import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Section',
        component: () =>
            import ('../views/Section.vue')
    }, {
        path: '/test',
        name: 'Test',
        component: () =>
            import ('../views/Test.vue')
    },
    {
        path: '/contactUs',
        name: 'ContactUs',
        component: () =>
            import ('../views/ContactUs.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router