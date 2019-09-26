import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import ListOfUsers from './views/ListOfUsers.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/ListOfUsers',
            name: 'listofusers',
            component: ListOfUsers
        },
        {
            path: '/QrPage',
            name: 'QrPage',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/QrPage.vue')
        }
    ]
})