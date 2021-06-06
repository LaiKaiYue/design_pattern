<template>
  <div>
    <h1>里氏替換原則 | Liskov Substitution Principle</h1>
    <p class='content'>
      里氏替換原則主要在於子類別可以擴充套件父類別的功能，<br />
      但不改變父類別原有的功能。就像老鷹跟企鵝都是鳥，老鷹會飛但企鵝不會。<br />
      但企鵝不能去更改鳥類內的方法，只好經由其他設計達成目的。
    </p>
    <br />
    <h2>LSP的優缺點</h2>
    <p class='content'>
      <ul>
        優點
        <li>1. 提高程式碼的重用性</li>
        <li>2. 提高類別的擴充性</li>
      </ul>
      <ul>缺點
        <li>1. 因為繼承關係，耦合性增高(修改父類別常數時需要思考是否會影響到其他繼承的子類別)</li>
        <li>2. 降低程式碼靈活性(必須實作父類別所有方法)</li>
      </ul>
    </p>
    <br>
    <h2>Reference</h2>
    <a href='https://ianjustin39.github.io/ianlife/design-pattern/liskov-substitution-principle/'>
      里氏替換原則 | Liskov Substitution Principle
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

// Practice 1, 2
// class Bird {
//     protected flySpeed = 0

//     public setFlySpeed (flySpeed: number): void {
//       this.flySpeed = flySpeed
//     }

//     public getFlyTime (distance: number): number {
//       console.log('父類別執行')
//       return (distance / this.flySpeed)
//     }
// }

// class Eagle extends Bird {
//   public getFlyTime (distance: number): number {
//     console.log('子類別執行')
//     return (distance / this.flySpeed)
//   }
// }

// class Penguin extends Bird {
//   public setFlySpeed (flySpeed = 0) {
//     this.flySpeed = flySpeed
//   }
// }

// Practice 3
class Bird {
  public eat () {
    console.log('鳥吃東西！！')
  }
}

class BirdFly {
  protected flySpeed = 0
  public setFlySpeed (_flySpeed: number): void {
    this.flySpeed = _flySpeed
  }

  public getFlyTime (distance: number): number {
    return (distance / this.flySpeed)
  }
}

class BirdRun {
  protected runSpeed = 0
  public setRunSpeed (_runSpeed: number): void {
    this.runSpeed = _runSpeed
  }

  public getRunTime (distance: number): number {
    return (distance / this.runSpeed)
  }
}

class Eagle extends BirdFly {}

class Penguin extends BirdRun {}

export default defineComponent({
  name: 'LSP',
  props: {
    msg: String
  },
  setup () {
    // Practice 1 正常情況
    // const eagle = new Eagle()
    // const penguin = new Penguin()
    // eagle.setFlySpeed(120)
    // penguin.setFlySpeed(0)
    // console.log('路程300公里：')
    // console.log('老鷹花了' + eagle.getFlyTime(300) + '小時.')
    // console.log('企鵝花了' + penguin.getFlyTime(300) + '小時.')

    // Practice 2 企鵝根本不會飛 爆錯
    // const bird = new Bird()
    // bird.setFlySpeed(120)
    // const eagle = new Eagle()
    // eagle.setFlySpeed(120)
    // console.log('路程300公里：')
    // console.log('鳥花了' + bird.getFlyTime(300) + '小時.')
    // console.log('老鷹花了' + eagle.getFlyTime(300) + '小時.')

    // Practice 3
    const eagle = new Eagle()
    const penguin = new Penguin()
    eagle.setFlySpeed(120)
    penguin.setRunSpeed(20)
    console.log('路程300公里：')
    console.log('老鷹花了' + eagle.getFlyTime(300) + '小時.')
    console.log('企鵝花了' + penguin.getRunTime(300) + '小時.')
  }
})
</script>

<style scoped>
 .pre {
   margin: 0 25% 0 25%;
   color:#f8f8f2;
   background-color:#282a36;
   -moz-tab-size:4;
   -o-tab-size:4;
   tab-size:4;
   text-align: left;
 }

 .content {
   margin: 0 25% 0 25%;
   -moz-tab-size:4;
   -o-tab-size:4;
   tab-size:4;
   text-align: left;
 }
</style>
