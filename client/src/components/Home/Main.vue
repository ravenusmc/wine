<template>
  <div class='main_content'>

    <div class="test md-layout md-gutter md-alignment-center">

      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
         <md-ripple>
           <md-card-header>
             <div class="md-title">Fact Page</div>
           </md-card-header>

           <md-card-content>
             Examine the data by looking at some of the basic facts about the
             wines.
           </md-card-content>

         </md-ripple>
       </md-card>
      </div>

      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
         <md-ripple>
           <md-card-header>
             <div class="md-title">World Map</div>
           </md-card-header>

           <md-card-content>
            Look at a world map examining which wine variety is the best in each
            country.
           </md-card-content>

         </md-ripple>
       </md-card>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style scoped>
.md-layout-item {
  margin: 5px;
}

.test {
  margin: 50px;
}

.md-layout-item:after {
  width: 100%;
  height: 100%;
  display: block;
  background: md-get-palette-color(red, 200);
  content: " ";
}

.main_content {
  margin-top: 50px;
}

</style>
