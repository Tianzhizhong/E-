<template>
<div class="call">
  <div class="header"  >
    <i class="iconfont icon-fanhui"></i>
    <div class="gg">萌爪联盟</div>
    <i class="iconfont icon-xinxi"></i>
  </div>
  <div class="top">
   <div class="nav">
    <img src="https://static.epetbar.com/static_web/wap/src/images/qpet/app/trial/bg_img_trial.jpg" alt="">
    <div class="ti">
      <!-- <i class="iconfont icon-fanhui"></i> -->
      <!-- <p><img :src="item.page_title_photo.image"></p>
      <span><img :src="item.right_icon.image"></span> -->
    </div>
    <div class="si">
       <li class="ll">
         <img src="https://static.epetbar.com/static_web/wap/src/images/qpet/app/trial/left_trial.png" alt="">
         <p>517</p>
         </li>
      
       <li class="lr">
         <img src="https://static.epetbar.com/static_web/wap/src/images/qpet/app/trial/left_trial.png" alt="">
         <p>2317</p>
         </li>
    </div>
  </div>
  <div class="litle">
    <div class="sa">
        <i class="iconfont icon-paihangbang"></i>
        <p>排行榜</p>
    </div>
    <div class="la">
        <img class="im" src="https://img1.epetbar.com/2014-09/17/853bee151bcf871503bcaab61413770f.gif?x-oss-process=style/fill&$1=150&$2=150" alt="">
        <img class="mii" src="https://img1.epetbar.com/2015-04/07/f65932ac458a39490f96e3ecbaceb677.jpg?x-oss-process=style/fill&$1=150&$2=150" alt="">
        <img class="miii" src="https://img1.epetbar.com/2018-09/15/10/1277e5ff2b7599307b126177a82e7e47.jpg?x-oss-process=style/fill&$1=150&$2=150" alt="">
        <img class="miiii" src="https://img1.epetbar.com/2017-04/10/08/85b939110918a67e0cdccc62c3dc10b5.jpg?x-oss-process=style/fill&$1=150&$2=150" alt="">
        <img class="miiiii" src="https://static.epetbar.com/static_web/wap/src/images/qpet/app/trial/more_rank.png" alt="">
    </div>
    <div class="hh">
        <p>nxsncc</p>
        <p>shscsk</p>
        <p>smkcskc</p>
        <p>xsxsxxsxxskxs</p>
        <p>更多</p>
    </div>
    <div class="aq">
        <ul>
            <li class="dog">狗狗</li>
            <li class="cat">猫猫</li>
        </ul>
    </div>
    <ul class="bao">
        <li><i class="iconfont icon-zhangshangyunweiicon_fuzhi-"></i>全部</li>
        <li><i class="iconfont icon-xin1"></i>精选</li>
        <li><i class="iconfont icon-bao"></i>主粮</li>
        <li><i class="iconfont icon-lingshi"></i>零食</li>
    </ul>
  </div>
  </div>
  <div class="bottom" v-for="item in list">
   <div class="sss">
     <img :src="item.user.avatar.image" alt="">
     <div class="oss">
     <h2>{{item.user.username}}</h2>
     <span>{{item.user.role.title}}</span>
     </div>
     <p>{{item.user.petmsg}}</p>
   </div>
   <dl class="pa">
     <dt><img :src="item.cover[0].image" alt=""></dt>
     <dd>{{item.title}}</dd>
   </dl>

   <ul class="ff">
     <li>{{item.showtime}}</li>
     <div class="ass">
     <li><i class="iconfont icon-guancha"></i>{{item.view_K}}</li>
     <li><i class="iconfont icon-xinxi"></i>{{item.zan}}</li>
     <li><i class="iconfont icon-xin1"></i>{{item.zan_k}}</li>
     </div>
   </ul>
  </div>
</div>
 
 
</template>


<script>
import Vuex from 'vuex'
export default {
  created() {
    this.gitTupian()
    // console.log(this.list)
  },
  methods: {
    ...Vuex.mapActions({
      gitTupian : 'alliance/gitTupian'
    })
  },
  computed:{
    ...Vuex.mapState({
      list: state =>state.alliance.list
    })
  }
}
</script>


