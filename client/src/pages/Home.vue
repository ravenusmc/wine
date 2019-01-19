<template>
  <div>
    <AboutHeader/>
    <Main/>
  </div>
</template>

<script>
import AboutHeader from '@/components/Home/Header';
import Main from '@/components/Home/Main';

export default {
  name: 'Home',
  components: {
    AboutHeader,
    Main,
  },
};

</script>

<style scoped>
</style>
