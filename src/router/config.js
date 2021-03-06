const menus = [
    {
        key:'/',
        title:'首页',
        redirect:'/login'
    },
    {
        key:'/login',
        title:'登录',
        component:'Login'
    },
    {
        key:'/base',
        title:'基础框架',
        component:'layout',
        children:[
            {
                key:'/base',
                title:'首页',
                redirect:'/base/home',
            },
            {
                key:'/base/home',
                title:'首页',
                component:'Home',
            },
            {
                key:'/base/eval',
                title:'评价',
                component:'Eval',
            },
            {
                key:'/base/task',
                title:'任务',
                component:'Task',
            },
            {
                key:'/base/record',
                title:'记录',
                component:'Record',
            },
            {
                key:'/base/my',
                title:'我的',
                component:'My',
            }
        ]
    },
]

export default menus;