<template>
	
	<div class="d-flex content">
		<span class="dark-mode" :class="{'dark-mode-dark-text' : store.isDarkModeActive}">Dark mode</span>
		<div class="form-switch">
			<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  
				@change="handleDarkMode" :checked="store.isDarkModeActive">
		</div>
	</div>

</template>

<script setup lang="ts">
import { useDarkModeStore } from '@/stores/darkmode';

const store = useDarkModeStore()

function handleDarkMode(){
	store.isDarkModeActive = !store.isDarkModeActive
	localStorage.setItem('isDarkModeActive', store.isDarkModeActive.toString())
	
	if(store.isDarkModeActive){
		document.documentElement.setAttribute('style', 'background-color: hsl(230, 17%, 14%);')
	}else{
		document.documentElement.setAttribute('style', 'background-color: #fff;')
	}
}

</script>

<style scoped>


.dark-mode{
	font-family: 'Inter-Bold', sans-serif;
	color: hsl(228, 12%, 44%);
	margin-right: 1rem;
}
.content{
	width: 100%;
	justify-content: flex-end;
}

@media(max-width: 768px){
	.content{
		justify-content: space-between;

	}
}


</style>
