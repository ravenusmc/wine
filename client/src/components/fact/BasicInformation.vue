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
             <p>The average score of the wine: {{ averageWineScore }}</p>
             <p>The lowest score of the wine: </p>
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
      'name',
      'highestRatedWines',
      'averageWineScore',
    ])
  },
  mounted(){
    this.$store.dispatch('getHighestRatedWine');
    this.$store.dispatch('getAverageWineScore');
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
