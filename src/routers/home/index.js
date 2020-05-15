export default {
    path:"/home",
    name:'home',
    component:()=>import("@/views/home/index.vue"),
    // children:[
    //     {
    //         path:"goods",
    //         component:()=>("@/common/shoplist/index.vue")
    //     }
    // ]
}