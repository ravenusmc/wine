<template>
  <div>
    <hr>
    <div class='world_map_area'>
      <!-- Start of World Map -->
      <div class='map_div'>
        <vue-chart
        chart-type="GeoChart"
        :columns="columns"
        :rows="rows"
        :options="options"></vue-chart>
      </div>
      <!-- End of World Map -->
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
    rows: {
      type: Array,
      required: false
    }
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
        options: {
            title: 'Score of Wine',
            width: 800,
            height: 500,
        }
    }
  }, //End of data object.
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
