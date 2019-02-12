<template>
  <div>
    <!-- Start of header -->
    <header>
      <div class='header_div'>
        <h1 class='center'>Learning About Wine</h1>
        <h1 class='center'>Through Data</h1>
      </div>
    </header>
    <!-- End  of Header -->
  </div>
</template>

<script>
export default {
  name: 'AboutHeader',
};
</script>

<style scoped>
.center {
  text-align: center;
}

header {
  height: 600px;
  background-image: url(../../../src/assets/images/wine_1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header_div {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 15px;

}
</style>
