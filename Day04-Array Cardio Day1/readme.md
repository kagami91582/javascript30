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

另外裡面有給[一個wiki連結](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris)，是巴黎的大道路名。

而在下面script當中(在JS/index.js)當中，裡面分別出了八個題目。
1. 使用陣列 <kbd>inventors</kbd> ，篩選出於1500年代(1500~1599)出生的人。
2. 使用陣列 <kbd>inventors</kbd> ，用`first`、`last`兩個資料組合成一個全名。
3. 使用陣列 <kbd>inventors</kbd> ，利用出生年去排序。
4. 使用陣列 <kbd>inventors</kbd> ，將所有人的歲數加總。
5. 使用陣列 <kbd>inventors</kbd> ，依據歲數由大至小排序。
6. 使用在js當中準備的wiki連結，列出巴黎所有包含'de'的路名。
7. 使用陣列 <kbd>people</kbd> ，依姓氏排序。
8. 使用陣列 <kbd>data</kbd> ，計算每個種類的數量。

## 解題步驟

### <kbd>inventors</kbd>篩選出於1500年代(1500~1599)出生的人

在這邊我們使用`Array.fliter()`，當我們給訂條件時，就會顯示篩選出來的結果。
所以我們可以先這樣輸入個:
```javascript
                //對inventors這個陣列進行篩選
const fifteen = inventors.filter(function(inventors){
    if(inventors.year >= 1500 && inventors.year < 1600){
        // 假如inventors裡的year在1500~1599，回傳
        return true;
    }
});
console.table(fifteen); //將結果以表格方式，顯示在console上
```

我們可以將if條件函數簡化成:
```javascript
const fifteen = inventors.filter( inventors => (inventors.year >= 1500 && inventors.year < 1600));
console.table(fifteen);
```

## 名詞解釋
### <kbd>Javascript ES6</kbd> =>
箭頭函式是在ES6新增的語法，基本用法是
```javascript
() => {...}
```
例如:
```javascript
const func = (x) => x+1
```
上面相當於
```javascript
const func = function(x){
    return x+1;
}
```
值得一提的是:
1. `{}`假如沒給他大括號，就代表`return`。
2. 假如函式裡有多行語句時，就要用`{}`包起來，那`return`就要自己輸入。
那大概是這個樣子:
```javascript
const funcA = x => x+1
const funcB = x => { x+1 }

funcA(1);  // 2
funcB(1);  // undefinded
```
![寫個程式證明一下](https://i.imgur.com/kTuGWKJ.png)