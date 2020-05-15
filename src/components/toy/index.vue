<template>
  <div id="toy">
    <div class="staple">
      <div class="biao">
        <a>{{toytitle1}}</a>
        <b>全部商品</b>
      </div>
      <div class="shop3">
        <div class="photo3" v-for="(item,index) in toyList" :key="index">
          <i>
            <img :src="item.photo" alt>
          </i>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="brand">
      <div class="biao1">
        <a>{{toytitle2}}</a>
      </div>
      <div class="hot_brand">
        <div class="hot_brand1" v-for="(item,index) in toy2List" :key="index">
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
  name: "toy",
  created() {
    this.getclassify6();
  },
  computed: {
    ...Vuex.mapState({
      toyList: state => state.Toy.toylist,
      toytitle1: state => state.Toy.title1,
      toy2List: state => state.Toy.toy2list,
      toytitle2: state => state.Toy.title2
    })
  },
  methods: {
    ...Vuex.mapActions({
      getclassify6:"Toy/getActionsclassify6"
    })
  }
};
</script>
<style scoped>
#toy {
  width: 300px;
  height: 100%;
  margin-top: 40px;
  float: right;
}
.staple {
  width: 300px;
  height: 253px;
}
.biao {
  display: flex;
  justify-content: space-between;
}
.shop3 {
  display: flex;
  flex-wrap: wrap;
}
.photo3 {
  width: 86px;
  height: 116px;
  margin-left: 10px;
}
.photo3 i img {
  width: 86px;
  height: 86px;
}
.photo3 span {
  display: inline-block;
  margin-left: 20px;
  margin-top: -10px;
}
.hot_brand {
  width: 290px;
  height: 360px;
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

