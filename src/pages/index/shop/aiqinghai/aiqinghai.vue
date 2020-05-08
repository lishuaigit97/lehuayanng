<template>
  <div class="container">
    <div class="headbox">
      <div>
        <img src="../../../../../static/img/推荐照片.png">
      </div>
      <div class="head1">
        <div style="font-size: 16px;font-weight: 600">成都后花园</div>
        <div style="font-size: 13px;color: #5C5C5C">人均消费：50元</div>
      </div>
      <div class="head2">
        <div>4.5分</div>
        <div>评分</div>
      </div>
    </div>
    <div class="bodybox">
      <div class="body1">
        <div class="txt1">折扣活动:</div>
        <div class="txt3">全场商品低至1折</div>
      </div>
      <div class="body2">
        <div class="txt1">满减优惠:</div>
        <div class="txt2">满100减30</div>
        <div class="txt2">满500减100</div>
        <div class="txt2">满800减200</div>
      </div>
      <div class="body3">
        <div class="txt1">有       礼:</div>
        <div class="txt3">最多15字的有礼描述</div>
      </div>
      <div class="body4">
        <div class="pailie1">
          <div class="iconfont icon-dingwei"></div>
          <div>三眼桥时间国际8号楼</div>
        </div>
        <div  class="pailie2">
          <div class="iconfont icon-daohang"></div>
          <div>导航</div>
        </div>
      </div>
      <div class="body5">
        <div class="pailie1">
          <div  class="iconfont icon-clock"></div>
          <div>12:00—19:00</div>
        </div>
        <div class="pailie1">
          <div>联系电话:</div>
          <div>12345678900</div>
        </div>
        <div class="pailie2">
          <div class="iconfont icon-dianhua3"></div>
          <div>拨号</div>
        </div>
      </div>
    </div>
    <div class="shangbox">
      <div class="shangpin">商品</div>
      <div class="shangjia">商家</div>
    </div>
    <div class="opitionbox">
      <div><span style="color: orange">温馨提示：</span>此页面信息由商家提供，消费者到店消费时，注意核实，理性消费，商家如有违法行为欢迎投诉举报</div>
    </div>

    <div class="bottombox">
      <div class="bottomitem" v-for="item in bottomarr">
        <div class="showimg">
          <img :src="apis+item.img">
        </div>
        <div class="bottom2">
            <div class="title1">{{item.describe}}</div>
            <div class="bottom3">
              <div><img src="../../../../../static/img/jiagebaohu.png"></div>
              <div class="title2">价格：</div>
              <div class="title3">{{item.price}}</div>
              <div class="title1">元</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        xiangqingid:'',
        bottomarr:[
          {img1:"../../../../static/img/naicha.png",title1:"产品服务产品描述产品服务产品描述产品服务产品描述产品服务产品描述",img2:"../../../../static/img/jiagebaohu.png",title2:"价格:",title3:"1000",title4:"元"},
          {img1:"../../../../static/img/naicha.png",title1:"产品服务产品描述产品服务产品描述产品服务产品描述产品服务产品描述",img2:"../../../../static/img/jiagebaohu.png",title2:"价格:",title3:"1000",title4:"元"}
        ]
      }
    },
    props: {},
    methods:{
      getdata(){
        let _this = this
        var data = {
          merchantId:this.xiangqingid,
        }
        this.axios.post(this.apis+"/api/commodity/index",data).then((res)=>{
          // console.log(res,'getdata')
          _this.bottomarr=res.data.data
        })
      }
    },
    mounted(){
    },
    created() {
      this.xiangqingid = this.$route.query.id
      this.getdata()
    },
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    .headbox{
      display: flex;
      justify-content: space-between;
      margin: 10px 20px;
      line-height: 30px;
      border-bottom: 1px solid #cccccc;
      padding: 0px 0px 10px 0px ;
    }
    .head1{
      margin-left: -50px;
      padding: 10px 0 0 0px;;
    }
    .head2{
      width: 60px;
      height: 60px;
      letter-spacing: 3px;
      text-align:center;
      border-left: 1px solid #cccccc;
      padding: 15px 0 0 20px;
      font-size: 13px;
    }
    .bodybox{
      width: 90%;
      margin-left: 5%;
      letter-spacing: 2px;

      .body1{
        display: flex;
        justify-content: left;
      }
      .body2{
        display: flex;
        justify-content: left;
        padding: 15px 0 ;
      }
      .body3{
        display: flex;
        justify-content: left;
      }
      .body4{
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
        height: 20px;
        line-height: 20px;
      }
      .body5{
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
      }
      .pailie1{
        display: flex;
        justify-content:center;
        color: #5C5C5C;
      }
      .pailie2{
        display: flex;
        flex-direction: row;
        border: 1px solid #F18B36;
        border-radius: 3px;
        color: #F18B36;
        height: 20px;
        line-height: 20px;
      }
      .txt1{
      font-size: 13px;
       font-weight: 600;
      }
      .txt2{
        color: #F18B36;
        border: 1px solid #F18B36;
        font-size: 12px;
        margin: 0 3px;
        height: 20px;
        line-height: 20px;
      }
      .txt3{
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #F18B36;
        background-color: #FFECDD;
      }
    }
    .shangbox{
      display: flex;
      justify-content:left;
      margin: 20px 0;
      .shangpin{
        background-color: #F18B36;
        color: #FFECDD;
        width: 70px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        font-size: 15px;
        text-align: center;
        margin: 0 25px ;
      }
      .shangjia{
        width: 70px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        font-size: 15px;
        text-align: center;
        border: 1px solid black;
      }
    }
    .opitionbox{
      background-color: #F7F7F7;
      width: 90%;
      margin-left: 5%;
      padding: 10px 15px;
      box-sizing: border-box;
      font-size: 13px;
      line-height: 20px;

    }
    .bottombox{
      width: 90%;
      margin-left: 5%;
      .bottomitem{
       display: flex;
        justify-content: space-between;
        position: relative;
        margin: 20px 0;
        .showimg{
          img{
            width: 80px;
            height: 80px;
          }
        }
        .title1{
          font-size: 14px;
          padding: 0 10px;
        }
        .title2{
          font-size: 16px;
          padding: 0 3px;
        }
        .title3{
         color: #F18B36;
          font-size: 16px;

        }
        .title4{

        }
        .bottom2{
          display: flex;
          flex-direction: column;
        }
        .bottom3{
          display: flex;
          justify-content: space-around;
          position: absolute;
          right: 0px;
          bottom: 0px;
          height: 16px;
          line-height: 16px;
        }
      }
    }

  }
</style>
