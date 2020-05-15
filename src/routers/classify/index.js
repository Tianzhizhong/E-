export default{
    path:"/classify",
    component:()=>import("@/views/classify"),
    name:"classify",
    meta:{
        tabbarflag:true,
      }, 
    children: [{
        path: "tab1",
        component:()=>import("@/components/tab1"),
        meta:{
          tabbarflag:true,
        }
      },
      {
        path: "tab2",
        component:()=>import("@/components/tab2"),
        meta:{
          tabbarflag:true
        } 
      },
      ],
      
}