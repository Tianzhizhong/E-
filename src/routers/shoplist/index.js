export default {
    path:"/goods",
    name:"goods",
    component:()=>import("@/common/shoplist"),
    children:[
        {
            path:"xq",
            component:()=>import("@/common/xq")
        },
        {
            path:"pj",
            component:()=>import("@/common/pj")
        }
    ]
}