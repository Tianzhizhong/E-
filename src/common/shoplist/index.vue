<template>
  <div class="con">
    <div class="content">
      <header>
        <div class="back">
          <a href>
            <i class="iconfont">&#xe65b;</i>
          </a>
        </div>
        <ul>
          <router-link v-for="item in meg" tag="li" :to="item.to">
            <p>{{item.con}}</p>
          </router-link>
        </ul>
        <div class="meg">
          <a href>
            <i class="iconfont">&#xe513;</i>
          </a>
          <a href>
            <i class="iconfont">&#xe62d;</i>
          </a>
        </div>
      </header>

      <div class="pic">
        <img
          src="https://img1.epetbar.com/2018-08/20/11/b0655b58a49d525f186d289f21b304b4.jpg?x-oss-process=style/cut&$1=500&$2=500"
          alt
        >
      </div>
      <div class="com_t1">
        <p class="com_t1_t">美国麦德氏 IN-Basic 宠物高单位活化益生菌 5g*1袋</p>
        <div class="com_t1_b">
          <div class="com_t1_bl">
            <span class="com_t1_bspan">￥7.00</span>
            <del>￥8.40</del>
          </div>
          <span class="pro">
            <a href>
              <img
                src="https://static.epetbar.com/static_wap/appmall/lib/goods/quality_assurance.png"
                alt
              >
            </a>
          </span>
        </div>
      </div>
      <div class="newcxmsg">
        <div class="newcxmsg_cx">促销</div>
        <div class="newcxmsg_b">
          <div class="newcxmsg_p">
            <p class="newcxmsg_hp">多件优惠</p>
            <p>买的多，省的多</p>
          </div>
          <div class="newcxmsg_d">></div>
        </div>
      </div>
      <div class="choose">
          <div class="choose_t">
              <span>已选:</span>
              <span class="choose_ts">整盒</span>
          </div>
          <div class="choose_b">
              <span>包装</span>
              <p class="choose_bp">单件</p>
              <p class="choose_bp">整盒装</p>
          </div>
      </div>
      <div class="buynum">
          <span class="buynum_s">购买数量</span>
          <button>-</button>
          <input type="text">
          <button>+</button>
      </div>
      <div class="address">
          <div class="address_t">
              <span>送至</span>
          </div>
          <div class="address_b">
              <div class="address_bt">
                  <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png" alt="">
                  <span>正品保证</span>
              </div>
              <div class="address_bt">
                  <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/freeshipping.png" alt="">
                  <span>99元包邮</span>
              </div>
              <div class="address_bt">
                  <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/thirtydays.png" alt="">
                  <span>30天退货</span>
              </div>
          </div>
      </div>
    </div>
    <div class="foooter">
      <div class="footer_left">
        <div class="icon_list">
          <i class="iconfont">&#xe618;</i>
          <span>收藏</span>
        </div>
        <div class="icon_list">
          <i class="iconfont">&#xe501;</i>
          <span>购物车</span>
        </div>
      </div>
      <div class="car">
        <span>加入购物车</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      meg: [
        {
          con: "商品",
          to: "shop"
        },
        {
          con: "详情",
          to: "xq"
        },
        {
          con: "评价",
          to: "pj"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.con {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  background: #ccc;
  .content {
    width: 100%;
    height: 100%;
    padding-bottom: 1rem;
    position: absolute;
    overflow: auto;
  }
  header {
    display: flex;
    height: 1rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    border-bottom: 1px solid #f3f3f3;
    background: #fff;
    ul {
      display: flex;
      .router-link-active {
        border-bottom: 2px solid #f03e3e;
      }
      li {
        font-size: 0.32rem;
        margin: 0 0.1rem;
      }
    }
    .meg {
      display: flex;
    }
    a {
      display: block;
      // width: .7rem;
      // height: .7rem;
      color: black;
      i {
        font-size: 0.32rem !important;
        margin-left: 0.2rem;
      }
    }
  }
  .pic {
    width: 100%;
    height: 7rem;
    background: pink;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .com_t1 {
    width: 100%;
    height: 1.4rem;
    background: #fff;
    padding-bottom: 0.2rem;
    padding: 0 0.2rem;
    .com_t1_t {
      font-size: 0.26rem;
      height: 0.76rem;
      border-bottom: 2px solid #ccc;
    }
    .com_t1_b {
      height: 0.7rem;
      line-height: 0.7rem;
      font-size: 0.24rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      del {
        margin-left: 0.2rem;
        font-size: 0.2rem;
      }
      .com_t1_bspan {
        color: #f03e3e;
      }
      .pro {
        width: 1.56rem;
        height: 0.5rem;
        img {
          width: 1.46rem;
          height: 0.4rem;
        }
      }
    }
  }
  .newcxmsg {
    width: 100%;
    height: 0.6rem;
    margin: 0.2rem 0;
    display: flex;
    padding: 0 .2rem;
    font-size: .22rem;
    color:#999;
    align-items: center;
    background: #fff;
    .newcxmsg_cx{
        margin-right: .3rem;
        width: 10%
    }
    .newcxmsg_b{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .newcxmsg_p{
            display: flex;
            .newcxmsg_hp{
                color:red;
                border:1px solid red;
                margin-right: .2rem;
            }
        }
    }
  }
}
.choose{
    height: 1.84rem;
    width: 100%;
    background: #fff;
    margin-bottom: .2rem;
    font-size: .24rem;
    padding: 0 .2rem;
    color: #999;
    .choose_t{
        height: .82rem;
        width: 100%;
        border-bottom: 1px solid #ccc;
        line-height: .82rem;
        .choose_ts{
            color:#f03e3e;
        }
    }
    .choose_b{
        height: 1.02rem;
        width: 100%;
        line-height: 1.02rem;
        display: flex;
        align-items: center;
        text-align: center;
        span{
            margin-right: .5rem;
        }
        .choose_bp{
            background: #f03e3e;
            color: #fff;
            width: 1rem;
            height: .5rem;
            line-height: .5rem;
            margin-left: .2rem;
        }
    }
}
.buynum{
    height: 1.04rem;
    width: 100%;
    margin-bottom: .2rem;
    background: #fff;
    line-height: 1.04rem;
    font-size: .24rem;
    padding-left: .2rem;
    .buynum_s{
        margin-right: .5rem;
    }
    input{
        width: .8rem;
        height: .5rem;
        border:1px solid #ccc;
    }
    button{
        height: .5rem;
    }
}
.address{
    width: 100%;
    height: 1.66rem;
    background: #fff;
    margin-bottom: .2rem;
    font-size: .24rem;
    padding-left: .2rem;
    .address_t{
        height: .84rem;
        border-bottom: 2px solid #ccc;
        line-height: .84rem;
    }
    .address_b{
        height: .8rem;
        display: flex;
        align-items: center;
        .address_bt{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.2rem;
            img{
                width: .4rem;
                height: .4rem;
                margin-right: .2rem;
            }
        }
    }
}
.foooter {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #f5f6f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footer_left {
    display: flex;
    justify-content: space-around;
    width: 50%;
    height: 100%;
    .icon_list {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .iconfont {
        font-size: 0.3rem !important;
      }
      span {
        font-size: 0.2rem;
      }
    }
  }
  .car {
    width: 50%;
    height: 1rem;
    background: #f03e3e;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    font-size: 0.25rem;
    font-weight: 900;
  }
}
</style>
