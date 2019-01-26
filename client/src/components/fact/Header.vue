<template>
  <div>
    <header>
      <div class='header_div'>
        <h1>Analyzing the Data</h1>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  height: 600px;
  background-image: url('../../../src/assets/images/graph1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header_div {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 12px;
}

h1 {
  color: black;
}

</style>
