<template>
  <div>

    <div class='input_area'>
        <select v-model="country" name="country">
          <option v-for="country in countries" :value="country">{{country}}</option>
        </select>
        <button @click="submitCountry" type="submit" variant="primary">Submit</button>
    </div>

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

    }
  },
  methods: {
    ...mapActions([
      'getAverageWineRatingCountry',
    ]),
    submitCountry() {
      this.getAverageWineRatingCountry(this.country)
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
