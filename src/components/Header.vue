<template>
	<div class="header-content">
		<h1>Social Media Dashboard</h1>

		<div class="container-flex">
			<span class="total-followers">Total Followers: 23,004</span>
			
			<DarkModeButton/>
		</div>
	</div>
</template>

<script setup lang="ts">
import DarkModeButton from './DarkModeButton.vue';


</script>

<style scoped>
.header-content{
	margin: 2rem 3rem;
}
.header-content h1{
	font-family: 'Inter-Bold', sans-serif;
	margin-bottom: 0;
}

.total-followers{
	font-family: 'Inter-Bold', sans-serif;
	color: hsl(228, 12%, 44%);
}

.container-flex{
	display: flex;
	justify-content: space-between;
}

</style>
