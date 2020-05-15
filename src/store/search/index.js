import{
    getsearch
} from '@/api/api.js'
export default{
    state:{
        searchlist:[]
    },
    mutations: {
        
    },
    actions:{
    async getActionsearchlist(){
        let data=await getsearch()
        console.log(data)
    }
    },
    namespaced: true
}