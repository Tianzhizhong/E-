import {
    getclassify2
} from '@/api/api.js'
import { list } from "postcss";
export default {
    state: {
        clothslist: [],
        title2:""
    },
    mutations: {
        getmutationsclassify(state, params) {
            var arr = []
            arr.push(params)
            for (var i = 0; i < arr.length; i++) {
                var res = arr[i]
                for (var key in res) {
                    state.clothslist=res[key].list
                    state.title2 = res[key].title
                }
            }
        }
    },
    actions: {
        async getactionsclassify2({ commit }, params) {
            let data = await getclassify2(params)
            commit("getmutationsclassify", data.cate_list)
            //console.log(data.cate_list)
        }
    },

    namespaced: true
}
