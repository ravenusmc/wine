<template>
  <div>

    <div class="margin_fix md-layout md-gutter md-alignment-center">

      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
         <md-ripple>
           <md-card-header>
             <div class="md-title">The Perfect Wine</div>
           </md-card-header>

           <md-card-content>
             <ul>
               <li v-for='wine in highestRatedWines'><span>Country:</span> {{wine.Country }},
                 <span>Winery:</span> {{wine.Winery}}, <span>Variety:</span> {{wine.Variety}}</li>
             </ul>
           </md-card-content>

           <md-card-actions>
             <md-button>Action</md-button>
             <md-button>Action</md-button>
           </md-card-actions>
         </md-ripple>
       </md-card>
      </div>

      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
         <md-ripple>
           <md-card-header>
             <div class="md-title">Basic Facts</div>
           </md-card-header>

           <md-card-content>
             <p><span>The average score of the wine:</span> {{ averageWineScore }}</p>
             <p><span>The Standard Deviation of points:</span> {{ standardDeviationPoints }}</p>
             <p><span>The lowest score of the wine:</span> {{ lowestWineScore }}</p>
             <p>Please note, the that wine data that I have does not have a value
               that's lower than 80.
            </p>
           </md-card-content>

           <md-card-actions>
             <md-button>Action</md-button>
             <md-button>Action</md-button>
           </md-card-actions>
         </md-ripple>
       </md-card>
      </div>

    </div>


  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'BasicInformation',
  computed: {
    ...mapGetters([
      'highestRatedWines',
      'averageWineScore',
      'lowestWineScore',
      'standardDeviationPoints'
    ])
  },
  mounted(){
    this.$store.dispatch('getHighestRatedWine');
    this.$store.dispatch('getAverageWineScore');
    this.$store.dispatch('getLowestScore');
    this.$store.dispatch('getStandardDeviation');
  },
};
</script>

<style scoped>

.margin_fix {
  margin-top: 50px;
  margin-left: 3%;
  margin-right: 3%;
}

span {
  font-weight: bold;
}
</style>
