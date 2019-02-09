<template>
  <div>
    <World @wine-variety="wineVariety"/>
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
  data() {
    return {
      variety: '',
    }
  },
  computed: {
  },
  methods: {
    wineVariety(e){
      this.variety = e;
    }
  }
};
</script>

<style scoped>
</style>
