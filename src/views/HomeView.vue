<template>
  <div class="home-view">

  </div>
</template>

<script>
export default {
  title() {
    return 'Koa Vue SSR'
  }
}
</script>

<style lang="postcss">
.home-view {
  margin-top: 1rem;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;

  & h1, & h3 {
    font-weight: normal;
  }

  & p {
    font-size: 18px;
    text-align: center;
    width: 65%;
    margin: 0 auto;
  }
}

</style>
