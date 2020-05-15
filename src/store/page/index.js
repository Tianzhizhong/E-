import{
    getpage
} from '@/api/api.js'
export default{
    state:{
        searchlist:[]
    },
    mutations: {
        getMutationgoods(state,params){
            state.searchlist = params;
        }
    },
    actions:{
    async getActiongoods({commit}){
        let data = await getpage()
        console.log(data.list)
        commit("getMutationgoods",data.list)
    }
    },
    namespaced: true
}