<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">asdasdd</div>
    <div class="md-layout-item">adsdada</div>
    <div class="md-layout-item">sdasdasd</div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>
.md-layout-item {
  height: 40px;
}
.md-layout-item:after {
  width: 100%;
  height: 100%;
  display: block;
  background: md-get-palette-color(red, 200);
  content: " ";
}
</style>
