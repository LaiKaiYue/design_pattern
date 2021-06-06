<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="hello">
    <h1>Vue3 Design Pattern Practice</h1>
    <router-link to="/LSP">
      <h3>里氏替換原則 | Liskov Substitution Principle</h3>
    </router-link>
    <router-link to="/DIP">
      <h3>依賴反轉原則 | Dependency Inversion Principle</h3>
    </router-link>
    <router-link to="/CARP">
      <h3>合成/聚合複用原則 | Composite/Aggregate Reuse Principle</h3>
    </router-link>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home'
}
</script>
