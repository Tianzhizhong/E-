<template>
  <aside>
    <div class="bath">
      <div class="hot_shop">
        <a>{{bathtitle}}</a>
        <div class="shops">
          <div class="shop" v-for="(item,index) in bathList " :key="index">
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
  name: "bath",
  computed: {
    ...Vuex.mapState({
      bathList: state => state.Bath.bathlist,
      bathtitle: state => state.Bath.title1
    })
  },
  methods: {
    ...Vuex.mapActions({
      getclassify13: "Bath/getActionclassify13"
    })
  },
  created() {
    this.getclassify13();
  }
};
</script>
<style scoped>
aside {
  width: 6rem;
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