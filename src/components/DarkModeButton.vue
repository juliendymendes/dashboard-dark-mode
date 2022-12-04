<template>
	
	<div class="d-flex content">
		<span class="dark-mode">Dark mode</span>
		<div class="form-switch">
			<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
		</div>
	</div>

</template>

<script setup lang="ts">

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
