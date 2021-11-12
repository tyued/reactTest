const menus = [
    {
        key:'/',
        title:'首页',
        redirect:'/home'
    },
    {
        key:'/home',
        title:'首页',
        // component:'Home',
        subs:[
            {
                key:'/home/list',
                title:'测试列表',
                component:'List'
            }
        ]
    },
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