<template>
  <div>
    <Header @wine-rows="wineRows"/>
    <Map :rows="rows" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/world/Header';
import Map from '@/components/world/Map';

export default {
  name: 'WorldMap',
  components: {
    Header,
    Map,
  },
  data() {
    return {
      variety: '',
      rows: [],
    }
  },
  computed: {
  },
  methods: {
    wineRows(e){
      this.rows = e;
    }
  }
};
</script>

<style scoped>
</style>
