<template>
  <div>
    <World/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import World from '@/components/world/Header';

export default {
  name: 'WorldMap',
  components: {
    World,
  },
  computed: {
  },
};
</script>

<style scoped>
</style>
