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
---
## 解題步驟

### 1. <kbd>inventors</kbd>篩選出於1500年代(1500~1599)出生的人

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

### 2. <kbd>inventors</kbd>用兩個資料組合成一個全名

在這邊我們使用的是`Array.map()`，`map()`可以召喚陣列裡每一個資料，並依序回傳/使用他們。

舉個例子，假設我現在身上有個陣列就是`[1,2,3,4,5]`，讓他們回傳平方值，結果就會:
```javascript
const test = [1, 2, 3, 4, 5];
const Result = testArray.map(function(item){
    return item*item;
});

console.log(Result);   // [1, 4, 9, 16, 25]
```

那麼我們要全名，就給他個**名+姓**的組合就可以了:
```javascript
const fullName = inventors.map(inventors => inventors.first+" "+inventors.last);
console.log(fullName);
```
上方是直接給變數，中間插個空白的方法。

我們也能換個方式，直接利用` `` `打出一個顯示字串，並利用`${}`直接召喚出要更換的陣列名稱即可。
```javascript
const fullName = inventors.map(inventors => `${inventors.first} ${inventors.last}`);
console.log(fullName);
```

### 3. <kbd>inventors</kbd> 利用出生年排序

在這邊我們使用`Array.sort()`，他能將陣列裡的元素先排序後再回傳。
例如這邊給了個陣列，裡頭有這麼多數字，會由小至大排序:
```javascript
const test = [1,2,3,4,5,7,9,3,2,4,2,3]; 
const result = test.sort();
console.log(result);    //[1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 7, 9]
```
若給字串的話也會依照大寫到小寫，a到z排序:
```javascript
let test = ['Ryan', 'jimy' , 'Jimmy' , 'Simon' , 'jiang' , 'cindy' , 'Yin' , 'riven']; 
let result = test.sort();
console.log(result);   
//["Jimmy", "Ryan", "Simon", "Yin", "cindy", "jiang", "jimy", "riven"]
```

這邊我們設定利用`year`去排序，可以寫成這樣:
```javascript
const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1 );
console.table(ordered);
```
注意一下，看看裡面的箭頭函式，若對裡面這個沒有印象，這其實是if條件式的三元運算式，原本是長這樣的:
```javascript
const ordered = inventors.sort(function(a, b) {
    if(a.year > b.year) {
        return 1;
    } else {
        return -1;
    }
});
```

### 4. <kbd>inventors</kbd>歲數加總
我們可以用`Array.reduce()`，他的用法是
```javascript
使用陣列.reduce(function(累加值,目前傳入值){...},累加起始值);
```
舉個例子，眼前給他五個數字陣列`[3,9,23,56,87]`，我們宣告一個`result`，裡面讓`arr`陣列進行累加。其中使用`arr`為輸入值，`total`去接累加值，在最後設定初始值為0。
```javascript
const arr=[3,9,23,56,87];
const result = arr.reduce(function(total,arr){
  return total+arr;
},0);

console.log(result);   //178
```
在這個範例當中，我們直接將裡面的`passed`和`year`相減後累加即可:
```javascript
var totalyear = inventors.reduce((total,inventors) => {
    return total + (inventors.passed - inventors.year);
} , 0);
```

### 5. <kbd>inventors</kbd> 依歲數由大至小排序
這邊我們也是可以使用`sort()`去判斷，只是我們給他的條件是`passed`和`year`的相減，就會變成:
```javascript
const oldest = inventors.sort(function(a,b){
    const last = a.passed - a.year;
    const next = b.passed - b.year;
    return (last > next ? -1 : 1);
});
```
或是簡化成
```javascript
const oldest = inventors.sort(function(a,b){
    return ( (a.passed - a.year) > (b.passed - b.year)  ? -1 : 1);
    //  直接把式子輸入進去
});
```

### <kbd>Wikipedia</kbd> 列出巴黎所有包含'de'的路名








---

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
funcB(1);  // undefined
```
![寫個程式證明一下](https://i.imgur.com/kTuGWKJ.png)

### <kbd>Javascript</kbd> ?:
這叫做"條件運算子"，俗稱(?)的"三元運算子"，通常用法是:
```javascript
條件式 ? 結果為true時的動作 : 結果為false時的動作 ;
```

利用[這個範例](https://jsbin.com/miyukey/4/edit?html,js,output)看看，當我設定數值後去判定是否滿18歲，前者為`true`，後者為`false`。所以若輸入19，判定`age < 18`結果就是`false`，那就會出現"19歲，Toooooooooo old"在下方。