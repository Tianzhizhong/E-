<template>
  <div id="hairdress">
    <div class="staple">
      <div class="biao">
        <a>{{hairdresstitle1}}</a>
        <b>全部商品</b>
      </div>
      <div class="shop12">
        <div class="photo12" v-for="(item,index) in hairdressList" :key="index">
          <i>
            <img :src="item.photo" alt>
          </i>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="brand">
      <div class="biao1">
        <a>{{hairdresstitle2}}</a>
      </div>
      <div class="hot_brand">
        <div class="hot_brand1" v-for="(item,index) in hairdress2List" :key="index">
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
  name: "hairdress",
  created() {
    this.getclassify12();
  },
  computed: {
    ...Vuex.mapState({
      hairdressList: state => state.Hairdress.hairdresslist,
      hairdresstitle1: state => state.Hairdress.title1,
      hairdress2List: state => state.Hairdress.hairdress2list,
      hairdresstitle2: state => state.Hairdress.title2
    })
  },
  methods: {
    ...Vuex.mapActions({
      getclassify12: "Hairdress/getActionsclassify12"
    })
  }
};
</script>
<style>
#hairdress {
  width: 300px;
  height: 100%;
  margin-top: 40px;
  float: right;
}
.staple {
  width: 300px;
  height: 180px;
}
.biao {
  display: flex;
  justify-content: space-between;
}
.shop12 {
  display: flex;
  flex-wrap: wrap;
}
.photo12 {
  width: 86px;
  height: 116px;
  margin-left: 10px;
}
.photo12 i img {
  width: 86px;
  height: 86px;
}
.photo12 span {
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
