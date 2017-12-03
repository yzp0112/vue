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
		<banner swiperid="go">
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/swiper/3.jpg" alt="" />
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/swiper/4.jpg" alt="" />
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/swiper/5.jpg" alt="" />
			</div>
		</banner>
	</div>
</template> 

<script>
	import myheader from '../../components/header'
	import Banner from '../../components/banner'
	
	export default{
		components:{
			myheader,
			Banner
		}
	}
</script>

<style>
</style>