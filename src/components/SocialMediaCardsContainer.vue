<template>
	
	<section class="cards-container">
		
			<SocialMediaCard 
				socialMedia="facebook" 
				user="@nathanf" 
				:numFollowers="1987" 
				:numFollowersToday="12" 
				:lostFollowers="false"/>
			<SocialMediaCard 
				socialMedia="twitter" 
				user="@nathanf" 
				:numFollowers="1044" 
				:numFollowersToday="99" 
				:lostFollowers="false"/>
			<SocialMediaCard 
				socialMedia="instagram" 
				user="@realnathanf" 
				:numFollowers="11000" 
				:numFollowersToday="1099" 
				:lostFollowers="false"/>
			<SocialMediaCard 
				socialMedia="youtube" 
				user="Nathan F." 
				:numFollowers="8239" 
				:numFollowersToday="144" 
				:lostFollowers="true"/>
		
	</section>
</template>

<script setup lang="ts">
import SocialMediaCard from './SocialMediaCard.vue';

</script>

<style scoped>
.cards-container{
	margin: 3rem 3rem;
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr 1fr 1fr 1fr;
}


@media (max-width: 767.98px) { 
	.cards-container{
		grid-template-columns: 1fr ;
	}
}

</style>
