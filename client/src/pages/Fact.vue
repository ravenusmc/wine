<template>
  <div>
    <Header/>
    <BasicInformation/>
    <hr>
    <CountrySection/>
  </div>
</template>

<script>
import Header from '@/components/fact/Header';
import BasicInformation from '@/components/fact/BasicInformation';
import CountrySection from '@/components/fact/CountrySection';

export default {
  name: 'Fact',
  components: {
    Header,
    BasicInformation,
    CountrySection,
  },
};
</script>

<style scoped>
</style>
