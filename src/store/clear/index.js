import {
    getclassify7
} from '@/api/api.js'
import { list } from "postcss";
export default {
    state: {
        clearlist:[],
        title1:""
    },
    mutations: {
        getmutationsclassify(state, params) {
            var arr=[]
            arr.push(params)
          for(var i=0;i<arr.length;i++){
             var res=arr[i]
             for(var key in res){
                state.clearlist= res[key].list
                state.title1=res[key].title
             }
          }
        }
    },
    actions: {
        async getActionclassify7({ commit }, params) {
            let data = await getclassify7(params);
            commit("getmutationsclassify",data.cate_list)
            
        }
    },

    namespaced: true
}