<template>
  <div>

    <header>
      <h1>World Map</h1>
    </header>

    <div class='input_area'>
        <select @click='hide' v-model="variety" name="country">
          <option v-for="variety in varieties" :value="variety">{{ variety }}</option>
        </select>
        <md-button @click="submitCountry" type="submit" variant="primary"
        class="md-raised md-primary">Primary</md-button>
    </div>

  </div>
</template>

<script>
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
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
  margin-top: 50px;
}
</style>
