<template>
	
	<div class="card-container" :class="cardConfigs.topBorderColor">
		<div class="user-container">
			<img :src="cardConfigs.icon" >
			<span>{{user}}</span>
		</div>

		<div class="num-followers-container">
			<span>{{numFollowers}}</span>
		
			<span>{{cardConfigs.followersOrSubscribers}}</span>
		</div>

		<div class="new-followers-container">
			<img src="/public/icon-up.svg" alt="Up arrow" v-if="!lostFollowers">
			<img src="/public/icon-down.svg" alt="Up arrow" v-if="lostFollowers">
			<span :class="{ 'lost-followers-text-color' : lostFollowers}">{{numFollowersToday}} Today</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps<{
	socialMedia: string,
	user: string,
	numFollowers: number,
	numFollowersToday: number,
	lostFollowers: boolean
}>()

const cardConfigs = ref({
	topBorderColor: '',
	icon: '',
	followersOrSubscribers: 'f o l l o w e r s'
})

function setCardConfigs(){
	const socialMediaLowerCase = props.socialMedia.toLowerCase()
	switch(socialMediaLowerCase){
		case 'facebook':
			cardConfigs.value.topBorderColor = 'facebook-border'
			cardConfigs.value.icon = '/public/icon-facebook.svg'		
			break
		case 'twitter':
			cardConfigs.value.topBorderColor = 'twitter-border'
			cardConfigs.value.icon = '/public/icon-twitter.svg'
			break
		case 'instagram':
			cardConfigs.value.topBorderColor = 'instagram-border'
			cardConfigs.value.icon = '/public/icon-instagram.svg'
			break
		case 'youtube':
			cardConfigs.value.topBorderColor = 'youtube-border'
			cardConfigs.value.icon = '/public/icon-youtube.svg'
			cardConfigs.value.followersOrSubscribers = 's u b s c r i b e r s'
			break
		default:
			cardConfigs.value.topBorderColor = 'facebook-border'
			cardConfigs.value.icon = '/public/favicon.png'
			
	}
}


onMounted(() => {
	setCardConfigs()
})
</script>

<style scoped>
.card-container{
	display: flex;
	flex-direction: column;

	background: hsl(225, 100%, 98%);
	max-width: 350px;
	padding: 2rem;
	border-radius: 10px;
	border-top: 5px solid;
	cursor: pointer;
	font-family: 'Inter-Bold', sans-serif;
	color: hsl(228, 12%, 44%);
}

.card-container:hover{
	background: hsl(227, 47%, 96%);
}

.card-container > div{
	display: flex;
	justify-content: center;
}

.card-container > div >  img{
	align-self: center;
}

.user-container > img{
	margin: 0 .7rem;
}

.num-followers-container{
	align-items: center;
	flex-direction: column;
	margin: 1rem 0
}

.num-followers-container :first-child{
	font-size: 3.7rem;
	color: #000;
}

.num-followers-container :last-child{
	text-transform: uppercase;
	font-family: 'Inter-Regular', sans-serif;
}

.new-followers-container{
	color: hsl(163, 72%, 41%);
}
.new-followers-container > img{
	margin: 0 .4rem;
}

.facebook-border{
	border-top-color:  hsl(208, 92%, 53%);
}

.twitter-border{
	border-top-color: hsl(203, 89%, 53%);
}

.instagram-border{
	border-top-color: hsl(329, 70%, 58%);
}

.youtube-border{
	border-top-color: hsl(348, 97%, 39%);
}

.lost-followers-text-color{
	color: hsl(356, 69%, 56%);
}


</style>
