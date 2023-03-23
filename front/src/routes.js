import home from "./components/home"
import admin from "./components/admin"
import signup from "./components/signup"
import login from "./components/login"
import deletee from "./components/deletee"
import update from "./components/update"
import tasks from "./components/tasks.vue"
import adminheader from "./components/adminheader"
import adminhome from "./components/adminhome"
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
    ,
    {
        name:"admin",
        component : admin,
        path:'/admin'
    
    },
    ,
    {
        name:"adminheader",
        component : adminheader,
        path:'/adminheader'
    
    },
    {
        name:"adminhome",
        component : adminhome,
        path:'/adminhome'
    

    }

]
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;