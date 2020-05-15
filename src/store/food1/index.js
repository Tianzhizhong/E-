import {
    getclassify4
} from '@/api/api.js'
import { list } from "postcss";
export default {
    state: {
        food1list: [],
        title1: "",
        food2list:[],
        title2:""
    },
    mutations: {
        getmutationsclassify(state, params) {
            var arr = [];
            arr.push(params)
            for (var i = 0; i < arr.length; i++) {
                var res = arr[i]
                //console.log(res[0])
                state.food1list = res[0].list
                //console.log( state.food1list)
                state.title1 = res[0].title
                state.food2list=res[1].list
                state.title2=res[1].title
            }
        }
    },
    actions: {
        async getActionsclassify4({ commit }, params) {
            let data = await getclassify4(params)
            //console.log(data)
            commit("getmutationsclassify", data.cate_list)
            //console.log(data.cate_list)
        }

    },
    namespaced: true
}