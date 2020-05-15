import {
    getclassify12
} from '@/api/api.js'
import { list } from "postcss";
export default {
    state: {
        hairdresslist: [],
        title1: "",
        hairdress2list: [],
        title2: ""
    },
    mutations: {
        getmutationsclassify(state, params) {
            var arr = [];
            arr.push(params)
            for (var i = 0; i < arr.length; i++) {
                var res = arr[i]
                state.hairdresslist = res[0].list
                state.title1 = res[0].title
                state.hairdress2list = res[1].list
                state.title2 = res[1].title
            }
        }
    },
    actions: {
        async getActionsclassify12({ commit }, params) {
            let data = await getclassify12(params)
            commit("getmutationsclassify", data.cate_list)
        }
    },
    namespaced: true
}