<template>
  <div class="albums-list">
    <AlbumItem v-for="album in albums" :key="album.id" :albumId="album.id" />
  </div>
</template>

<script>
import AlbumItem from "./AlbumItem.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  name: "AlbumsList",
  components: { AlbumItem },
  computed: mapGetters(["albums"]),
  methods: mapActions(["fetchAlbums"]),
  mounted() {
    this.fetchAlbums()
  },
}
</script>

<style lang="scss" scoped>
.albums-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
