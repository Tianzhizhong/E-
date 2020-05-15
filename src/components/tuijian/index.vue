<template>
  <aside>
    <div class="hot">
      <div class="hot_shop">
        <a>{{classifytitle}}</a>
        <div class="shops">
          <div class="shop" v-for="(item,index) in classifyList " :key="index" @click="handlepage()">
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
  name: "tui",
  computed: {
    ...Vuex.mapState({
      classifyList: state => state.Tui.hotlist,
      classifytitle: state => state.Tui.title
    })
  },
  methods: {
    ...Vuex.mapActions({
      getclassify: "Tui/getActionclassify"
    }),
    handlepage(){
      this.$router.push("/goodslist")
    }
  },
  created() {
    this.getclassify();
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
.hot_shop {
  width: 300px;
  height: 308px;
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
  justify-content: space-around;
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


