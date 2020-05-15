<template>
  <div id="food">
    <div class="staple">
      <div class="biao">
        <a>{{food1title1}}</a>
        <b>全部商品</b>
      </div>
      <div class="shop1">
        <div class="photo1" v-for="(item,index) in food1List" :key="index">
          <i>
            <img :src="item.photo" alt>
          </i>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="brand">
      <div class="biao1">
        <a>{{food2title2}}</a>
      </div>
      <div class="hot_brand">
        <div class="hot_brand1" v-for="(item,index) in food2List" :key="index">
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
  created() {
    this.getclassify4();
  },
  computed: {
    ...Vuex.mapState({
      food1List: state => state.Food1.food1list,
      food1title1: state => state.Food1.title1,
      food2List: state => state.Food1.food2list,
      food2title2: state => state.Food1.title2
    })
  },
  methods: {
    ...Vuex.mapActions({
      getclassify4: "Food1/getActionsclassify4"
    })
  }
};
</script>
<style scoped>
#food {
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
.shop1 {
  display: flex;
  flex-wrap: wrap;
}
.photo1 {
  width: 86px;
  height: 116px;
  margin-left: 10px;
}
.photo1 i img {
  width: 86px;
  height: 86px;
}
.photo1 span {
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
  height:80px;
  margin-left: 10px;
}
.hot_brand1 i img {
  width: 107px;
  height: 45px;
}
</style>

