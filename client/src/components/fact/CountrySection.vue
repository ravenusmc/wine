<template>
  <div>

    <div class='input_area'>
      <h3>Please Select a Country</h3>
      <input v-model="country" placeholder="Please Enter a Country">
       <button @click='submitCountry'>Submit</button>
    </div>

    <!-- BELOW FROM: https://github.com/ravenusmc/examining_suicide/blob/master/client/src/components/facts/Calls/By_Country.vue -->
    <h3 class='font'>Suicides by Country</h3>
<form @submit="onSubmit">
  <select v-model="country" name="country">
    <option v-for="country in countries" :value="country">{{country}}</option>
  </select>
  <button type="submit" variant="primary">Submit</button>
  <p class='font'>The number of suicides in {{ country }} is: {{ msg }}</p>
</form>

  </div>
</template>

<script>
export default {
  name: 'CountrySection',
  data(){
    return {
      country: '',
      countries: ['US', 'Spain', 'France', 'Italy', 'New Zealand', 'Bulgaria', 'Argentina',
                  'Australia', 'Portugal', 'Israel', 'South Africa', 'Greece', 'Chile', 'Morocco',
                  'Romania', 'Germany', 'Canada', 'Moldova', 'Hungary', 'Austria', 'Croatia',
                  'Slovenia', 'India', 'Turkey', 'Macedonia', 'Lebanon', 'Serbia', 'Uruguay',
                  'Switzerland', 'Albania', 'Bosnia and Herzegovina', 'Brazil', 'Cyprus',
                  'Lithuania', 'Japan', 'China', 'South Korea', 'Ukraine', 'England' 'Mexico',
                  'Georgia', 'Montenegro', 'Luxembourg', 'Slovakia', 'Czech Republic', 'Egypt',
                  'Tunisia', 'US-France'],
    }
  },
  methods: {
    submitCountry() {
      alert(this.country)
    }
  }
};
</script>

<style scoped>
.input_area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
