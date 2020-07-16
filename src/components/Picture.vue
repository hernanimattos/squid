<template>
	<section class="wrapper-picture">
		<picture
			class="picture"
			v-for="media in midias"
			:key="media.metadados.idFacebook"
		>
			<img
				src="mdn-logo-narrow.png"
				alt="MDN"
			>
		</picture>
	</section>
</template>

<script>
export default {
	name: 'Picture',
	props: {
		medias: {
			type: Array,
			required: true
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper-picture {
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: auto auto auto auto;
}

.picture:hover {
	background-color: red;
}
</style>
