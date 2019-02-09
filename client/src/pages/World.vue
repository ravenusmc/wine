<template>
  <div>
    <World @wine-variety="wineVariety"/>
    <Map :variety="variety" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import World from '@/components/world/Header';
import Map from '@/components/world/Map';

export default {
  name: 'WorldMap',
  components: {
    World,
    Map,
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
