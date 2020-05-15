import {
    getclassify3
}from '@/api/api.js'
import { list } from "postcss";
export default{
    state:{
        clothslist: [],
        title2:""  
    },
    mutations: {
        getmutationsclassify(state,params){
            var arr = []
            arr.push(params)
            for (var i = 0; i < arr.length; i++) {
                var res = arr[i]
                for (var key in res) {
                    state.clothslist=res[key].list
                    state.title2 = res[key].title
                    //console.log(state.title2)
                }
            }
        }
    },
    actions:{
        async getActionsclassify3({commit},params){
            let data=await getclassify3(params)
            //console.log(data)
            commit("getmutationsclassify",data.cate_list)
        }     
    },
    namespaced: true
}
