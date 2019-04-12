<template>
  <div class="content">
    <div class="nav">
      <app-nav></app-nav>
    </div>
  </div>
</template>

<script>
  import Nav from './compon/nav'
  export default {
      name:"index",
      components:{
        appNav:Nav
      }
  }
</script>

<style scoped lang="less">


</style>
