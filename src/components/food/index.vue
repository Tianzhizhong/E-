<template>
  <div id="cloth">
    <div class="yifu">
      <div class="title">
        <a>{{clothtitle}}</a>
        <b>全部商品</b>
      </div>
      <div class="shop">
        <div class="photo" v-for="(item,index) in clothList" :key="index">
          <i>
            <img :src="item.photo" alt>
          </i>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  created() {
    this.getclassify3();
  },
  computed: {
    ...Vuex.mapState({
      clothList:state => state.Food.clothslist,
      clothtitle:state => state.Food.title2
    })
  },
  methods: {
    ...Vuex.mapActions({
      getclassify3: "Food/getActionsclassify3"
    })
  }
};
</script>
<style>
#cloth {
  width: 300px;
  height: 100%;
  margin-top: 40px;
  float: right;
}
.yifu {
  width: 300px;
  height: 270px;
}
.title {
  display: flex;
  justify-content: space-between;
  width: 300px;
}
.shop {
  width: 300px;
  height: 253px;
  display: flex;
  flex-wrap: wrap;
}
.photo {
  width: 86px;
  height: 116px;
  margin-top: 20px;
  margin-left: 10px;
}
.photo i img {
  width: 86px;
  height: 86px;
}
.photo span {
  display: inline-block;
  margin-left: 10px;
}
</style>


