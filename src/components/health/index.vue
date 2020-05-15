<template>
  <div id="health">
    <div class="banner">
      <a>
        <img
          src="https://img2.epetbar.com/nowater/2019-03/13/18/061224c841dfddf8327025eaf37397c9.jpg@!water"
          alt
        >
      </a>
    </div>
    <div class="staple">
      <div class="biao">
        <a>{{healthtitle1}}</a>
        <b>全部商品</b>
      </div>
      <div class="shop8">
        <div class="photo8" v-for="(item,index) in healthList" :key="index">
          <i>
            <img :src="item.photo" alt>
          </i>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="brand1">
      <div class="biao2">
        <a>{{healthtitle2}}</a>
      </div>
      <div class="hot_brand1">
        <div class="hot_brand2" v-for="(item,index) in health2List" :key="index">
          <i>
            <img :src="item.logo" alt>
            <span>{{item.name}}</span>
          </i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "snacks",
  created() {
    this.getclassify8();
  },
  computed: {
    ...Vuex.mapState({
      healthList: state => state.Health.healthlist,
      healthtitle1: state => state.Health.title1,
      health2List: state => state.Health.health2list,
      healthtitle2: state => state.Health.title2
    })
  },
  methods: {
    ...Vuex.mapActions({
      getclassify8: "Health/getActionsclassify8"
    })
  }
};
</script>
<style scoped>
#health {
  width: 300px;
  height: 100%;
  margin-top: 40px;
  float: right;
}
.banner{
    width:300px ;
    height:120px;
}
.banner a img{
    width:300px ;
    height:120px;
}
.staple {
  width: 300px;
  height: 253px;
}
.biao2 {
  display: flex;
  justify-content: space-between;
}
.shop8 {
  display: flex;
  flex-wrap: wrap;
}
.photo8 {
  width: 86px;
  height: 116px;
  margin-left: 10px;
}
.photo8 i img {
  width: 86px;
  height: 86px;
}
.photo8 span {
  display: inline-block;
  margin-left: 20px;
  margin-top: -10px;
}
.hot_brand1 {
  width: 290px;
  height:415px;
  display: flex;
  flex-wrap: wrap;
}
.hot_brand2 {
  width: 135px;
  height: 80px;
  margin-left: 10px;
  margin-top: -20px;
}
.hot_brand2 i img {
  width: 107px;
  height: 45px;
}
.hot_brand2 span{
    margin-left: 20px;
}
</style>