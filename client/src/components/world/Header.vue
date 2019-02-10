<template>
  <div>

    <header>
      <h1>World Map</h1>
    </header>

    <div class='input_area'>
      <h4>Please Select a Wine Variety</h4>
        <select v-model="variety" name="country">
          <option v-for="variety in varieties" :value="variety">{{ variety }}</option>
        </select>
        <md-button @click="selectedVariety(variety)" type="submit" variant="primary"
        class="md-raised md-primary">Primary</md-button>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  data(){
    return {
      varieties: ['Cabernet Sauvignon','Sauvignon Blanc','Pinot Noir',
       'Provence red blend','Chardonnay','Malbec','Rosé','Syrah','Red Blend',
       'Riesling','Malbec-Merlot','Cabernet Sauvignon-Cabernet Franc', 'Moscato',
       'Pinot Grigio','Gewürztraminer','Merlot','Syrah-Grenache','Muscat',
       'Cabernet Sauvignon-Merlot', 'Pinot Bianco', 'Malbec-Cabernet Sauvignon',
       'Cabernet Sauvignon-Malbec','Cabernet Merlot','Merlot-Cabernet',
       'Malbec-Syrah','Johannisberg Riesling','Chardonnay-Pinot Grigio' ],
       variety: '',
       rows: [],
    }
  },
  computed: {
    ...mapGetters([
      'wineData',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchWineData',
    ]),
    selectedVariety(variety) {

      this.fetchWineData(variety);
      this.rows = this.wineData,
      this.$emit('wine-rows', this.rows)

      // const promise1 = new Promise((resolve, reject) => {
      //   this.fetchWineData(variety);
      // })
      // promise1.then(
      //   this.rows = this.wineData,
      //   // console.log(typeof this.rows),
      //   // console.log(this.rows),
      //   this.$emit('wine-rows', this.rows)
      // )
    },
  }//End of Methods
}
</script>

<style scoped>
header {
  text-align: center;
  margin-top: 50px;
}

.input_area {
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
