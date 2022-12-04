<template>

	<div class="card-container">
		<div class="top">
			<span>{{contentType}}</span>
			<img :src="cardConfigs.icon" alt="{{socialMedia}} icon">
		</div>

		<div class="bottom">
			<p>{{data}}</p>
			<div>
				<img src="../../public/icon-up.svg" alt="Up arrow" v-if="!lost">
				<img src="../../public/icon-down.svg" alt="Up arrow" v-else>
				<span :class="{'lost-followers-text-color': lost}">{{numToday}}%</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps<{
	socialMedia: string,
	contentType: string,
	data: string,
	numToday: number,
	lost: boolean
}>()


const cardConfigs = ref({
	icon: ''
})

function setCardConfigs(){
	const socialMediaLowerCase = props.socialMedia.toLowerCase()
	switch(socialMediaLowerCase){
		case 'facebook':
			cardConfigs.value.icon = '/public/icon-facebook.svg'		
			break
		case 'twitter':
			cardConfigs.value.icon = '/public/icon-twitter.svg'
			break
		case 'instagram':
			cardConfigs.value.icon = '/public/icon-instagram.svg'
			break
		case 'youtube':
			cardConfigs.value.icon = '/public/icon-youtube.svg'
			break
		default:
			cardConfigs.value.icon = '/public/favicon.png'
			
	}
}

onMounted(() => {
	setCardConfigs()
})

</script>

<style scoped>
.card-container {
	display: flex;
	flex-direction: column;

	background: hsl(225, 100%, 98%);
	max-width: 400px;
	padding: 1.3rem;
	border-radius: 10px;
	
	cursor: pointer;
	font-family: 'Inter-Bold', sans-serif;
	color: hsl(228, 12%, 44%);
}

.card-container:hover {
	background: hsl(227, 47%, 96%);
}

.card-container > div {
	display: flex;
	justify-content: center;
	margin: .3rem .5rem;
}

.card-container .top, .card-container .bottom{
	justify-content: space-between;
}
.top{
	font-size: .9rem;
}

.top img{
	height: 100%;
}

.bottom{
	align-items: baseline;
	color: hsl(163, 72%, 41%);
	font-size: .8rem;
}
.bottom > p{
	font-size: 2rem;
	color: #000;
	margin-bottom: 0;
}

.bottom img{
	margin-right: .4rem;
}


.lost-followers-text-color{
	color: hsl(356, 69%, 56%);
}

</style>
