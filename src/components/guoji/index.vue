<template>
  <div class="guo">
    <div class="hot">
      <div class="hot_shop" v-for="(item,index) in classifyList" :key="index">
        <a>{{item.title}}</a>
        <div class="shops">
          <div class="shop" v-for="(item1,index) in item.list" :key="index">
            <i>
              <img :src="item1.photo||item1.logo" alt>
            </i>
            <span>{{item1.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "guo",
  computed: {
    ...Vuex.mapState({
      classifyList: state => state.Guo.guolist,
    })
  },
  methods: {
    ...Vuex.mapActions({
      getclassify1: "Guo/getActionclassify"
    })
  },
  created() {
    this.getclassify1();
  }
};
</script>
<style scoped>
.guo {
  width: 300px;
  height: 100%;
  margin-top: 40px;
  float: right;
}
.hot_shop {
  width: 300px;
  height: 400px;
}
.hot_shop a {
  padding-top: 10px;
  padding-left: 10px;
  display: inline-block;
}
.shops {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}
.shop {
  width: 96px;
  height: 116px;
  text-align: center;
}
i img {
  width: 86px;
  height: 86px;
  margin: 0 auto;
}
span {
  display: inline-block;
  font-size: 14px;
}
</style>

