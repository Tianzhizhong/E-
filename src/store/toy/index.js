import {
    getclassify6
} from '@/api/api.js'
import { list } from "postcss";
export default {
    state: {
        toylist: [],
        title1: "",
        toy2list: [],
        title2: ""
    },
    mutations: {
        getmutationsclassify(state, params) {
            var arr = [];
            arr.push(params)
            for (var i = 0; i < arr.length; i++) {
                var res = arr[i]
                state.toylist = res[0].list
                state.title1 = res[0].title
                state.toy2list = res[1].list
                state.title2 = res[1].title
            }
        }
    },
    actions: {
        async getActionsclassify6({ commit }, params) {
            let data = await getclassify6(params)
            console.log(data)
            commit("getmutationsclassify", data.cate_list)
        }
    },
    namespaced: true
}