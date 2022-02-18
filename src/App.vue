<template >
  <div id="app">
    <router-view>
      <Header/>
    </router-view>
  </div>

</template>

<script>
import Header  from '../src/components/Header.vue';
export default {
  components: { Header },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
#app {
  font-family: "Times New Roman", Times, serif;
}

</style>
