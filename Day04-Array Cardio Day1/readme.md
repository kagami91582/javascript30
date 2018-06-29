# JS30-Day04 Array Cardio Day1

## 製作流程
### 開始之前
先看看一開始的資料，裡面準備了三個陣列，我們可以一個一個先觀察。

第一個是**inventors**，裡面包含first(名)、last(姓)、year(出生年)、passed(逝世年)。
```javascript
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    ......
];
```

第二個則是**people**，是有逗號分隔的姓名。
```javascript
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel',....];
```

第三個是**data**，裡面有`car`、`truck`、`bike`、`van`、`walk`。
```javascript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
```
下面script當中(在JS/index.js)當中，裡面分別出了八個題目。
1. <kbd>使用inventors陣列</kbd>篩選出於1500年代(1500~1599)出生的人。
2. <kbd>使用inventors陣列</kbd>用`first`、`last`兩個資料組合成一個全名。
3. <kbd>使用inventors陣列</kbd>利用出生年去排序。
4. <kbd>使用inventors陣列</kbd>將所有人的歲數加總。
5. <kbd>使用inventors陣列</kbd>依據歲數由大至小排序。
6. 使用裡面準備的wiki連結，列出巴黎所有包含'de'的路名。
7. 依據lastName排序所有people的資料
8. 使用data陣列，計算出每個種類的數量。
