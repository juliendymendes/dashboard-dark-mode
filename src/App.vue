<template >
	<div :class="{'dark-mode-app-background' : store.isDarkModeActive}">
		<RouterView/>
	</div>

	
</template>

<script setup lang="ts">

import { useDarkModeStore } from '@/stores/darkmode';
import { onMounted } from 'vue';

const store = useDarkModeStore()

onMounted(() => {
	if(localStorage.getItem('isDarkModeActive') === 'true'){
		store.isDarkModeActive = true
		document.documentElement.setAttribute('style', 'background-color: hsl(230, 17%, 14%);')
	
	}else{
		store.isDarkModeActive = false
	}

})

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

.dark-mode-app-background{
	background-color: hsl(230, 17%, 14%) ;
}
.dark-mode-card-background{
	background-color: hsl(228, 28%, 20%)!important;
}

.dark-mode-card-background:hover{
	background-color: hsl(228, 26%, 23%)!important;
}
.dark-mode-light-text{
	color: hsl(228, 34%, 66%);
}

.dark-mode-dark-text{
	color: hsl(0, 0%, 100%)!important;
}
</style>
