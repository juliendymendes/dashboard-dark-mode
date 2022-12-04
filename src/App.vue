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
import Header from './components/Header.vue';
import OverviewCardsContainer from './components/OverviewCardsContainer.vue';
import SocialMediaCardsContainer from './components/SocialMediaCardsContainer.vue'

</script>

<style>
@import '/public/bootstrap.min.css';

@font-face{
	font-family: 'Inter-Regular';
	src: url('/fonts/Inter-Regular.ttf');
}

@font-face{
	font-family: 'Inter-Bold';
	src: url('/fonts/Inter-Bold.ttf');
}
</style>
