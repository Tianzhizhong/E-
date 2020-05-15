import http from "../utils/http";
export const getHome = ()=>http("get","/api/v3/index/main.html?do=getDynamicV415&pet_type=dog&version=415&is_single=0&system=wap&isWeb=1")
export const Banner = ()=>http("get","/api/v3/index/main.html?do=getStaticV415&cdn_version=20190406000322&pet_type=dog&version=415&is_single=0&system=wap&isWeb=1")
export const Timegoods = ()=>http("get","/api/v3/index/main.html?do=getDynamicV415&pet_type=dog&version=415&is_single=0&system=wap&isWeb=1")


export const list = ()=>http("get","/api/v3/union/trial/Main.html?page=1&petType=dog&cate=0&system=wap&isWeb=1&version=303&_=1554260453818")

export const lists = ()=>http("get","/api/v3/union/trial/Main.html?page=1&petType=dog&cate=0&system=wap&isWeb=1&version=303&_=1554260453818")


//田
export const getclassify = () => http("get", "/api/v3/goods/category/main.html?do=getChildren&owner=88888&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554214495138")

export const getclassify1 = () => http("get", "/api/v3/goods/category/main.html?do=getChildren&owner=55&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554350839217")

export const getclassify2 = () => http("get", "/api/v3/goods/category/main.html?do=getChildren&owner=4377&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554381060750")

export const getclassify3 = ()=>http("get","/api/v3/goods/category/main.html?do=getChildren&owner=4377&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554381060750")

export const getclassify4 = ()=>http("get","/api/v3/goods/category/main.html?do=getChildren&owner=5&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554460140877")

export const getclassify5 = ()=>http("get","/api/v3/goods/category/main.html?do=getChildren&owner=6&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554603110424")

export const getclassify6=()=>http("get","/api/v3/goods/category/main.html?do=getChildren&owner=53&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554607838614")

export const getclassify7=()=>http("get","/api/v3/goods/category/main.html?do=getChildren&oexwner=4315&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554608540044")

export const getclassify8=()=>http("get","/api/v3/goods/category/main.html?do=getChildren&owner=48&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554609318359")

export const getclassify9=()=>http("get","/api/v3/goods/category/main.html?do=getChildren&owner=49&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554610910007")

export const getclassify10=()=>http("get","/api/v3/goods/category/main.html?do=getChildren&owner=54&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554629372634")

export const getclassify11=()=>http("get","/api/v3/goods/category/main.html?do=getChildren&owner=2652&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554630413100")

export const getclassify12=()=>http("get","/api/v3/goods/category/main.html?do=getChildren&owner=2651&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554631189005")

export const getclassify13=()=>http("get","/api/v3/goods/category/main.html?do=getChildren&owner=4334&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1554635106658")

export const getsearch=()=>http("get","/api/json/wapdata.html?inajax=1&t=1554639813900&callback=jQuery17106285808979858316_1554639813865&jsoncallback=EpetWap.Dynamic.action&app=search&_=1554639813900")

export const getbrand=()=>http("get","/api/v3/brand/list/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_=1554689064045")

export const getpage=()=>http("get","/api/v3/goods/list/main.html?version=358&brandid=0&page=2&orderby=def_desc&cateid=756&pet_type=dog&extend_pam=&real_wid=&region=&system=wap&isWeb=1&_=1554815002261")