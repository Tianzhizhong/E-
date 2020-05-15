import {getHome,Banner,Timegoods}from '../../api/api'; 
export default {
    state: {
        homeList:[],
        bannerImg:[],
        menus:[],
        goods:[],
        scroll:[],
        video:[],
        small:[],
        small_t:[],
        brand_banner:[],
        brand_bannerl:[]
    }, 
    mutations: {
        getMutationHomeList(state, params) {
            var arr = []; 
                   
           for (var key in params) {
                if (params[key].index >= 3776000) {
                    arr.push(params[key].data.goods)
                }
            }
             //console.log(arr)
             for (var i = 0; i < arr.length; i++) {
               var res = arr[i]; 
               //console.log(res)
               if(res){
                   for (var j = 0; j < res.length-1; j++) {
                        //console.log(res[j])
                        state.homeList.push(res[j])
                    }
               }               
             }
        console.log(state.homeList)
        },
        getMutationsBanner(state,params){
            state.bannerImg = params.res;
            state.menus = params.req
            state.video = params.video;
            state.small = params.small;
            state.small_t = params.small_t;
            state.brand_banner = params.brand_banner;
            state.brand_bannerl = params.brand_bannerl;
            console.log(state.brand_banner)
        },
        getMutationsGoods(state,params){
            state.goods = params.c
            state.scroll = params.brr
            console.log(state.scroll)
        }
    }, 
    actions: {
        async getActionsHomeList( {commit}) {
            let data = await getHome(); 
           // console.log(data.data) 

            commit("getMutationHomeList", data.data)
        },
        async getActionsBanner({commit}){
            let data = await Banner();
            let res = data.datas.list[0].data.images
            let req = data.datas.list[0].data.menus
            let video = data.datas.list[31].data.videos
            let small = data.datas.list[24].data.goods
            let small_t = data.datas.list[21].data.goods
            let brand_banner = data.datas.list[25].data.images
            let brand_bannerl = data.datas.list[25].data.brand_banner
            //console.log(video[0].cover.img_url)
            commit("getMutationsBanner",{res:res,req:req,video:video,small:small,small_t:small_t,brand_banner:brand_banner,brand_bannerl:brand_bannerl})
        },
        async getActionsTimegoods({commit}){
            let data = await Timegoods();
            var arr = []
            for(var key in data.data){
                arr.push(data.data[key])
            }
            var res = arr.slice(0,1)
            var req = res[0].data;
            var a = req.berserk.goods;
            var b = req.egroup.goods;
            var c = a.concat(b) 
            var brr = arr[2].data.slip_images
            console.log(brr)           
            commit("getMutationsGoods",{c:c,brr:brr})
        }, 
    },
    
    namespaced:true
}