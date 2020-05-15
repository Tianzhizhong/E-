<template>
  <div id="traction">
    <div class="staple">
      <div class="biao">
        <a>{{tractiontitle1}}</a>
        <b>全部商品</b>
      </div>
      <div class="shop11">
        <div class="photo11" v-for="(item,index) in tractionList" :key="index">
          <i>
            <img :src="item.photo" alt>
          </i>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="brand">
      <div class="biao1">
        <a>{{tractiontitle2}}</a>
      </div>
      <div class="hot_brand">
        <div class="hot_brand1" v-for="(item,index) in traction2List" :key="index">
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
  name: "traction",
  created() {
    this.getclassify11();
  },
  computed: {
    ...Vuex.mapState({
      tractionList: state => state.Traction.tractionlist,
      tractiontitle1: state => state.Traction.title1,
      traction2List: state => state.Traction.traction2list,
      tractiontitle2: state => state.Traction.title2
    })
  },
  methods: {
    ...Vuex.mapActions({
      getclassify11: "Traction/getActionsclassify11"
    })
  }
};
</script>
<style scoped>
#traction {
  width: 300px;
  height: 100%;
  margin-top: 40px;
  float: right;
}
.staple {
  width: 300px;
  height:253px;
}
.biao {
  display: flex;
  justify-content: space-between;
}
.shop11 {
  display: flex;
  flex-wrap: wrap;
}
.photo11 {
  width: 86px;
  height: 116px;
  margin-left: 10px;
}
.photo11 i img {
  width: 86px;
  height: 86px;
}
.photo11 span {
  display: inline-block;
  margin-left: 20px;
  
}
.hot_brand {
  width: 290px;
  height: 415px;
  display: flex;
  flex-wrap: wrap;
   
}
.hot_brand1 {
  width: 135px;
  height: 80px;
  margin-left: 10px;
  margin-top: 10px;
}
.hot_brand1 i img {
  width: 107px;
  height: 45px;
}
</style>