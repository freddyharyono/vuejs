<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}

.logo {
  width: 150px;
  margin-top: 25px;
}

.register input,
.login input, .add input, .update input {
  width: 250px;
  height: 35px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid lightblue;
  background: rgb(213, 213, 230);
  border-radius: 15px;
}

.register button,
.login button, .add button, .update button {
  width: 200px;
  height: 50px;
  border: 1px solid lightblue;
  border-radius: 15px;
  background: crimson;
  color: white;
}
</style>
