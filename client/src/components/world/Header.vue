<template>
  <div>

    <header>
      <h1>World Map</h1>
    </header>

    <div class='input_area'>
        <select @click='hide' v-model="variety" name="country">
          <option v-for="country in countries" :value="country">{{country}}</option>
        </select>
        <md-button @click="submitCountry" type="submit" variant="primary" class="md-raised md-primary">Primary</md-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      
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
