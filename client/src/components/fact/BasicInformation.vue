<template>
  <div>

    <div class="margin_fix md-layout md-gutter md-alignment-center">

      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
         <md-ripple>
           <md-card-header>
             <div class="md-title">The Best Wines</div>
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
             <p><span>The average score of the wines:</span> {{ averageWineScore }}</p>
             <p><span>The Standard Deviation of points:</span> {{ standardDeviationPoints }}</p>
             <p><span>The highest score of the wines:</span> 100 </p>
             <p><span>The lowest score of the wines:</span> {{ lowestWineScore }}</p>
             <h5>Brief Summary</h5>
             <p>Please note, the that wine data that I have does not have a value
               that's lower than 80. I'm not really sure why this is but it could be that
               below 80 points a wine may not be considered that good. I doubt that
               since there are some cheap wines that I think are quite good. I will
               also say that with the spread of only 20 points, how good being a
               90 truly is.
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
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

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
  methods:{
    ...mapActions([
      'getHighestRatedWine',
      'getAverageWineScore',
      'getLowestScore',
      'getStandardDeviation',
    ])
  },
  mounted(){
    this.getHighestRatedWine();
    this.getAverageWineScore();
    this.getLowestScore();
    this.getStandardDeviation();
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
