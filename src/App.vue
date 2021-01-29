<template>
  <div id="app">
    <div id="nav">
      <!-- Use the :to property for dynamism and use route name instead of path -->
      <!-- Path name may later be changed and that will have to be updated right through -->
      <router-link :to="{ name: 'EventList' }">Events</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'Contact' }">Contact</router-link> |
      <router-link :to="{ name: 'SimpleForm' }">Simple Form</router-link>
    </div>
    <!-- Similar to RenderBody -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 1.25rem;
}
</style>
