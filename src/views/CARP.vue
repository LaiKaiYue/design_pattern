<template>
  <div>
    <h1>合成/聚合複用原則 | Composite/Aggregate Reuse Principle</h1>
    <p>
      合成/聚合複用原則的在於當要重複使用套件時，應該先考慮使用組合/聚合的方式，其次才是繼承。<br />
      而如果要使用繼承的話，則須符合里氏替換原則(LSP)。
    </p>
    <br />
    <h2>合成/聚合 V.S. 繼承</h2>
    <p>
      比較完合成及聚合的差異，現在來看看合成/聚合跟繼承又差在哪呢？
      <ul>
        1. 封裝性
        <li>繼承時父類別的實作細節會暴露給子類別，所以繼承會破壞類別的封裝。而由於父類別對子類別是透明的，所以繼承又稱做白箱複用</li>
        <li>合成/聚合時使用的類別並不知道原始類別的實作細節，所以維持了類別的封裝性，又稱做黑箱複用。</li>
      </ul>
      <ul>
        2. 耦合度
        <li>繼承時父類別與子類別的耦合度高。若父類別做任何更動都會影響到子類別，降低了類別的擴充及維護。</li>
        <li>合成/聚合時新舊類別的耦合度及依賴程度低，新類別只能透過複用類別的接口取得內容。</li>
      </ul>
      <ul>
        3. 靈活性
        <li>繼承限制了整體的靈活性。由於從父類別繼承下來的實作是靜態的，不可能在執行時發生變化。</li>
        <li>合成/聚合的靈活性較高。合成/聚合執行時，新類別可以自由的引用與組合類別相同的對象。</li>
      </ul>
    </p>
    <br>
    <h2>CARP的優缺點</h2>
    <p>
      <ul>
        優點
        <li>1. 保持封裝性</li>
        <li>2. 類別間的耦合度低</li>
        <li>3. 程式靈活度高</li>
      </ul>
      <ul>
        缺點
        <li>1. 建造的系統會有較多的類別需要管理</li>
      </ul>
    </p>
    <br>
    <h2>CARP的目標</h2>
    <p>
      <ul>
        <li>盡量使用組合(contains-a)/聚合(has-a)方式來代替繼承(is-a)來達到重複使用的目的</li>
      </ul>
    </p>
    <br>
    <h2>合成以及聚合的差異</h2>
    <p>
      <ul>
        <li>合成：部分對象以及整體對象的生命週期是一致的。</li>
        <li>聚合：部分對象的生命週期與整體對象沒有關聯，甚至可能更長。</li>
      </ul>
    </p>
    <br>
    <h2>Reference</h2>
    <a href='https://ianjustin39.github.io/ianlife/design-pattern/composite-aggregate-reuse-principle/'>
      合成/聚合複用原則 | Composite/Aggregate Reuse Principle
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 聚合：班級與學生
class Clazz {
  public request (student: Student): void {
    console.log('class點名')
    student.response()
  }
}

class Student {
  public response (): void {
    console.log('student喊在')
  }
}

// 合成：人與器官
class Heart {
  public response (): void {
    console.log('heart跳一下')
  }
}

class People {
  private h = new Heart()

  public request (): void {
    console.log('people走路')
    this.h.response()
  }
}

export default defineComponent({
  name: 'CARP',
  setup () {
    // 聚合：班級與學生
    const c = new Clazz()
    const s = new Student()
    c.request(s)

    // 合成：人與器官
    const p = new People()
    p.request()

    // 經由上面兩個例子可以發現，Clazz及Student的關聯性低，就算Clazz結束了也跟Student無關。而相較於前一個例子，People與Heart的
    // 關係就比較緊密，若People生命週期結束了Heart也會跟著結束。
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
</style>
