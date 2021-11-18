const menus = [
    {
        key:'/',
        title:'首页',
        redirect:'/home'
    },
    {
        key:'/login',
        title:'登录',
        component:'Login'
    },
    {
        key:'/home',
        title:'首页',
        component:'Layer',
        children:[
            {
                key:'/home/list',
                title:'测试列表',
                component:'List'
            }
        ]
    },

    // {
    //     key:'/home',
    //     title:'首页',
    //     component:'Home',
        
    // },
    // {
    //     key:'/home/list',
    //     title:'测试列表',
    //     component:'List'
    // },
    {
        key:'/eval',
        title:'评价',
        component:'Eval'
    },
    {
        key:'/task',
        title:'任务',
        component:'Task'
    },
    {
        key:'/record',
        title:'记录',
        component:'Record'
    },
    {
        key:'/my',
        title:'我的',
        component:'My'
    }
]

export default menus;