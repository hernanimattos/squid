<template>
  <section class="wrapper-picture">
    <picture
      class="picture"
      v-for="media in medias"
      :key="media.metadados.idFacebook"
    >
      <img :src="media.imagens.thumbnail.url" :alt="media.usuario.username" />
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
    <div class="btn" @click="morePosts">
      <font-awesome-icon icon="arrow-circle-right" />
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapGetters } = createNamespacedHelpers("test");

export default {
  name: "Pictures",
  computed: {
    ...mapState(["medias", "qtd"]),
    ...mapGetters(["parseNextUrl", "addQtd"])
  },
  methods: {
    ...mapActions(["getMedias", "getNextPage"]),
    morePosts() {
      this.getNextPage({ url: this.parseNextUrl, qtd: this.addQtd });
    }
  },
  created() {
    this.getMedias({ qtd: this.qtd });
  }
};
</script>

<style scoped>
.wrapper-picture {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  padding: 1rem;
}

.picture {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  height: 100%;
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
  left: 0;
  width: 100%;
  color: #fff;
  top: -200px;
}

.overlay-user--info {
  padding: 1rem;
  font-size: 0.8rem;
  position: inherit;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  text-align: center;
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

.btn {
  font-size: 10rem;
  color: #2a66a59c;
  cursor: pointer;
  transition: 0.5s;
  margin-top: 2rem;
}

.btn:hover {
  color: #2a66a5f7;
  transition: 0.5s;
}
</style>
