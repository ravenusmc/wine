<template>
  <div>
    <h1>MAP</h1>
    {{ variety }}

    <!-- World Map -->
    <div class='map_div'>
      <vue-chart
      chart-type="GeoChart"
      :columns="columns"
      :rows="rows"
      :options="options"></vue-chart>
    </div>
    <!-- World Map -->

  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    variety: {
      type: String,
      required: false
    },
  },
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
}
</script>

<style scoped>
</style>
