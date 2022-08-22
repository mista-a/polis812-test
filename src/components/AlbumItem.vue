<template>
  <Swiper class="swiper" ref="swiper" :options="swiperOption">
    <SwiperSlide v-for="{ id, url } in filterAlbums" :key="id">
      <img :src="url" alt=" " />
    </SwiperSlide>
    <template v-slot:pagination>
      <div class="swiper-pagination" />
    </template>
    <template v-slot:button-prev>
      <div
        class="swiper-button-prev"
        @click="$refs.swiper.swiperInstance.slidePrev()"
      />
    </template>
    <template v-slot:button-next>
      <div
        class="swiper-button-next"
        @click="$refs.swiper.swiperInstance.slideNext()"
      />
    </template>
  </Swiper>
</template>

<script>
import { api } from "@/api/index"
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/css/swiper.css"

export default {
  name: "AlbumItem",
  props: ["albumId"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      photos: [],
      swiperOption: {
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        keyboard: {
          enabled: true,
        },
      },
    }
  },
  async mounted() {
    try {
      this.photos = await api().album.getPhotos()
    } catch (error) {
      console.error(error)
    }
  },
  computed: {
    filterAlbums() {
      return [...this.photos]
        .filter((photo) => photo.albumId === this.albumId)
        .splice(0, 5)
    },
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  height: 300px;
  width: 600px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    background-color: white;
  }
}
</style>
