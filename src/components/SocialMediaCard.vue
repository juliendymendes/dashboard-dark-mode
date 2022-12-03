<template>
	
	<div class="card-container">
		<div class="user-container">
			<img src="../../public/icon-facebook.svg" >
			<span>@nathanf</span>
		</div>

		<div class="num-followers-container">
			<span>1987</span>
		
			<span>f o l l o w e r s</span>
		</div>

		<div class="new-followers-container">
			<img src="../../public/icon-up.svg" alt="Up arrow">
			<span>12 Today</span>
		</div>
	</div>
</template>

<script setup lang="ts">


</script>

<style scoped>
.card-container{
	display: flex;
	flex-direction: column;

	background: hsl(225, 100%, 98%);
	max-width: 350px;
	padding: 1rem;
	border-radius: 10px;
	border-top: 7px solid hsl(208, 92%, 53%);
	cursor: pointer;
	font-family: 'Inter-Bold', sans-serif;
	color: hsl(228, 12%, 44%);
}

.card-container:hover{
	background: hsl(227, 47%, 96%);
}

.card-container > div{
	display: flex;
	justify-content: center;
	margin: 1rem;
}

.card-container > div >  img{
	align-self: center;
}

.user-container > img{
	margin: 0 .7rem;
}

.num-followers-container{
	align-items: center;
	flex-direction: column;
}

.num-followers-container :first-child{
	font-size: 4rem;
	color: #000;
}

.num-followers-container :last-child{
	text-transform: uppercase;
	font-family: 'Inter-Regular', sans-serif;
}

.new-followers-container{
	color: hsl(163, 72%, 41%);
}
.new-followers-container > img{
	margin: 0 .4rem;
}

</style>
