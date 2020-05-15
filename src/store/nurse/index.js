import {
    getclassify9
} from '@/api/api.js'
import { list } from "postcss";
export default {
    state: {
        nurselist: [],
        title1: "",
        nurse2list: [],
        title2: ""
    },
    mutations: {
        getmutationsclassify(state, params) {
            var arr = [];
            arr.push(params)
            for (var i = 0; i < arr.length; i++) {
                var res = arr[i]
                state.nurselist = res[0].list
                state.title1 = res[0].title
                state.nurse2list = res[1].list
                state.title2 = res[1].title
            }
        }
    },
    actions: {
        async getActionsclassify9({ commit }, params) {
            let data = await getclassify9(params)
            commit("getmutationsclassify", data.cate_list)
        }
    },
    namespaced: true
}