<template>
  <div id="snacks">
    <div class="staple">
      <div class="biao">
        <a>{{snackstitle1}}</a>
        <b>全部商品</b>
      </div>
      <div class="shop2">
        <div class="photo2" v-for="(item,index) in snacksList" :key="index">
          <i>
            <img :src="item.photo" alt>
          </i>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="brand">
      <div class="biao1">
        <a>{{snackstitle2}}</a>
      </div>
      <div class="hot_brand">
        <div class="hot_brand1" v-for="(item,index) in snacks2List" :key="index">
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
    this.getclassify5();
  },
  computed: {
    ...Vuex.mapState({
      snacksList: state => state.Snacks.snackslist,
      snackstitle1: state => state.Snacks.title1,
      snacks2List: state => state.Snacks.snacks2list,
      snackstitle2: state => state.Snacks.title2
    })
  },
  methods: {
    ...Vuex.mapActions({
      getclassify5: "Snacks/getActionsclassify5"
    })
  }
};
</script>
<style scoped>
#snacks {
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
.shop2 {
  display: flex;
  flex-wrap: wrap;
}
.photo2 {
  width: 86px;
  height: 116px;
  margin-left: 10px;
}
.photo2 i img {
  width: 86px;
  height: 86px;
}
.photo2 span {
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


