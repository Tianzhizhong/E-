<template>
  <div id="page">
    <div class="head">
      <i class="iconfont tu">&#xe65b;</i>
      <h2>商品列表</h2>
      <i class="iconfont tu1">&#xe62d;</i>
    </div>
    <div class="search">
      <b>
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" alt>
      </b>
      <router-link tag="input" to="/search" type="text" placeholder="点击搜索商品"></router-link>
    </div>
    <div class="nav">
      <ul class="nav1">
        <li>默认</li>
        <li>销量</li>
        <li>价格</li>
        <li>筛选</li>
      </ul>
      <ul class="nav2">
        <li>
          <a>品牌</a>
        </li>
        <li>
          <a>商品功效</a>
        </li>
        <li>
          <a>物理变形</a>
        </li>
        <li>
          <a>价格区间</a>
        </li>
      </ul>
    </div>
    <BScroll>
    <div class="shops">
     <ul class="list">
       <li v-for="item in searchlist">
        <div class="shop">
          <img :src="item.photo" alt="">
        </div>
        <div class="listpro">
          <a><p>{{item.subject}}</p></a>
          <div class="cu">
            <span>
              <img src="https://static.epetbar.com/static_wap/appmall/lib/list/cu.png?version=2016071303" alt="">
            </span>
          </div>
          <div class="price">¥{{item.market_price}}</div>
          <div class="evaluate">
            <span>{{item.comments}}</span>
            <span class="ml5">{{item.sold}}</span>
          </div>
          <div class="addcar"><img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" alt=""></div>
        </div>
       </li>
     </ul>
    </div>
     </BScroll>
  </div>
</template>
<script>
import Vuex from 'vuex';
export default {
  created () {
    this.getpage()
  },
  computed: {
     ...Vuex.mapState({
            searchlist:state=>state.page.searchlist,
     })
  },
  methods:{
    ...Vuex.mapActions({
      getpage:"page/getActiongoods"
    })
  }
}
</script>
<style scoped>
.head {
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tu {
  margin-left: -30px;
}
.tu1 {
  margin-right: -30px;
}
.search {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.search b {
  position: absolute;
  left: 10px;
  top: 20px;
}
.search b img {
  width: 16px;
  height: 16px;
}
.search input {
  width: 355px;
  height: 40px;
  text-indent: 20px;
  border-radius: 5px;
}
.nav {
  width: 100%;
  height: 71px;
}
.nav1 {
  width: 100%;
  height: 41px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ccc;
}
.nav2 {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav2 li {
  padding: 5px;
}
.nav2 li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: #f1f5f6;
  border-radius: 2px;
}
.shops{
  width: 100%;
  height: 100%;
  padding-bottom: 1.04rem;
}
.list li{
width: 100%;
height:123px; 
}
.shop{
  width: 120px;
  height:123px;
  float: left;
  margin-right: 10px;
}
.shop img{
 width:100px;
 height:100px;
}
.listpro{
  width:245px;
  height:103px;
  float:left;
    
}
.cu{
  margin-top: 20px;
}
.cu span img{
  width: 17px;
  height:17px;
}
.price{
  color: red;
  margin-top: 10px;
}
.evaluate{
  margin-top: 10px;
}
.addcar{
  position: relative; 
}
.addcar img{
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right:20px; 
}
</style>


