import {
    getclassify
} from '@/api/api.js'
import { list } from "postcss";
export default {
    state: {
        hotlist:[],
        title:""
    },
    mutations: {
        getmutationsclassify(state, params) {
            var arr=[]
            arr.push(params)
          for(var i=0;i<arr.length;i++){
             var res=arr[i]
             for(var key in res){
                state.hotlist= res[key].list
                state.title=res[key].title
             }
          }
        }
    },
    actions: {
        async getActionclassify({ commit }, params) {
            let data = await getclassify(params);
            commit("getmutationsclassify",data.cate_list)
            
        }
    },

    namespaced: true
}