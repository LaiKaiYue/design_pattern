<template>
  <div>
    <h1>依賴反轉原則 | Dependency Inversion Principle</h1>
    <p>
      高層模組不應該依賴低層模組，是兩者都應該依賴抽象；<br />
      而抽相不應該依賴細節，應該是細節應該依賴於抽象，這是依賴反轉原則的目的。<br />
      他不但可以減低類別間的耦合，也提高了系統的可讀性及可維護性。
    </p>
    <br />
    <h2>DIP的優點</h2>
    <p>
      <ul>
        優點
        <li>1. 减少class間的耦合性，提高系统的穩定性</li>
        <li>2. 降低開發時的風險</li>
        <li>3. 提高系統可讀及維護性</li>
      </ul>
    </p>
    <br>
    <h2>DIP的目標</h2>
    <p>
      <ul>
        <li>高層模組(Payment)不應該依賴低層模組(CreditCard)，兩者皆應依賴於抽象(IPayment)</li>
        <li>抽象(IPayment)不應該依賴細節(CreditCard)，細節(CreditCard)應該依賴於抽象(IPayment)</li>
      </ul>
    </p>
    <br>
    <h2>Reference</h2>
    <a href='https://ianjustin39.github.io/ianlife/design-pattern/dependence-inversion-principle/'>
      依賴反轉原則 | Dependency Inversion Principle
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Practice 1
// class Payment {
//   public pay (creditCard: CreditCard) {
//     creditCard.pay()
//   }
// }

// class CreditCard {
//   public pay () {
//     console.log('信用卡付款')
//   }
// }

// Practice 2
interface IPayment {
  pay(): void
}

class CreditCard implements IPayment {
  public pay (): void {
    console.log('信用卡付款')
  }
}

class QRCode implements IPayment {
  public pay (): void {
    console.log('QRCode付款')
  }
}

class Payment {
  public pay (iPayment: IPayment): void {
    iPayment.pay()
  }
}

export default defineComponent({
  name: 'DIP',
  setup () {
    // Practice 1
    // 信用卡即是低層次模組，而付款這個行為就是高層次模組。可以發現付款這個行為跟信用卡有直接的關係。想想我們從以前用現金、金融卡、
    // 信用卡到現在電子支付甚至虛擬貨幣…等等。
    // const p = new Payment()
    // p.pay(new CreditCard())

    // Practice 2
    const payment = new Payment()
    payment.pay(new CreditCard())
    payment.pay(new QRCode())
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
