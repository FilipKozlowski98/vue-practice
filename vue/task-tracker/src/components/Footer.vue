<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <router-link v-show="homePage" to="/about">About</router-link>
  </footer>
</template>

<script>
export default { name: "Footer", props: { homePage: Boolean } };
</script>

<style scoped>
a {
  color: #333;
}
footer {
  margin-top: 30px;
  text-align: center;
}
</style>
