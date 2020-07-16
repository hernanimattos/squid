<template>
	<div class="container">
		<Top />
		<section>
			<Picture :medias="medias" />
		</section>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('test');
import Picture from '@/components/Picture.vue';
import Top from '@/components/Top.vue';

export default {
	name: 'Home',
	computed: {
		...mapState(['medias']),
	},
	methods: {
		...mapActions(['getMedias']),
	},
	created() {
		this.getMedias();
	},
	components: {
		Picture,
		Top,
	},
};
</script>
<style>
.container {
	margin: 0 auto;
	max-width: 1200px;
}
</style>
