<template>
  <div id="app">
    <nav>
      <router-link to="/">父传子 子传父</router-link> |
      <!-- <router-link to="/about">子传父</router-link> | -->
      <router-link to="/brother">兄弟组件通信</router-link> |
      <router-link to="/other">其他组件通信</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
