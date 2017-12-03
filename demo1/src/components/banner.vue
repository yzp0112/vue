<template>
	<div class="banner">
		<div class="swiper-container" :class="swiperid">
			<div class="swiper-wrapper">
				<slot name="swiper-con"></slot>
			</div>
			<div :class='{"swiper-pagination":paginationshow}' :style='{"text-align":paginationdesition}'></div>
		</div>
	</div>
</template>

<script>
	import '../assets/libs/swiper/js/swiper.min.js'
	export default{
		props:{
			swiperid:{
				type:String,
				default:''
			},
			paginationshow:{
				type:Boolean,
				default:true
			},
			paginationdesition:{
				type:String,
				default:'center'
			},
			paginationType:{
				type:String,
				default:'bullets'
			},
			autoplay:{
				type:Number,
				default:2000
			},
			loop:{
				type:Boolean,
				default:true
			},
			direction:{
				type:String,
				default:"horizontal"
			},
			effect:{
				type:String,
				default:'slide'
			}
		},
		mounted:function(){
			var that = this;
			new Swiper('.'+that.swiperid,{
				direction:that.direction,
				loop:that.loop,
				pagination:'.swiper-pagination',
				paginationType:that.paginationType,
				autoplay:that.autoplay,
				effect:that.effect
			})
		}
	}
</script>

<style>
	@import '../assets/libs/swiper/css/swiper.min.css';
	.banner{width: 100%;height: 128px;overflow: hidden;}
	.banner .swiper-container{height:128px;}
	.banner .swiper-container .swiper-slide img{width: 100%;height:100%;}
	.swiper-pagination-bullet-active{background: #fff;}
	
</style>