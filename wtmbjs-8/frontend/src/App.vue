<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e9d8d9;
  font-size: 13px;
}

#nav {
  padding: 30px;
  margin: 0;
  background: #bfa4a4;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #5f4444;
}
</style>
