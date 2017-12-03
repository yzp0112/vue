<template>
	<div>
		<myheader txt="我的">
			<img src="../../assets/images/15.png" alt="" class="rightImg" slot="right"/>
		</myheader>
		<cell title="提醒">
			<img src="../../assets/images/4.png" alt="" slot='icon' class="cell-img"/>
			<img src="../../assets/images/icon_arrow_right.png" alt="" slot='icon' class="cell-right-img"/>
		</cell>
	</div>
</template>

<script>
	import myheader from '../../components/header'
	import Cell from '../../components/cell'
	
	export default{
		components:{
			myheader,
			Cell
		}
	}
</script>

<style>
</style>