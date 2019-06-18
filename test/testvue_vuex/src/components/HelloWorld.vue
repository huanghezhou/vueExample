<template>
	<div class="hello">
		<h2 class="test">{{$store.state.count}}</h2>
		<div>
			<button @click="handleAddClick(10)">增加</button>
			<button @click="handleReduceClick(10)">减少</button>
		</div>
		<div class="margin-top">异步操作</div>
		<div>
			<button @click="handleActionsAdd(10)">异步增加</button>
			<button @click="handleActionsReduce(10)">异步减少</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	data() {
		return {
			msg: "Welcome to Your Vue.js App"
		};
	},
	methods: {
		handleAddClick(n) {
			this.$store.commit("mutationsAddCount", n);
		},
		handleReduceClick(n) {
			this.$store.commit("mutationsReduceCount", n);
    },
    handleActionsAdd(n){
      this.$store.dispatch('actionsAddCount',n)
    },
    handleActionsReduce(n){
      this.$store.dispatch('actionsReduceCount',n)
    }
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
@test: test;
@color: color;
@marginTop:30px;
.@{test} {
	width: 100%;
	height: 100px;
	line-height: 100px;
	background-@{color}: #4c27d6;
	@{color}: #ffffff;
	&:hover {
		background-@{color}: #ff8400;
	}
}
button {
	width: 60px;
	height: 30px;
	margin-top: 60px;
	border-radius: 3px;
	&:hover {
		background-@{color}: #b327d6;
		@{color}: #ffffff;
		cursor: pointer;
	}
}
.margin-top{
  margin-top: @marginTop;
}
</style>
