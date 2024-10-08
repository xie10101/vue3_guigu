// import { menuroutes } from './routes2'
export const  baseroutes=[
   
        {
            path:'/',
            redirect:'/login',
            meta:{
                title:"空白页",
                hidden:false,
                icon:"HomeFilled"
            },
        },
        // 对于二级路由的设置，跳转后的内容为二级路由绑定组件
        {
            path:'/login',
            // 无法使用@ 相对路径
            component:()=>import('../views/login/index.vue'),
            name:'login',
            meta:{
                title:"登陆页",
                hidden:false
            },
            children:[
                {
                    // 主要使用此路由对应的组件
                    path:"/daping",
                    name:"daping",
                    meta:{
                        title:"数据大",
                        hidden:false,
                        icon:"Goods"
                    }
                },
               
            ]
        },
        {
            path:'/home',
            // 无法使用@ 相对路径
            component:()=>import('../views/home/index.vue'),
            name:'home',
            meta:{
                title:"主页",
                icon:"Plus"
            },
            children:[
                {
                    path:"/daping",
                    name:"daping",
                    meta:{
                        title:"数据大屏",
                        hidden:false,
                        icon:"Sunrise"
                    }
                },
                {
                    path:"/user",
                    name:"user",
                    meta:{
                        title:"用户管理",
                        hidden:true
                    }
                }
            ]
            
        },
        {
            path:'/404',
            // 无法使用@ 相对路径
            component:()=>import('../views/404/404.vue'),
            name:'404',
            meta:{
                title:"404",
                hidden:true
            }
            
        },
        {
            path:'/:pathMatch(.*)*',
            // 无法使用@ 相对路径
            redirect:'/404',
            name:'Any',
            meta:{
                title:"任意路径",
                hidden:false,
                icon:"Avatar"
            }
        },
    
    ]