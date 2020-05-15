import {
    getclassify13
} from '@/api/api.js'
import { list } from "postcss";
export default {
    state: {
        bathlist:[],
        title1:""
    },
    mutations: {
        getmutationsclassify(state, params) {
            var arr=[]
            arr.push(params)
          for(var i=0;i<arr.length;i++){
             var res=arr[i]
             for(var key in res){
                state.bathlist= res[key].list
                state.title1=res[key].title
             }
          }
        }
    },
    actions: {
        async getActionclassify13({ commit }, params) {
            let data = await getclassify13(params);
            commit("getmutationsclassify",data.cate_list)
            
        }
    },

    namespaced: true
}