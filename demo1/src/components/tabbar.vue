<template>
	<div class="tabbar">
		<item txt="首页" mark='home' :sel="selected" @change="getVal">
			<img src="../assets/images/1_normal.png" alt="" slot="normalImg"/>
			<img src="../assets/images/1_active@2x.png" alt="" slot="activeImg"/>
		</item>
		<item txt="书影音" mark='audio' :sel="selected" @change="getVal">
			<img src="../assets/images/2_normal.png" alt=""  slot="normalImg"/>
			<img src="../assets/images/2_active.png" alt="" slot="activeImg"/>
		</item>
		<item txt="广播" mark='broadcast' :sel="selected" @change="getVal">
			<img src="../assets/images/4.png" alt="" slot="normalImg"/>
			<img src="../assets/images/6.png" alt="" slot="activeImg"/>
		</item>
		<item txt="小组" mark='group' :sel="selected" @change="getVal">
			<img src="../assets/images/5.png" alt="" slot="normalImg"/>
			<img src="../assets/images/7.png" alt="" slot="activeImg"/>
		</item>
		<item txt="我的" mark='mine' :sel="selected" @change="getVal">
			<img src="../assets/images/3_normal.png" alt="" alt=""  slot="normalImg"/>
			<img src="../assets/images/3_active.png" alt="" slot="activeImg"/>
		</item>
	</div>
</template>

<script>
	import Item from './item'
	
	export default{
		components:{
			Item
		},
		data:function(){
			return {
				selected:"home"
			}
		},
		methods:{
			getVal:function(val){
				this.selected = val;
			}
		}
	}
</script>

<style>
	.tabbar{width: 100%;height: 64px;border-top: 1px solid #ccc;position: fixed;left: 0;bottom: 0;right: 0;}
</style>