<template>
	<div class="container">
		<Loader v-if="loader" />
		<Top />
		<section>
			<Pictures />
		</section>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('test');
import Pictures from '@/components/Pictures.vue';
import Top from '@/components/Top.vue';
import Loader from '@/components/Loader';

export default {
	name: 'Home',
	computed: {
		...mapState(['loader']),
	},
	components: {
		Pictures,
		Top,
		Loader,
	},
};
</script>
<style>
.container {
	margin: 0 auto;
	max-width: 1200px;
}
</style>
