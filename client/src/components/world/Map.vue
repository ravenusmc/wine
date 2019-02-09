<template>
  <div>
    <h1>MAP</h1>
    {{ variety }}
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    variety: {
      type: String,
      required: false
    },
  }


}
</script>

<style scoped>
</style>
