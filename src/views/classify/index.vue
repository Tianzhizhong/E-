<template>
   <div>
     <div id="Header">
     <router-link v-for="(item,index) in tab" :key="index" :to="item.to" tag="li">
       <span>{{item.text}}</span>
    </router-link>  
   <b @click="handlesearch"><img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" class="abs search"></b>
  </div>
  <keep-alive> 
  <router-view></router-view>
  </keep-alive>
   </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
        tab:[
          {
            text:"分类",
            to:"/classify/tab1"
          },
          {
            text:"品牌",
            to:"/classify/tab2"
          }
        ]
    }
  },
  methods: {
    handlesearch(){
      this.$router.push("/search")
    }
  }
  }
</script>
<style>
#Header {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fff;
  position: fixed;
  top:0;
  left:0;
  
}
#Header>li{
  margin-right: 20px;
}
b img{
  width: 14px;
  height: 14px;
  position: absolute;
  right: 10px;
  top:14px;
}
#Header>li>span{
  height: 38px;
  display: inline-block; 
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  font-size:12px;
  cursor: pointer;
}
#Header>.router-link-active{
    color:#c33;
    border-bottom:2px #ed4044 solid;
}

</style>

