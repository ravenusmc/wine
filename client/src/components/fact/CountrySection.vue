<template>
  <div>

    <h1 class='center'>Get Wine Facts by Country</h1>

    <div class='input_area'>
        <select v-model="country" name="country">
          <option v-for="country in countries" :value="country">{{country}}</option>
        </select>
        <button @click="submitCountry" type="submit" variant="primary">Submit</button>
    </div>

    <!-- This area will show the results -->
    <div v-if='showResults'>

      <div>
        <h3>The Results</h3>
        <p>The mean wine points is: {{ averageWineRatingCountry }}</p>
      </div>

    </div>
    <!-- End of showing results area -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

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
          'Lithuania', 'Japan', 'China', 'South Korea', 'Ukraine', 'England', 'Mexico',
          'Georgia', 'Montenegro', 'Luxembourg', 'Slovakia', 'Czech Republic', 'Egypt',
          'Tunisia'],
      showResults: false

    }
  },
  computed: {
    ...mapGetters([
      'averageWineRatingCountry'
    ])
  },
  methods: {
    ...mapActions([
      'getAverageWineRatingCountry',
    ]),
    submitCountry() {
      this.getAverageWineRatingCountry(this.country);
      this.showResults = true;
    }
  }
};
</script>

<style scoped>
.center {
  text-align: center;
}

.input_area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
