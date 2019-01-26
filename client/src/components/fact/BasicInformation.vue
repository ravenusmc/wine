<template>
  <div>

    <div class="md-layout md-gutter md-alignment-center">

      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
         <md-ripple>
           <md-card-header>
             <div class="md-title">Basic Information</div>
           </md-card-header>

           <md-card-content>
             Wines with a perfect rating:
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
             <div class="md-title">Card with hover effect</div>
             <div class="md-subhead">It also have a ripple</div>
           </md-card-header>

           <md-card-content>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
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
    ])
  },
  mounted(){
    this.$store.dispatch('getHighestRatedWine')
  },
};
</script>

<style scoped>

span {
  font-weight: bold;
}
</style>
