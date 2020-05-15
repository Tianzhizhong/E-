module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"https://mall.api.epet.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}
//https://mall.api.epet.com/v3/index/main.html?do=getDynamicV415&pet_type=dog&version=415&is_single=0&system=wap&isWeb=1