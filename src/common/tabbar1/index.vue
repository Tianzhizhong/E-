<template>
  <div class="nv">
    <ul>
      <li @click="handleClick(0)" :class="activeIndex == 0?'active':''">为您推荐</li>
      <li @click="handleClick(1)" :class="activeIndex == 1?'active':''">E宠国际</li>
      <li @click="handleClick(2)" :class="activeIndex == 2?'active':''">狗狗服饰</li>
      <li @click="handleClick(3)" :class="activeIndex == 3?'active':''">狗狗窝垫</li>
      <li @click="handleClick(4)" :class="activeIndex == 4?'active':''">狗狗主粮</li>
      <li @click="handleClick(5)" :class="activeIndex == 5?'active':''">狗狗零食</li>
      <li @click="handleClick(6)" :class="activeIndex == 6?'active':''">狗狗玩具</li>
      <li @click="handleClick(7)" :class="activeIndex == 7?'active':''">狗狗清洁</li>
      <li @click="handleClick(8)" :class="activeIndex== 8?'active':''">狗狗保健</li>
      <li @click="handleClick(9)" :class="activeIndex == 9?'active':''">狗狗护理</li>
      <li @click="handleClick(10)" :class="activeIndex == 10?'active':''">狗狗生活</li>
      <li @click="handleClick(11)" :class="activeIndex == 11?'active':''">狗狗牵引</li>
      <li @click="handleClick(12)" :class="activeIndex == 12?'active':''">狗狗美容</li>
      <li @click="handleClick(13)" :class="activeIndex == 13?'active':''">出游洗澡</li>
    </ul>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "tab1",
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    handleClick(index) {
      this.activeIndex = index;
      this.$emit("handleToggle", index);
    }
  }
};
</script>
<style>
.nv {
  width: 70px;
  height: 700px;
  float: left;
  padding-top:40px;
   overflow: auto;
}
.nv > ul {
  display: flex;
  flex-direction:column;
  width: 70px;
  height: 780px;
 
}
.nv > ul > li {
  width: 70px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.nv > ul > li.active {
  color: brown;
  background: #ccc;
}
</style>


