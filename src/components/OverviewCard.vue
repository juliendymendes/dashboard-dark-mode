<template>

	<div class="card-container">
		<div class="top">
			<span>Page views</span>
			<img src="../../public/icon-facebook.svg" alt="Facebook icon">
		</div>

		<div class="bottom">
			<p>87</p>
			<div>
				<img src="../../public/icon-up.svg" alt="Up arrow">
				<span>3%</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">


</script>

<style scoped>
.card-container {
	display: flex;
	flex-direction: column;

	background: hsl(225, 100%, 98%);
	max-width: 400px;
	padding: 1rem;
	border-radius: 10px;
	
	cursor: pointer;
	font-family: 'Inter-Bold', sans-serif;
	color: hsl(228, 12%, 44%);
}

.card-container:hover {
	background: hsl(227, 47%, 96%);
}

.card-container > div {
	display: flex;
	justify-content: center;
	margin: .3rem .5rem;
}

.card-container .top, .card-container .bottom{
	justify-content: space-between;
}

.top img{
	height: 100%;
}

.bottom{
	align-items: center;
}
.bottom > p{
	font-size: 2.7rem;
	color: #000;
	margin-bottom: 0;
}

.bottom img{
	margin-right: .4rem;
}

.bottom span{
	color: hsl(163, 72%, 41%);
}


</style>
