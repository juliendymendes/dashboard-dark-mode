<template>
	<section class="content">
		<h2>Overview - Today</h2>
		<div class="cards-container">
			
				<OverviewCard/>
				<OverviewCard/>
				<OverviewCard/>
				<OverviewCard/>
				<OverviewCard/>
				<OverviewCard/>
				<OverviewCard/>
				<OverviewCard/>
			
		</div>
	</section>
</template>

<script setup lang="ts">
import OverviewCard from './OverviewCard.vue';
</script>

<style scoped>
.content{
	margin: 3rem 3rem;
}

.content h2{
	font-family: 'Inter-Bold', sans-serif;
	color: hsl(228, 12%, 44%);
}
.cards-container{
	margin: 2rem 0;
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
