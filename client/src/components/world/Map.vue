<template>
  <div>
    <hr>
    <div class='world_map_area'>
      <!-- World Map -->
      <div class='map_div'>
        <vue-chart
        chart-type="GeoChart"
        :columns="columns"
        :rows="wineData"
        :options="options"></vue-chart>
      </div>
      <!-- World Map -->
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'Map',
  props: {
    variety: {
      type: String,
      required: false
    },
  }, //End of Props
  data() {
    return {
        columns: [{
            'type': 'string',
            'label': 'Country'
        }, {
            'type': 'number',
            'label': 'Average Score'
        }],
        rows: [],
        options: {
            title: 'Score of Wine',
            width: 900,
            height: 500,
        }
    }
  }, //End of data object.
  computed: {
    ...mapGetters([
      'wineData',
    ])
  },
  methods: {
    ...mapActions([
      'fetchWineData',
    ]),
  }, //End of methods
}
</script>

<style scoped>
.world_map_area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
