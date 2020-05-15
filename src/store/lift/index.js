import {
    getclassify10
} from '@/api/api.js'
import { list } from "postcss";
export default {
    state: {
        liftlist: [],
        title1: "",
        lift2list: [],
        title2: ""
    },
    mutations: {
        getmutationsclassify(state, params) {
            var arr = [];
            arr.push(params)
            for (var i = 0; i < arr.length; i++) {
                var res = arr[i]
                state.liftlist = res[0].list
                state.title1 = res[0].title
                state.lift2list = res[1].list
                state.title2 = res[1].title
            }
        }
    },
    actions: {
        async getActionsclassify10({ commit }, params) {
            let data = await getclassify10(params)
            commit("getmutationsclassify", data.cate_list)
        }
    },
    namespaced: true
}