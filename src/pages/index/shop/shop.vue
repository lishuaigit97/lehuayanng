<template>
  <div class="container">
    <div class="serchbox">
      <div class="shurubox">
        <input v-model="keyword" type="text" placeholder="商户搜索"></input>
      </div>
      <div class="picbox1" @click="getdata">
        <img src="../../../../static/img/搜素icon.png">
      </div>
    </div>
    <daohang @kkk="clickdaoh"></daohang>
    <div class="paixubox">
      <div>默认排序</div>
      <div style="padding: 0 20px">折扣</div>
      <div>人气</div>
    </div>
    <div class="bodybox">
      <div class="bobyitem" v-for="item in bodyarr" @click="xiangqing(item)">
        <div class="imgxr">
          <img :src="apis+item.img">
        </div>
        <div class="titlebox">
          <div class="title1">
            <div>{{item.id}}</div>
            <div class="iconfont icon-dianzan" ></div>
          </div>
          <div class="title2">{{item.describe}}</div>
          <div class="title3">
            <div>{{item.title3}}</div>
            <div class="title4">
              <div class="iconfont icon-dingwei" ></div>
              <div>{{item.title4}}</div>
            </div>
          </div>
        </div>
        <div class="xianduan2"></div>
      </div>
    </div>
    <!--<div class="footbox">-->
      <!--<div class="footnav">-->
        <!--<div class="footitem" @click="tiaozhuan1">-->
          <!--<div class="iconfont icon-shouye_huaban_huaban "></div>-->
          <!--<div>首页</div>-->
        <!--</div>-->
        <!--<div class="footitem" @click="tiaozhuan2">-->
          <!--<div class="iconfont icon-mall "></div>-->
          <!--<div>商城</div>-->
        <!--</div>-->
        <!--<div class="footitem">-->
          <!--<div class="iconfont icon-wendang "></div>-->
          <!--<div>评选</div>-->
        <!--</div>-->
        <!--<div class="footitem" >-->
          <!--<div class="iconfont icon-wode "></div>-->
          <!--<div>我的</div>-->
        <!--</div>-->
       <!--</div>-->
      <!--</div>-->
    <foot :iconnav = "iconarr"></foot>
  </div>
</template>

<script>
  import daohang from "@/components/public/canyinitem/daohang";
  import  foot from "@/components/public/foot/foot"
  export default {
    components: {daohang,foot},
    data() {
      return {
        navid:"",
        iconarr:[
          {icon:'icon-shouye_huaban_huaban',title:"首页",active:false,id:0},
          {icon:'icon-mall',title:"商城",active:true,id:1},
          {icon:'icon-wendang',title:"评选",active:false,id:2},
          {icon:'icon-wode',title:"我的",active:false,id:3},
        ],
        bodyarr:[
          {img:"../../../../static/img/推荐照片.png",title1:"成都后花园（爱情海店）",tilte2:"全场低至8.8折",title3:"成都市武侯区商鼎国际B座407",title4:"导航",id:0},
          {img:"../../../../static/img/naicha.png",title1:"书亦烧仙草（科大路店）",tilte2:"全场8.8折",title3:"成都市武侯区商鼎国际B座407",title4:"导航"},
          {img:"../../../../static/img/naicha.png",title1:"书亦烧仙草（科大路店）",tilte2:"全场8.8折",title3:"成都市武侯区商鼎国际B座407",title4:"导航"},
          {img:"../../../../static/img/naicha.png",title1:"书亦烧仙草（科大路店）",tilte2:"全场8.8折",title3:"成都市武侯区商鼎国际B座407",title4:"导航"},
          {img:"../../../../static/img/naicha.png",title1:"书亦烧仙草（科大路店）",tilte2:"全场8.8折",title3:"成都市武侯区商鼎国际B座407",title4:"导航"},
        ],
        keyword:'',
      }
    },
    props: {},
    methods:{
      clickdaoh(){
        this.getdata()

      },
      getdata(){
        let _this = this
        var data = {
          pageNo:1,
          pageSize:12,
          categoryParentId:this.navid,
          name:this.keyword,
          orderField:'id',
          orderType:'asc',
        }
        console.log(this.apis)
        this.axios.post(this.apis+"/api/commodity/index",data).then((res)=>{
          console.log(res)
          _this.bodyarr = res.data.data
        })
      },
      xiangqing(item){
        if(item.id==0){
          this.$router.push({path: "/shop/aiqinghai"})
        }
      }
      // tiaozhuan1(e){
      //   this.$router.push({path:"/home"})
      // },
      // tiaozhuan2(e){
      //   this.$router.push({path:"/shop"})
      // },
    },
    mounted(){
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
  .container{
    .serchbox{
      width: 90%;
      margin-left: 5%;
      margin-top: 15px;
      border: 1px solid #B5B5B5;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      height: 2.8em;
      .shurubox>input{
        margin-left: 5px;
        border: none;
        outline: none;
        padding: 10px ;
      }
      .picbox1{
        margin-right: 10px;
        margin-top: 2px;
        border-left: 1px solid #B5B5B5;
        padding: 0 5px;
        height: 2.5em;
        line-height: 2.5em;
      }
    }
    .paixubox{
      display: flex;
      justify-content: left;
      font-size: 1.2em;
      margin-left: 20px;

    }
    .bodybox{
      width: 90%;
      margin-left: 5%;
      margin-top: 20px;
      .bobyitem{
        margin: 10px 0 ;
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
        width: 100%;
        padding: 10px ;
        margin-top: -10px;
        .title1{
          display: flex;
          justify-content: flex-start;
          font-size: 18px;
          font-weight: 700;
          line-height: 20px;
        }
        .title2{
          font-size: 11px;
          color: #F18B36;
          background-color:#FFF7F0 ;
          height: 18px;
          width: 80px;
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
          width: 20%;
          display: flex;
          justify-content: space-between;
          color: #888888;
        }
        .xianduan2{
          width: 100%;
          border-bottom: 1px solid black;
        }
      }
    }
  }
</style>
