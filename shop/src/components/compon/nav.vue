<template>
  <div class="content">
    <div class="logo">
      <img src="" alt="">
    </div>
    <ul class="ul flexbox">
      <!-- 
          vue router-link传值
          <router-link :to="{name:'detail', query:{id:1}}">XXX</router-link>
          获取路由参数（要注意是 query ，还是 params 和 对应的 id 名?)
          这里是 query
          this.$route.query.id
         -->
      <li :class="item.active" v-for="(item,index) in nav" :key="index" @click="navFn(index)">
        <router-link tag="a" :to="{path:item.path,query:{id:item.query}}">{{item.txt}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Nav",
    data() {
      return {
        nav: [{
            path: "/",
            query: 1,
            txt: "我的主页",
            active:"active"
          },
          {
            path: "/product",
            query: 1,
            txt: "项目",
            active:""
          },
          {
            path: "/",
            query: 1,
            txt: "技术",
            active:""
          },
          {
            path: "/",
            query: 1,   
            txt: "我的相册",
            active:""
          },
          {
            path: "/",
            query: 1,
            txt: "过往",
            active:""
          },
        ]
      }
    },
    methods:{
      navFn(e){
        {
          let ev = e;
          console.log(e)
        }
      }




    }
  }

</script>

<style lang="less" scoped>
// set global variables
  @align: align;
  @color: color;
  .width-set(@widths:20%){
    width:@widths;
  }

  .content {
    .ul {
      li {
        // .width-set(25%);
        .width-set;
        text-@{align}: center;
        a {
          @{color}: #333333;
          font-weight: bold;
        }
        &:hover{
          background-@{color}:#6c63ff;
          a{
            @{color}:#ffffff;
          }
        }
      }

      li.active {
        a {
          @{color}: #6c63ff;
        }
        &:hover{
          background-@{color}:#6c63ff;
          a{
            @{color}:#ffffff;
          }
        }
      }
    }
  }

</style>
