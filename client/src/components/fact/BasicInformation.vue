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
             Country with highest scoring wine: 
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
export default {
  name: 'BasicInformation',
};
</script>

<style scoped>
</style>
