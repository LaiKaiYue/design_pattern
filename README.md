# Design Pattern

## 單一職責原則 | Single Responsibility Principle
一個類別只能有一個改變的原因。你做你該做的事，我做我該做的事。你我互不干擾，這就是單一職責原則。

### SRP的目的：
實現高內聚，將不相關的程式碼移除，使得整體程式碼中的每個部分都與自己實作的功能相關。

### SRP的優缺點比較
```
優點
1. 降低類別複雜度。
2. 提高可讀性及維護性。
3. 變更引起的風險降低。

缺點
1. 功能類別的歸類困難，依照不同情境有不同的劃分
```

## 里氏替換原則 | Liskov Substitution Principle
里氏替換原則主要在於子類別可以擴充套件父類別的功能，但不改變父類別原有的功能。就像老鷹跟企鵝都是鳥，老鷹會飛但企鵝不會。但企鵝不能去更改鳥類內的方法，只好經由其他設計達成目的。

### LSP的優缺點
```
優點
1. 提高程式碼的重用性
2. 提高類別的擴充性

缺點
1. 因為繼承關係，耦合性增高(修改父類別常數時需要思考是否會影響到其他繼承的子類別)
2. 降低程式碼靈活性(必須實作父類別所有方法)
```
### LSP的目標
`子類別可以擴充套件父類別的功能,但不改變父類別原有的功能`

### LSP 4個繼承規範
```
1. 子類別必須完全實現父類別的方法：鳥類移動行為，老鷹為飛翔，企鵝為走路。
2. 子類別可以有自己的特性：企鵝會游泳，但鳥並沒有預設此技能。
3. 重載(Overload)或者實現父類別的方法時輸入參數可以被放大：Map and HashMap。
4. 覆蓋或者實現父類別的方法時輸出結果可以被縮小：父類別可以被子類別替換，但子類別不一定能被父類別替換。
```

### Reference
- [從生活中認識 Design Pattern](https://ianjustin39.github.io/ianlife/series/%E5%BE%9E%E7%94%9F%E6%B4%BB%E4%B8%AD%E8%AA%8D%E8%AD%98-design-pattern/)
- [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/classes.html)
- [Vue Composition API](https://v3.vuejs.org/api/composition-api.html#setup)
