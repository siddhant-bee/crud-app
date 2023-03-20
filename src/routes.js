import home from "./components/home"

import signup from "./components/signup"
import login from "./components/login"
import deletee from "./components/deletee"
import update from "./components/update"
import tasks from "./components/tasks.vue"

import{createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:"home",
        component : home,
        path:'/'
    },
    {
        name:"signup",
        component : signup,
        path:'/signup'
    
    },
    {
        name:"login",
        component : login,
        path:'/login'
    
    },
    {
        name:"tasks",
        component: tasks,
        path: '/tasks'
    },
    {
        name:"deletee",
        component : deletee,
        path:'/deletee'
    },
    {
        name:"update",
        component : update,
        path:'/update'
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;