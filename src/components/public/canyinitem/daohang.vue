<template>
  <div class="container">
    <div class="textbox2">
      <div class="daohanglist">
        <div v-for="item in daohangarr" @click="showcolor(item)" :class="item.active?'color1':'color2'">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        daohangarr:[
          {title:'全部',active:true},
          {title:'餐饮',active:false},
          {title:'家居建材',active:false},
          {title:'服饰',active:false},
          {title:'商超',active:false},
          {title:'酒店',active:false},
          {title:'旅游',active:false},
        ],
        navid:"",
      }
    },
    props: {},
    methods:{
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
          _this.daohangarr = res.data.data
        })
      },
      getdata(){
        let _this = this
        var data = {
          pageNo:1,
          pageSize:12,
          categoryParentId:this.navid,
          name:'',
          orderField:'id',
          orderType:'asc',
        }
        console.log(this.apis)
        this.axios.post(this.apis+"/api/commodity/index",data).then((res)=>{
          console.log(res)
          _this.bodyarr = res.data.data

        })
      },
      showcolor(item){
        for(var i =0;i<this.daohangarr.length;i++){
          this.daohangarr[i].active=false
        }
        this.$emit('kkk',item)
        this.navid = item.id
        item.active=true
        this.getdata()
      }
    },
    mounted(){
    },
    created() {
      this.getnav()
    },
  }
</script>

<style scoped lang="less">
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
</style>
