<template>
  <div id="lift">
    <div class="staple">
      <div class="biao">
        <a>{{lifttitle1}}</a>
        <b>全部商品</b>
      </div>
      <div class="shop10">
        <div class="photo10" v-for="(item,index) in liftList" :key="index">
          <i>
            <img :src="item.photo" alt>
          </i>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="brand">
      <div class="biao1">
        <a>{{lifttitle2}}</a>
      </div>
      <div class="hot_brand">
        <div class="hot_brand1" v-for="(item,index) in lift2List" :key="index">
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
  name: "lift",
  created() {
    this.getclassify10();
  },
  computed: {
    ...Vuex.mapState({
      liftList: state => state.Lift.liftlist,
      lifttitle1: state => state.Lift.title1,
      lift2List: state => state.Lift.lift2list,
      lifttitle2: state => state.Lift.title2
    })
  },
  methods: {
    ...Vuex.mapActions({
      getclassify10: "Lift/getActionsclassify10"
    })
  }
};
</script>
<style scoped>
#lift {
  width: 300px;
  height: 100%;
  margin-top: 40px;
  float: right;
}
.staple {
  width: 300px;
  height: 380px;
}
.biao {
  display: flex;
  justify-content: space-between;
}
.shop10 {
  display: flex;
  flex-wrap: wrap;
}
.photo10 {
  width: 86px;
  height: 116px;
  margin-left: 10px;
}
.photo10 i img {
  width: 86px;
  height: 86px;
}
.photo10 span {
  display: inline-block;
  margin-left: 20px;
  margin-top: -10px;
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