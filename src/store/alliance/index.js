import {
    lists
} from '@/api/api.js'
export default {
    state: {
        list: []
    },
  
    mutations: {
        gitmutationsTupian(state,params){
            var arr =[];
            arr.push(params);
            for(var i =0;i<arr.length;i++){
                state.list=arr[i].list
                console.log(state.list)
                
            }
            //console.log(res)
                //state.list.push(paremt)
               console.log(state.list)
        }
    }, 
     actions: {
        async gitTupian({commit}) {
            let data = await lists()
            console.log(data.right_icon.image)
            commit("gitmutationsTupian", data.data)
            //console.log(data.data)
        }

    },
    namespaced: true
}