<template>
  <div class="error">
    <router-link class="link" to="/">404 To home</router-link>
  </div>
</template>

<script>
export default {
  name: "ErrorView",
}
</script>

<style lang="scss" scoped>
.error {
  text-align: center;
}
.link {
  color: blue;
  font-size: 30px;
}
</style>
