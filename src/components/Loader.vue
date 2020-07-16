<template>
	<div class="loader">
		<img src="@/assets/loader.svg" alt="" />
	</div>
</template>

<script>
export default {
	name: 'Loader',
};
</script>

<style scoped>
.loader {
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: opacit();
	top: 0;
	left: 0;
	z-index: 3;
	bottom: 0;
	background-color: rgba(241, 242, 243, 0.79);
}

.loader img {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
</style>
