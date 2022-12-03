<template>
	
	<section class="cards-container">
		
			<SocialMediaCard/>
			<SocialMediaCard/>
			<SocialMediaCard/>
			<SocialMediaCard/>
		
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
