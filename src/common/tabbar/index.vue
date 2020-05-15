<template>
    <div id="footer">
        <ul>
            <Router-link v-for="item in foot" tag="li" :to="item.to">
                <i class="iconfont" v-html="item.iconfont"></i>
                <span>{{item.com}}</span>
            </Router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            foot:[
            {
                iconfont:"&#xe543;",
                com:"首页",
                to:"/home"
            },
            {
                iconfont:"&#xe65f;",
                com:"分类",
                to:"/classify/tab1"//写完商品页面以后再换成list
            },
            {
                iconfont:"&#xe63a;",
                com:"萌爪联盟",
                to:"/cat"
            },
            {
                iconfont:"&#xe501;",
                com:"购物车",
                to:"/shopcar"
            },{
                iconfont:"&#xe61c;",
                com:"我的E宠",
                to:"/mine"
            }
            ]
        }
    }
}
</script>
<style lang="scss" >
    #footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1.04rem;
        border-top: 1px solid #ccc;
        background: #fff;
        z-index: 10;
        ul{
            display: flex;
            justify-content: space-around;
            li{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 1.04rem;
                color:#666;
                font-size: .28rem;
                .iconfont{
                    font-size: .4rem;
                }
            }
        }
    }
 #footer>ul .router-link-active{
        color:#c33;
    }
</style>