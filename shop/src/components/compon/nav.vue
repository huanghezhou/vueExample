<template>
  <div class="content">
      <div class="logo">
        <img src="" alt="">
      </div>
      <ul class="flexbox">
        <!-- 
          vue router-link传值
          <router-link :to="{name:'detail', query:{id:1}}">XXX</router-link>
          获取路由参数（要注意是 query ，还是 params 和 对应的 id 名?)
          这里是 query
          this.$route.query.id
         -->
        <li>
          <router-link :to="{name:'index',query:{id:1}}">我的主页</router-link>
        </li>
        <li>
          <router-link :to="{name:'index',query:{id:1}}"></router-link>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
  </div>
</template>

<script>
  export default {
    name:"Nav",
    data(){
      return{

      }
    }
  }

</script>
