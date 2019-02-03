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

      <div>
        <h5>Top Five Wineries and wine type in country</h5>
        <ul>
          <li v-for='wine in TopFiveByCountry'><span>Points:</span> {{wine.points }},
            <span>Winery:</span> {{wine.winery}}, <span>Variety:</span> {{wine.variety}}</li>
        </ul>
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
      'averageWineRatingCountry',
      'TopFiveByCountry',
    ])
  },
  methods: {
    ...mapActions([
      'getCountryInformation',
    ]),
    submitCountry() {
      this.getCountryInformation(this.country);
      this.showResults = true;
    }
  }
};
</script>

<style scoped>
.center {
  text-align: center;
}

span {
  font-weight: bold;
}

.input_area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
