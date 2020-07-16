<template>
	<section class="wrapper-picture">
		<picture
			class="picture"
			v-for="media in medias"
			:key="media.metadados.idFacebook"
		>
			<img :src="media.imagens.thumbnail.url" alt="MDN" />
			<div class="overlay">
				<div class="overlay-user--info">
					<p>
						<a :href="media.link" target="_blank">
							<font-awesome-icon icon="at" class="overlay-user--data" />{{
								media.usuario.username
							}}
						</a>
					</p>
					<p>
						<a :href="media.link" target="_blank">
							<font-awesome-icon icon="heart" class="overlay-user--data" />{{
								media.upvotes
							}}
						</a>
					</p>
					<p>
						<a :href="media.link" target="_blank">
							<font-awesome-icon icon="comment" class="overlay-user--data" />{{
								media.comentarios
							}}
						</a>
					</p>
					<p>
						<a :href="media.link" target="_blank">
							<font-awesome-icon
								icon="calendar-alt"
								class="overlay-user--data"
							/>{{ media.criadoEm | dateformat }}
						</a>
					</p>
				</div>
			</div>
		</picture>
	</section>
</template>

<script>
export default {
	name: 'Picture',
	props: {
		medias: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped>
.wrapper-picture {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	margin-bottom: 1rem;
	grid-row-gap: 1rem;
	grid-column-gap: 1rem;
	padding: 1rem;
}

.picture {
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	cursor: pointer;
}

.picture img {
	object-fit: cover;
	width: 100%;
	height: 100%;
	zoom: 0.7;
}

.picture:hover .overlay {
	animation-name: grow;
	animation-duration: 0.5s;
	animation-fill-mode: forwards;
	transition: 0.8s;
	top: 0;
}
.overlay {
	background-color: rgba(0, 0, 0, 0.6);
	position: absolute;
	z-index: 1;
	top: -200px;
	left: 0;
	width: 100%;
	color: #fff;
}

.overlay-user--info {
	margin-top: 25%;
	padding: 1rem;
	text-align: center;
	font-size: 0.8rem;
}

.overlay-user--data {
	margin-right: 4px;
}
.overlay-user--info a {
	text-decoration: none;
	color: #fff;
}

.overlay-user--info p {
	margin-bottom: 0.5rem;
}

@keyframes grow {
	0% {
		width: 100%;
		height: 0;
	}
	100% {
		width: 100%;
		height: 100%;
	}
}
</style>
