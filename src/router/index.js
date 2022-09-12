import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Auth from '../views/AuthHome.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Forgot from '../views/ForgotPassword.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/auth',
        name: Auth,
        component: Auth
    },
    {
        path: '/login',
        name: Login,
        component: Login
    },
    {
        path: '/signup',
        name: Signup,
        component: Signup
    },
    {
        path: '/forgot-password',
        name: Forgot,
        component: Forgot
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router