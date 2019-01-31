<template>
  <div>

    <div class='input_area'>
      <input v-model="country" placeholder="Please Enter a Country">
       <button @click='submitCountry'>Submit</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CountrySection',
  data(){
    return {
      country: '',
    }
  },
  methods: {
    submitCountry() {
      alert(this.country)
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
