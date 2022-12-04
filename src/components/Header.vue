<template>
	<div class="header-content">
		<h1 :class="{'dark-mode-dark-text' : store.isDarkModeActive}">Social Media Dashboard</h1>

		<div class="grid-container">
		
				<span class="total-followers ">Total Followers: 23,004</span>
				<div class="divider"></div >
				<DarkModeButton />
	
		</div>
	</div>
</template>

<script setup lang="ts">
import DarkModeButton from './DarkModeButton.vue';
import { useDarkModeStore } from '@/stores/darkmode';
const store = useDarkModeStore()
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

.grid-container{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}

.grid-container :last-child{
	justify-self: end;
}



@media(max-width: 768px){

	.header-content h1{
		font-size: 1.6rem;
	}
	.total-followers{
		font-size: .8rem;
	}
	
	.grid-container{
		display: grid;
		grid-template-columns: 1fr;

	}

	.divider{
		width: 100%;
		height: 1px;
		margin: 1rem 0;
		background-color: hsl(228, 12%, 44%);
	}
	
	.grid-container :last-child{
		justify-self: start;
	}

}

@media(max-width: 478px){

	.header-content{
		margin: 2rem 1rem;
	}
	.header-content h1{
		font-size: 1.4rem;
	}
}
</style>
