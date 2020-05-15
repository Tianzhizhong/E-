import {
    getclassify1
} from '@/api/api.js'
import { list } from "postcss";
export default {
    state: {
        guolist:[],
    },
    mutations: {
        getmutationsclassify(state, params) {
        //     var arr=[]
        //     arr.push(params)
        //   for(var i=0;i<arr.length;i++){
        //      var res=arr[i]
        //      for(var key in res){
        //         state.guolist.push(res[key].list) 
        //         state.title1res=[key].title
                
        //      }
        //   }
            state.guolist=params
           console.log( state.guolist)
        },
       
    },
    actions: {
        async getActionclassify({ commit }, params) {
            let data = await getclassify1(params);
            commit("getmutationsclassify",data.cate_list)
            console.log(data.cate_list)
            
            
        }
    },

    namespaced: true
}