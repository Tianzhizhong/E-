import {
    getbrand
} from '@/api/api.js'
export default {
    state: {
        brandlist: [],
    },
    mutations: {
        getmutationsbrand(state, params) {
            // var arr = []
            // arr.push(params)
            // for (var i = 0; i < arr.length; i++) {
            //         var res=arr[i]
            //         console.log(res)
            //          state.brandlist=res[i].list
            //          state.title1=res[i].title    
            // }
                   state.brandlist=params
                   console.log(state.brandlist)
        }

    },
    actions: {
        async getActionbrand({ commit }, params) {
            let data = await getbrand(params)
            commit("getmutationsbrand", data.brand)
            //console.log(data.brand)
        }
    },
    namespaced: true
}