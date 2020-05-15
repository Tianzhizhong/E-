<template>
  <div id="mine">
    <div class="Head">
      <i class="iconfont" @click="handleBack">&#xe65b;</i>
      <h2>我的E宠</h2>
      <i class="iconfont">&#xe62d;</i>
    </div>
    <div class="top_img">
      <div class="pic">
        <i class="iconfont">&#xe655;</i>
        <i class="iconfont">&#xe62d;</i>
      </div>
      <div class="pic1">
        <a>
          <img src="https://static.epetbar.com/static_wap/appmall/avatar/dog.png" alt>
        </a>
        <span>登陆</span>
        <span>|</span>
        <span>注册</span>
      </div>
      <div class="pic2">
        <li>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/22/08/71ff7f9ee43b98e8c68cb150f3f03169.png"
            alt
          >
        </li>
        <li>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/22/08/d3d0bc1a081b6f0412b6f045863865be.png"
          >
        </li>
        <li>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/22/08/e6f08976d0cf4a51d7eb209ba4c89df7.png"
          >
        </li>
        <li>
          <img
            src="https://img2.epetbar.com/nowater/2019-01/31/14/de8b18448de149a49288d3a2f6be91fe.png"
          >
        </li>
      </div>
    </div>
    <div class="myorder">
      <span>
        <img
          src="https://img2.epetbar.com/nowater/2018-11/22/09/390880ba4e224747ebde28b56fe807da.png"
        >
      </span>
      <div class="pic3">
        <i>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/22/09/fb45b8f54a662a0574c941ffb4de2d88.png"
            alt
          >
          <span>待付款</span>
        </i>
        <i>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/22/09/51435308ce6c089a450fd3ab77a5520b.png"
            alt
          >
          <span>待收货</span>
        </i>
        <i>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/22/09/e0aac3c323912454b6b0c4222d3c0edd.png"
            alt
          >
          <span>待评价</span>
        </i>
        <i>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/22/09/c3109afb1d05a016e31394cff7e6bb99.png"
            alt
          >
          <span>退款记录</span>
        </i>
        <i>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/22/09/77d6a175fa1a030b57826f7c5bcda252.png"
            alt
          >
          <span>国际订单</span>
        </i>
      </div>
    </div>
    <div class="wallet">
      <span>
        <img
          src="https://img2.epetbar.com/nowater/2018-11/22/09/b5103c1385810f1a1f76891c8ee6d3ef.png"
          alt
        >
      </span>
      <div class="pic4">
        <a>
          0
          <p>优惠卷</p>
        </a>
        <a>
          0
          <p>E宠币</p>
        </a>
        <a>
          0.00
          <p>余额</p>
        </a>
        <a>
          0.00
          <p>红包</p>
        </a>
      </div>
    </div>
    <div class="myservice">
      <span>
        <img
          src="https://img2.epetbar.com/nowater/2018-11/22/09/1cadc7c68de1db0b2ef68929b5a97bd6.png"
          alt
        >
      </span>
      <div class="pic5">
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/28/16/4322689f4d28ec8ba8e4eff73a333803.png"
          >
          <p>联系方式</p>
        </a>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/28/17/d3813a6151551b28c2b34c358f4afd3c.png"
          >
          <p>超频预售</p>
        </a>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/22/09/5e73c64777a9468146843c538aad2543.png"
          >
          <p>我的团购</p>
        </a>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/28/17/42ae00bbb4a33fa804b0d852e0233c19.png"
          >
          <p>我的收藏</p>
        </a>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/28/17/97a4b02ff70fe492684838bf022d6cc9.png"
          >
          <p>随手送礼</p>
        </a>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/22/09/8563e3584dd6756bdd0ad23e3ee808e7.png"
          >
          <p>我的兑换</p>
        </a>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/28/17/c2a952ea1e481e67f7f0223574b93afd.png"
          >
          <p>我的关注</p>
        </a>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/22/09/928fe6cbd944c114206ace04f9094489.png"
          >
          <p>萌抓联盟</p>
        </a>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-11/28/17/1574544034bb0653a49d69c337a2db3c.png"
          >
          <p>我的捐赠</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mine",
  methods: {
    handleBack(){
      this.$router.back();
    }
  },
};
</script>
<style>
/* #mine{
  flex: 1;
  overflow: auto;
} */
.Head {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Head > i {
  font-size: 0.5rem;
}
.top_img {
  width: 100%;
  height: 207px;
  background: chocolate;
}
.pic > i {
  font-size: 0.5rem;
  margin: 10px 10px;
}
.pic {
  width: 100%;
  height: 41px;
  display: flex;
  justify-content: space-between;
}
a img {
  width: 70px;
  height: 70px;
}
.pic1 {
  display: flex;
  margin-top: 20px;
}
.pic1 span {
  display: block;
  margin-top: 30px;
  margin-left: 10px;
}
.pic2 {
  width: 355px;
  height: 35px;
  background: #252525;
  border-radius: 15px 15px 0px 0px;
  margin: 40px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.pic2 > li > img {
  width: 63px;
  height: 16px;
}
.myorder {
  width: 355px;
  height: 116px;
  border-radius: 15px;
  background: #f3f4f5;
  margin: 30px auto;
}
.myorder span img {
  width: 111px;
  height: 16px;
  margin: 10px 10px;
}
.myorder i img {
  width: 24px;
  height: 24px;
}
.pic3 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}
.pic3 i span {
  margin-top: 10px;
}
.wallet {
  width: 355px;
  height: 116px;
  border-radius: 15px;
  background: #f3f4f5;
  margin: 30px auto;
}
.wallet span img {
  width: 111px;
  height: 16px;
  margin: 10px 10px;
}
.pic4 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.pic4 a {
  width: 83px;
  height: 49px;
  text-align: center;
  margin: 10px;
  color: red;
  font-weight: 900;
}
.pic4 a p {
  margin-top: 10px;
  color: black;
  font-weight: 100;
}
.myservice {
  width: 355px;
  height: 261px;
  background: #f3f4f5;
  border-radius: 15px;
  margin: 30px auto;
}
.myservice span img {
  width: 111px;
  height: 16px;
  margin: 10px 10px;
}
.myservice a img {
  width: 25px;
  height: 25px;
}
.pic5 {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.pic5 a{
  width: 60px;
  height: 52px;
  margin:10px 12px;
}
.pic5 a img{
  margin-left: 10px;
}
.pic5 a p{
  margin-top:5px; 
} 
</style>

