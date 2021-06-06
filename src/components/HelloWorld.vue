<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>里氏替換原則 | Liskov Substitution Principle</h3>
    <p>
      里氏替換原則主要在於子類別可以擴充套件父類別的功能，<br />
      但不改變父類別原有的功能。就像老鷹跟企鵝都是鳥，老鷹會飛但企鵝不會。<br />
      但企鵝不能去更改鳥類內的方法，只好經由其他設計達成目的。
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

class Bird {
    private flySpeed = 0

    public setFlySpeed (flySpeed: number): void {
      this.flySpeed = flySpeed
    }

    public getFlyTime (distance: number): number {
      return (distance / this.flySpeed)
    }
}

class Eagle extends Bird {}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    onMounted(() => {
      const eagle = new Eagle()
      eagle.setFlySpeed(120)
      console.log('路程300公里：')
      console.log('老鷹花了' + eagle.getFlyTime(300) + '小時.')
    })
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
