<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
  background-color: inherit;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  font-weight: 600;
}
a {
  color: inherit;
  text-decoration: none;
}
input {
  padding: 2px 5px;
  border-radius: 5px;
  border: 1px solid;
  width: 100%;
}
textarea {
  font: inherit;
  width: 100%;
  resize: none;
  padding: 5px;
  border-radius: 5px;
}
#app {
  margin: 0 auto;
  max-width: 1000px;
  padding: 15px;
}
</style>
