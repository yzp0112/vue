<template>
	<div>
		<myheader bol="true">
			<img src="../../assets/images/10.png" alt="" class="rightImg" slot="right"/>
			<div slot="search" class="search">
				<input type="text" placeholder="影视 图片 唱片 小组等"/>
			<img src="../../assets/images/search.png" alt="" class="searchImg"/>
			<img src="../../assets/images/11.png" alt="" class="scanImg"/>
			</div>
		</myheader>
	</div>
</template>

<script>
	import myheader from '../../components/header'
	
	export default{
		components:{
			myheader
		}
	}
</script>

<style>
</style>