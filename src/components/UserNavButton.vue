<template>
  <button
    class="page-nav-button"
    :class="$route.query.page === param && 'active'"
    @click="() => changePageParam(param)"
  >
    {{ param[0].toUpperCase() + param.slice(1) }}
  </button>
</template>

<script>
export default {
  name: "UserNavButton",
  props: ["param"],
  methods: {
    changePageParam(param) {
      if (this.$route.query.page !== param)
        this.$router.replace({
          path: this.$route.path,
          query: { page: param },
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.page-nav-button {
  font-weight: 700;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgb(236, 236, 236);
  }
}
.active {
  background-color: rgb(216, 216, 216);
  &:hover {
    background-color: rgb(216, 216, 216);
  }
}
</style>
