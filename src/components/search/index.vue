<template>
  <div class="search">
    <div class="heade">
      <i class="iconfont" @click="handlesearch()">&#xe65b;</i>
      <input type="text" placeholder="搜索你喜欢的宝贝">
      <h2>搜索</h2>
    </div>
    <div class="hot">
      <p>
        <i>
          <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/rmss.png" alt>
        </i>
        <span>热品推荐</span>
      </p>
      <div class="label">
        <a>优卡</a>
        <a>now</a>
        <a>液体钙</a>
        <a>泪痕</a>
        <a>拜宠清</a>
        <a>幼犬</a>
        <a>牛油果</a>
        <a>狗粮</a>
        <a>狗狗玩具</a>
        <a>美毛粉</a>
        <a>宝路</a>
        <a>消毒</a>
        <a>狗狗香波</a>
        <a>项圈</a>
        <a>冠能</a>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex"
export default {
  created () {
    this.getSearchlist();
  },
  methods: {
    ...Vuex.mapActions({
      getSearchlist:"Search/getActionsearchlist"
    }),
    handlesearch(){
      this.$router.back()
    }
  },
};
</script>
<style scoped>
.heade {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.heade > i {
  font-size: 0.5rem;
}
input {
  width: 250px;
  height: 40px;
}
.hot> p {
  width: 100%;
  height:30px;
}
p > i > img {
  width: 20px;
  height: 20px;
  float: left;
}
p span {
  float: left;
  font-size: 16px;
}
.label{
   width: 100%;
   height: 128px;
   display: flex;
   flex-wrap: wrap;
   padding: 0 12px 23px;
}
.label a {
   width: 60px;
   height: 25px;
   display: block;
   padding: 3px 10px;
   margin: 10px 10px 0 0;
  color: #999;
  font-size: 12px;
  border:1px solid #cccccc;
  border-radius: 15px;
}
</style>


