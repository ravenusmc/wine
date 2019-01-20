<template>
  <div>
    <h1>World Map</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'WorldMap',
  computed: {
    ...mapState({
      name: state => state.name
    })
  }
};
</script>

<style scoped>
</style>
