<template>
  <div>
    <Header/>
    <BasicInformation/>
  </div>
</template>

<script>
import Header from '@/components/fact/Header';
import BasicInformation from '@/components/fact/BasicInformation';

export default {
  name: 'Fact',
  components: {
    Header,
    BasicInformation,
  },
};
</script>

<style scoped>
</style>
