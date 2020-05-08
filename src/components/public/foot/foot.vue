<template>
  <div>
    <div class="footbox">
      <div class="footnav">
        <div :class="item.active?'footitem1':'footitem'" @click="tiaozhuan1(item)" v-for="item in iconnav">
          <div :class="'iconfont '+item.icon"></div>
          <div>{{item.title}}</div>
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
      }
    },
    props: {
      iconnav:{},
    },
    methods:{
      tiaozhuan1(item){
        if(item.id==0){
          this.$router.push({path:"/home"})
        }else {
          if(item.id==1){}
          this.$router.push({path:"/shop"})
        }
      },
    },
    mounted(){
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
  .footbox{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    .footnav{
      width: 100%;
      display: flex;
      justify-content: space-around;
      height: 50px;
      padding: 5px 0;
      line-height: 20px;
      .footitem,.footitem1{
        width: 25%;
        text-align: center;
        font-weight: normal;
        color: black;
      }
      .footitem1{
        color: #F18B36;
      }
    }
  }
</style>
