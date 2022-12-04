<template>
	<section class="content">
		<h2 :class="{'dark-mode-dark-text': store.isDarkModeActive}">Overview - Today</h2>
		<div class="cards-container">
			
				<OverviewCard
					social-media="facebook"
					content-type="Page views"
					data="87"
					:num-today="3"
					:lost="false"
				/>
				<OverviewCard
					social-media="facebook"
					content-type="Likes"
					data="52"
					:num-today="2"
					:lost="true"
				/>
				<OverviewCard
					social-media="instagram"
					content-type="Likes"
					data="5462"
					:num-today="2257"
					:lost="false"
				/>
				<OverviewCard
					social-media="instagram"
					content-type="Profile Views"
					data="52k"
					:num-today="1375"
					:lost="false"
				/>

				<OverviewCard
					social-media="twitter"
					content-type="Retweets"
					data="117"
					:num-today="303"
					:lost="false"
				/>

				<OverviewCard
					social-media="twitter"
					content-type="Likes"
					data="507"
					:num-today="553"
					:lost="false"
				/>

				<OverviewCard
					social-media="youtube"
					content-type="Likes"
					data="107"
					:num-today="19"
					:lost="true"
				/>

				<OverviewCard
					social-media="youtube"
					content-type="Total Views"
					data="1407"
					:num-today="12"
					:lost="true"
				/>
				
			
		</div>
	</section>
</template>

<script setup lang="ts">
import OverviewCard from './OverviewCard.vue';
import { useDarkModeStore } from '@/stores/darkmode';

const store = useDarkModeStore()
</script>

<style scoped>
.content{
	margin: 3rem 3rem;
	display: grid;
}

.content h2{
	font-family: 'Inter-Bold', sans-serif;
	color: hsl(228, 12%, 44%);
	font-size: 1.8rem;
}
.cards-container{
	margin: 2rem 0;
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr 1fr 1fr 1fr;
}


@media (max-width: 768px) { 
	.content{
		margin: 3rem 1rem;
		display: grid;
	}
	.content h2{
		font-size: 1.3rem;
	}
	.cards-container{
		grid-template-columns: 1fr;
	}
}


</style>
