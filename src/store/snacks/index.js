import {
    getclassify5
} from '@/api/api.js'
import { list } from "postcss";
export default {
    state: {
        snackslist: [],
        title1: "",
        snacks2list: [],
        title2: ""
    },
    mutations: {
        getmutationsclassify(state, params) {
            var arr = [];
            arr.push(params)
            for (var i = 0; i < arr.length; i++) {
                var res = arr[i]
                state.snackslist = res[0].list
                state.title1 = res[0].title
                state.snacks2list = res[1].list
                state.title2 = res[1].title
            }
        }
    },
    actions: {
        async getActionsclassify5({ commit }, params) {
            let data = await getclassify5(params)
            commit("getmutationsclassify", data.cate_list)
        }
    },
    namespaced: true
}