<template>
  <div class="shoppcar">
    <div class="head">
      <i class="iconfont" @click="handleback">&#xe65b;</i>
      <h2>购物车</h2>
      <span>
        <a>编辑</a>
        <router-link class="iconfont" to="/search" tag="i">&#xe65f;</router-link>
      </span>
    </div>
    <div class="Cartbox">
      <div class="hbug">
        <i class="iconfont">&#xe62d;</i>
        <span>购物车已满36.00元了哦！</span>
        <a>超值换购</a>
      </div>
      <div>
        <div class="joinbuy">
          <p>
            <span>喵~再买22.00元，即可享受包邮哦（顺丰、EMS不包邮)</span>
          </p>
          <div class="box-shaow">
            <a>去凑单</a>
            <i>></i>
          </div>
        </div>
        <div class="checkbox">
          <input type="checkbox" value="1">
          <span>宠西部中央仓</span>
          <b>?</b>
        </div>
        <div class="shop">
          <input type="checkbox" value="2" class="ck"> 
            <img
              src="https://img1.epetbar.com/2018-12/07/09/e88ee1abfb88fe149be68a02e72610ed.jpg@!200w-b"
              alt
            >
          <div class="price">
          <img src="https://static.epetbar.com/static_web/wap/src/images/cart/noCargo.png" alt="">
          <p>小宠EHD 肠胃宝益生菌制剂 5g*5包</p>
          <i>
          <span>36.00</span>
         <em><button>-</button><input type="text" class="txt"><button>+</button></em>
          </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shoppcar",
  methods: {
    handleback(){
      this.$router.back();
    }
  },
};
</script>
<style scoped>
.head {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head > i {
  font-size: 0.5rem;
}
.head > span > a {
  margin-right: 5px;
  font-size: 18px;
}
.head > span > i {
  margin-right: 5px;
  font-size: 0.5rem;
}
.Cartbox {
  width: 100%;
  height: 263px;
}
.hbug {
  width: 100%;
  height: 48px;
  background: #fff7ea;
  display: flex;
  align-items: center;
  position: relative;
}
.Cartbox .hbug a {
  width: 74px;
  height: 26px;
  display: inline-block;
  border: 1px solid #ecb44b;
  text-align: center;
  line-height: 26px;
  border-radius: 5px;
  color: #ecb44b;
  padding: 2px 10px;
  position: absolute;
  right: 1em;
  top: 11px;
}
.joinbuy {
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  position: relative;
}
.joinbuy p {
  color: #363636;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
.joinbuy p span {
  font-size: 14px;
}
.box-shaow {
  width: 70px;
  height: 30px;
  background: #fff;
  padding-left: 10px;
}
.box-shaow a {
  color: red;
  text-align: right;
  line-height: 30px;
}
.box-shaow i {
  text-align: right;
  line-height: 30px;
}
.checkbox {
  width: 100%;
  height: 41px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.checkbox input {
  width: 20px;
  height: 20px;
  display: inline-block;
}
.checkbox span {
  font-size: 16px;
}
.checkbox b {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  display: inline-block;
  font-size: 13px;
  margin-top: 0px;
  background: #fbeacf;
  border: 1px solid #fbeacf;
  color: #ecb44b;
}
.shop {
  width: 100%;
  height: 106px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shop>.ck {
  width: 20px;
  height: 20px;
  display: inline-block;
}
.shop img {
  width: 85px;
  height: 85px;
}
.price{
  width: 245px;
  height: 85px;
}
.shop .price img{
  width:47px ;
  height:13px ;
  float: left;
}
.shop .price p{
  font-size:13px;
}
.price>i>em>.txt{
  width: 32px;
  height: 20px;
}
.price span{
  float: left;
}
.price em{
  float: right;
}
.price i{
  margin-top: 10px;
  display: block;
}
</style>