<style>
.call{
    flex: 1;
    overflow: auto;
}
.header{
  width:100%;
  height:1rem;
  background:white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header .icon-fanhui{
   font-size:0.5rem;
}
.header .icon-xinxi{
   font-size:0.5rem;
}
.gg{
  font-size:0.3rem;
}
.top{
  height: 7.6rem;
  position: relative;
}
.nav{
  width: 100%;
  height:7.6rem;
  background: white;
  position: relative;
}
.nav>img{
  height: 7.6rem;
}
.nav>.ti{
  width: 100%;
  height: 0.5rem;

  position: absolute;
  top:0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav>.ti>p{
   color:turquoise;
   font-size:0.35rem;
   font-weight: 900;
}
.nav>.ti>span{
  color:turquoise;
  font-size:0.2rem;
}
.nav>.ti>.icon-fanhui{
  color:black;
  font-size: 0.5rem;
}
.si{
position: absolute; 
top:1.2rem;
left:0.8rem; 
width: 6rem;
height: 1.5rem;
border-radius:0.2rem;
 background: white;
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.nav>.si>.ll{
   width:3rem;
  height: 1rem;
  border-right: 0.02rem dashed turquoise;
  text-align: center;

}
.nav>.si>.ll>img{
  margin-left:1rem;
}
.nav>.si>.lr{
   width:3rem;
  height: 1rem;
   text-align: center;
}
.nav>.si>.lr>img{
  margin-left:1rem;
}
.litle{
    width: 100%;
    height: 4rem;
    background:white;
    position: absolute;
    bottom: 0;
}
.litle>.sa{
    width: 100%;
    height: 0.6rem;
    display: flex;
}
.litle>.sa>.icon-paihangbang{
    font-size: 0.5rem;
    color:darkcyan;
}
.litle>.sa>p{
    font-size: 0.3rem;
    height: 0.6rem;
    line-height: 0.6rem;
}
.la{
    width: 100%;
    height: 1rem;
    background: white;
    display: flex;
    justify-content: space-around;
}
.la>.im{
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    background: pink;
}
.la>.mii{
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
  
}
.la>.miii{
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    
}
.la>.miiii{
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
 
}
.la>.miiiii{
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
   
}
.hh{
    width: 100%;
    height: 0.5rem;
    display: flex;
   border-bottom: 0.1rem solid #edede8
}
.hh>p{
     margin-left:0.5rem;
}
.litle>.aq>ul{
    width: 2rem;
    height:0.6rem;
    background:#f5f2f8;
    border-radius: 0.5rem;
    display: flex;
    justify-content:space-around;
    align-items: center;
    margin: 0.2rem 2.8rem;
}
.litle>.aq>ul>.dog{
    width: 1rem;
    height: 0.6rem;
    line-height:0.6rem;
    border-radius: 0.5rem;
    text-align: center;
    color:white;
    background: #56f7e2;
}
.litle>.aq>ul>.cat{
    width: 1rem;
    height: 0.6rem;
    line-height:0.6rem;
    text-align: center;
    background:white;
    color:black;
    border-radius: 0.5rem;
}
.litle>.bao{
    height: 0.8rem;
    width: 100%;
    background: white;
    display: flex;
    justify-content:space-around;
    align-items: center;
    border-bottom:0.05rem solid #eae7ec;

}
.litle>.bao>li>.icon-xin1{
    color:#e35151;
}
.litle>.bao>li>.icon-bao{
    color:yellow;
}
.litle>.bao>li>.icon-lingshi{
    color:#7aa3d0;
}
.bottom{
width: 100%;
height:6rem;
border-bottom: 0.03rem solid #f2eeee;
}
.bottom>.sss{
width: 100%;
height: 1.5rem;
background:white;
display: flex;
justify-content: space-between;
align-items: center;
padding:0.2rem 0.4rem;
}
.bottom>.sss>img{
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
}
.bottom>.sss>.oss{
  width: 1.8rem;
  height: 0.8rem;


}
.bottom>.sss>.oss>h2{
  font-size: 0.3rem;
  color:black;
  margin-bottom:0.1rem;
}
.bottom>.sss>.oss>span{
  font-size: 0.25rem;
  width: 0.8rem;
  height: 0.6rem;
  background: rgb(228, 249, 227);
  color:rgb(111, 200, 176);
  
}

.bottom>.sss>p{
  width: 3.6rem;
  height: 0.3rem;
  background:white;
  font-size:0.25rem;
}
.bottom>.pa{
width: 100%;
height:4rem;
margin-left:0.3rem;

}
.bottom>.pa>dt>img{
  width: 6.9rem;
  height: 3.8rem;
  border-radius:0.1rem; 
}
.bottom>.pa>dd{
  font-size:0.3rem;
  margin-top:0.1rem;
}
.bottom>.ff{
  width: 100%;
  height: 1rem;
  background: white;
  margin-top:0.3rem;
  display: flex;
  justify-content: space-between;
 border-bottom: 0.1rem solid #ebe8e8;
 
}
.bottom>.ff>li{
   margin-top:0.3rem;
}
.bottom>.ff>.ass{
  width: 4rem;
  height: 0.5rem;
  display: flex;
  justify-content: space-around;
 margin-top:0.3rem;
}
</style>
