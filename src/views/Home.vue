<template>
	<div class="home">
		<section class="picture-wrapper">

			<Picture />
		</section>
	</div>
</template>

<script>
import Picture from '@/components/Picture.vue';

export default {
	name: 'Home',
	components: {
		Picture
	}
};
</script>
