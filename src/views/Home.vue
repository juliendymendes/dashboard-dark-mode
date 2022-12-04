<template>
	<header>
		<Header/>
	</header>

	<main>
		<SocialMediaCardsContainer/>
		<OverviewCardsContainer/>
	
	</main>
 
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import OverviewCardsContainer from '@/components/OverviewCardsContainer.vue';
import SocialMediaCardsContainer from '@/components/SocialMediaCardsContainer.vue'
</script>

