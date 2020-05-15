<template>
  <div id="tab2">
      <div class="brands" v-for="(item,index) in Tab2list" :key="index">
    <div class="head">
      <span>——{{item.title}}——</span>
    </div>
      <div class="list" >
      <ul v-for="(item1,index) in item.list" :key="index">
        <li>
          <img :src="item1.logo" alt="" >
          <p>{{item1.name}}</p>
          <span>{{item1.address}}</span>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "brand",
  created() {
    this.getbrand();
  },
  computed: {
    ...Vuex.mapState({
      Tab2list: state => state.Brand.brandlist
    })
  },
  methods: {
    ...Vuex.mapActions({
      getbrand: "Brand/getActionbrand"
    })
  }
};
</script>
<style  scoped>
.head {
  width: 100%;
  height: 39px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list {
  width: 100%;
  display: flex;
    flex-wrap: wrap;

}
.list ul li {
  width: 111px;
  height: 107px;
  margin-left: 10px;
}
.list ul li img {
  width: 79px;
  height: 40px;
}
</style>
