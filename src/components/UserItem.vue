<template>
  <router-link class="user" :to="`user/${id}`">
    <div class="about-user">
      <p class="name">{{ name }}</p>
      <p class="email">{{ email }}</p>
    </div>
    <div class="website">
      <span class="website-text">{{ website }}</span>
    </div>
    <span class="location">{{ city }}, {{ street }}</span>
  </router-link>
</template>

<script>
export default {
  name: "UserItem",
  props: ["id", "name", "email", "website", "city", "phone", "street"],
}
</script>

<style scoped lang="scss">
.user {
  display: grid;
  grid-template-columns: repeat((3, 1fr));
  align-items: center;
  column-gap: 15px;
  padding: 20px 15px;
  cursor: pointer;
  border: 1px solid rgb(243, 243, 243);
  border-radius: 5px;
  text-align: left;
  transition: background 0.35s;
  background: rgb(243, 243, 243);
  box-shadow: 0px 1px 3px var(rgba(0, 0, 0, 0.1));
  &:hover {
    background: rgb(231, 231, 231);
  }
  &:active {
    scale: 0.98;
  }
}
.about-user {
  word-break: break-word;
}
.website-text {
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  font-weight: 500;
}
.location {
  word-break: break-word;
}
.name {
  font-weight: 600;
}

@media screen and (max-width: 768px) {
  .location {
    text-align: center;
  }
  .website-text {
    padding: 6px;
  }
  .user {
    padding: 20px 10px;
    font-size: 0.75rem;
  }
}
</style>
