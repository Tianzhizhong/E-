<template>
  <aside>
    <div class="clear">
      <div class="clear_shop">
        <a>{{title1}}</a>
        <div class="shops4">
          <div class="shop4" v-for="(item,index) in clearlist " :key="index">
            <i>
              <img :src="item.photo" alt>
            </i>
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "clear",
  computed: {
    ...Vuex.mapState({
      clearlist: state => state.Clear.clearlist,
      title1: state => state.Clear.title1
    })
  },
  methods: {
    ...Vuex.mapActions({
      getclassify7: "Clear/getActionclassify7"
    })
  },
  created() {
    this.getclassify7();
  }
};
</script>
<style scoped>
aside {
  width: 300px;
  height: 100%;
  margin-top: 40px;
  float: right;
}
.clear_shop {
  width: 300px;
  height: 308px;
}
.clear_shop a {
  padding-top: 10px;
  padding-left: 10px;
  display: inline-block;
}
.shops4 {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}
.shop4 {
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