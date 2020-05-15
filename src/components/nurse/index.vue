<template>
  <div id="nurse">
    <div class="staple">
      <div class="biao">
        <a>{{nursetitle1}}</a>
        <b>全部商品</b>
      </div>
      <div class="shop9">
        <div class="photo9" v-for="(item,index) in nurseList" :key="index">
          <i>
            <img :src="item.photo" alt>
          </i>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="brand">
      <div class="biao1">
        <a>{{nursetitle2}}</a>
      </div>
      <div class="hot_brand">
        <div class="hot_brand1" v-for="(item,index) in nurse2List" :key="index">
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
  name: "nurse",
  created() {
    this.getclassify9();
  },
  computed: {
    ...Vuex.mapState({
      nurseList: state => state.Nurse.nurselist,
      nursetitle1: state => state.Nurse.title1,
      nurse2List: state => state.Nurse.nurse2list,
      nursetitle2: state => state.Nurse.title2
    })
  },
  methods: {
    ...Vuex.mapActions({
      getclassify9: "Nurse/getActionsclassify9"
    })
  }
};
</script>
<style scoped>
#nurse {
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
.shop9 {
  display: flex;
  flex-wrap: wrap;
}
.photo9 {
  width: 86px;
  height: 116px;
  margin-left: 10px;
}
.photo9 i img {
  width: 86px;
  height: 86px;
}
.photo9 span {
  display: inline-block;
  margin-left: 20px;
  margin-top: -10px;
}
.hot_brand {
  width: 290px;
  height: 380px;
  display: flex;
  flex-wrap: wrap;
}
.hot_brand1 {
  width: 135px;
  height: 80px;
  margin-left: 10px;
}
.hot_brand1 i img {
  width: 100px;
  height: 45px;
}
</style>