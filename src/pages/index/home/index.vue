<template>
  <div class="container">
      <div class="picbox1">
        <img src="../../../../static/img/banner.png">
      </div>
      <div class="picbox2">
        <div v-for="item in picarr1" class="tupianbox">
          <div>
            <img :src="item.url">
          </div>
          <div>{{item.title}}</div>
        </div>
      </div>
    <div class="textbox1">
      <div class="tishibox">提示</div>
        <div class="wenbenbox">
          <div>使用</div>
          <div style="color: orange">惠民优惠券</div>
          <div>有机会再次获得福利哦！</div>
          <div class="iconfont icon-jiantou"></div>
        </div>
    </div>
    <div class="textbox2">
      <div class="daohanglist">
        <div v-for="item in daohangarr" @click="showcolor(item)" :class="item.active?'color1':'color2'">{{item.name}}</div>
      </div>
    </div>
    <div class="textbox3">
      <img src="../../../../static/img/标题样式.png">
      <div class="canyin">{{listtile}}</div>
    </div>
    <div class="bodybox">
      <div class="bobyitem" v-for="item in bodyarr" @click="getxiangqing(item)">
        <div class="imgxr">
          <img :src="apis+item.doorPhoto">
        </div>
        <div class="titlebox">
          <div class="title1">
            <div>{{item.name}}</div>
            <div class="iconfont icon-dianzan" ></div>
          </div>
          <div class="title2">{{item.licenseName}}</div>
          <div class="title3">
            <div>{{item.address}}</div>
            <div class="title4">
              <div class="iconfont icon-dingwei" ></div>
              <div>{{item.title4}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="textbox4">
      <div>查看更多</div>
      <div class="iconfont icon-jiantou"></div>
    </div>
    <!--<div class="footbox">-->
      <!--<div class="footnav">-->
      <!--<div :class="item.active?'footitem1':'footitem'" @click="tiaozhuan1(item)" v-for="item in iconarr">-->
        <!--<div :class="'iconfont '+item.icon"></div>-->
        <!--<div>{{item.title}}</div>-->
      <!--</div>-->
     <!--</div>-->
     <!--</div>-->
    <foot :iconnav="iconarr"></foot>
  </div>
</template>

<script>
  import  foot from "@/components/public/foot/foot"
  export default {
    components: {foot},
    data() {
      return {
        newarr:{},
        listtile:'',
        iconarr:[
          {icon:'icon-shouye_huaban_huaban',title:"首页",active:true,id:0},
          {icon:'icon-mall',title:"商城",active:false,id:1},
          {icon:'icon-wendang',title:"评选",active:false,id:2},
          {icon:'icon-wode',title:"我的",active:false,id:3},
        ],
        bodyarr:[
          {img:"../../../../static/img/推荐照片.png",title1:"成都后花园（爱情海店）",tilte2:"全场低至8.8折",title3:"成都市武侯区商鼎国际B座407",title4:"导航"},
          {img:"../../../../static/img/推荐照片.png",title1:"书亦烧仙草（科大路店）",tilte2:"全场8.8折",title3:"成都市武侯区商鼎国际B座407",title4:"导航"},
        ],
        daohangarr:[
          {title:'全部',active:true},
          {title:'餐饮',active:false},
          {title:'家居建材',active:false},
          {title:'服饰',active:false},
          {title:'商超',active:false},
          {title:'酒店',active:false},
          {title:'旅游',active:false},
        ],
       picarr1:[
         {url:'../../../../static/img/领福利icon.png',title:'领福利'},
         {url:'../../../../static/img/逛华阳icon.png',title:'逛华阳'},
         {url:'../../../../static/img/找相因icon.png',title:'找“相因”'},
         {url:'../../../../static/img/打卡icon.png',title:'打卡礼'},
       ],
        navid:'',
      }
    },
    props: {},
    methods:{
      getxiangqing(item){
        let _this = this
        this.$router.push({path: "/shop/aiqinghai",query:{id:item.id}})
      },
      getnav(){
        let _this = this
        var data = {
          otherCategoryId:2
        }
        this.axios.post(this.apis+"/api/category/index",data).then((res)=>{
          console.log(res,'res')
          for(let i =0;i<res.data.data.length;i++){
            res.data.data[i]['active'] = false
          }
          res.data.data[0].active = true
          _this.listtile =  res.data.data[0].name
          _this.navid = res.data.data[0].id
          _this.getdata()
          _this.daohangarr = res.data.data
        })
      },
      getdata(){
        let _this = this
        var data = {
          pageNo:1,
          pageSize:12,
          categoryParentId:1,
          name:'',
          orderField:'id',
          orderType:'asc',
        }
        console.log(this.apis)
        this.axios.post(this.apis+"/api/merchant/index",data).then((res)=>{
          console.log(res)
          _this.bodyarr = res.data.data

        })
      },
      showcolor(item){
        for(var i =0;i<this.daohangarr.length;i++){
          this.daohangarr[i].active=false
        }
        console.log(item.id)
        this.listtile = item.name
        this.navid = item.id
        item.active=true
        this.getdata()
      }
    },
    mounted(){
    },
    created() {
      this.getnav()
      // this.getdata()
    },
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    position: relative;
    .picbox1>img{
      width: 100%;
    }
    .picbox2{
      position: absolute;
      top: 140px;
      display: flex;
      justify-content: space-around;
      width: 90%;
      margin-left: 5%;
      background-color:rgba(255, 255, 255, 1);
      height: 95px;
      padding: 10px 0 0 0px;
      border-radius: 10px;
      box-shadow: 0px 3px 3px rgb(240,240,240);
      .tupianbox{
        width: 25%;
        text-align: center;
        font-weight:900;
        line-height: 30px;
      }
    }
    .textbox1{
      width: 90%;
      margin-left: 5%;
      background-color: #F7F7F7;
      height: 30px;
      margin-top: 120px;
      display: flex;
      justify-content: space-around;
      font-size: 13px;
      border-radius: 20px;
      color: #666666;
      .tishibox{
        background-color: orange;
        color: white;
        border-radius: 5px;
        line-height: 22px;
        width: 43px;
        font-size: 15px;
        text-align: center;
        height: 22px;
        position: relative;
        top: 5px;
        left: 10px;

      }

    }
    .wenbenbox{
      text-align: center;
      display: flex;
      justify-content: center;
      line-height: 30px;
    }
    .textbox2{
      width: 100%;
      font-size: 16px;
      color:#333333 ;
      margin: 20px 0;
      font-weight:400;
      box-sizing: border-box;
      .daohanglist{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 20px;
        box-sizing: border-box;
        overflow-x: auto;
        white-space: nowrap;
        .color1,.color2{
          color:#333333;
          display: block;
          padding:10px;
          font-size: 18px;
        }
        .color1{
          color:orange;
          font-size: 18px;
        }
      }
    }
    .textbox3{
      width: 100%;
      text-align: center;
      .canyin{
        font-size: 16px;
        margin-top: -20px;
      }
      img{
        width: 50%;
      }
    }
    .bodybox{
      width: 90%;
      margin-left: 5%;
      .bobyitem{
        margin: 10px;
        display: flex;
        justify-content: flex-start;
      }
      .imgxr{
        img{
          width: 70px;
          height: 70px;
        }
      }
      .titlebox{
        width: 70%;
        padding: 10px ;
        margin-top: -10px;
        .title1{
          display: flex;
          justify-content: flex-start;
          font-size: 18px;
          font-weight: 700;
        }
        .title2{
          font-size: 11px;
          color: #F18B36;
          background-color:#FFF7F0 ;
          height: 18px;
          width:100%;
          margin: 8px;
        }
        .title3{
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #C1C1C1;
          margin-bottom: 10px;
        }
        .title4{
          display: flex;
          justify-content: center;
        }
      }
    }
    .textbox4{
      display: flex;
      justify-content: center;
      font-size: 13px;
      color: #999999;
      margin-bottom: 50px;
    }
    /*.footbox{*/
      /*width: 100%;*/
      /*height: 40px;*/
      /*position: fixed;*/
      /*bottom: 0;*/
      /*left: 0;*/
      /*.footnav{*/
        /*width: 100%;*/
        /*display: flex;*/
        /*justify-content: space-around;*/
        /*.footitem,.footitem1{*/
        /*width: 25%;*/
        /*text-align: center;*/
         /*font-size: 12px;*/
          /*line-height: 20px;*/
      /*}*/
        /*.footitem1{*/
          /*color: #F18B36;*/
        /*}*/
      /*}*/
    /*}*/
  }
</style>
