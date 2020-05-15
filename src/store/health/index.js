import {
    getclassify8
} from '@/api/api.js'
import { list } from "postcss";
export default {
    state: {
        healthlist: [],
        title1: "",
        health2list: [],
        title2: ""
    },
    mutations: {
        getmutationsclassify(state, params) {
            var arr = [];
            arr.push(params)
            for (var i = 0; i < arr.length; i++) {
                var res = arr[i]
                state.healthlist = res[0].list
                state.title1 = res[0].title
                state.health2list = res[1].list
                state.title2 = res[1].title
            }
        }
    },
    actions: {
        async getActionsclassify8({ commit }, params) {
            let data = await getclassify8(params)
            commit("getmutationsclassify", data.cate_list)
        }
    },
    namespaced: true
}