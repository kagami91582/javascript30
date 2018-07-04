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

### 1. <kbd>inventors</kbd> 篩選出於1500年代(1500~1599)出生的人

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

### 2. <kbd>inventors</kbd> 用兩個資料組合成一個全名

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

### 4. <kbd>inventors</kbd> 歲數加總
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

### 6. <kbd>Wikipedia</kbd> 列出巴黎所有包含'de'的路名
這個就要移駕到[wiki](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
)上了。
這邊我們先研究一下在wiki上面的HTML元素，大概長這個樣子:
![](https://i.imgur.com/67gfDf0.png)
你會發現顯示的文字式放在這個路徑裡面
```css
div.mw-category > div.mw-category-group > ul > li > a
```
首先我們直接用querySelector召喚`.mw-category`區塊:
```javascript
const category = document.querySelector('.mw-category');
```
接著宣告`links`，使用`Array.from()`的方式接住所有值，指定在`.mw-category`當中所有的`<a>`標籤，並轉化成陣列:
```javascript
const links = Array.from(category.querySelectorAll('a'));
```
之後，我們先用`map()`組合所有的`<a>`標籤內文字，再用`fliter()`篩選`streetName`裡面包含'de'的文字陣列們。

注意的是，裡面有個`includes()`函數。(詳細看下面名詞解釋補充)
```javascript
const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'));
```

### 7. <kbd>people</kbd> 依姓氏排序資料
~~~終於不是<kbd>inventors</kbd>了(歡呼)~~~。

觀察一下陣列，你會發現他是`[名,姓]`的方式記錄著，表示我們要用`spilt()`來切開每一個字串，`spilt()`是這樣宣告的:
```javascript
const [aLast,aFirst] = lastOne.split(', ');
const [bLast,bFirst] = nextOne.split(', ');
```
你會發現的是，因為字串切割會有兩個字串輸出，所以我們可以用陣列方式去接住切割後的兩個字串。

最後我們還要排序，所以再使用`Array.sort()`的方式來排列，並使用`aLast`和`bLast`去判定姓氏來排列:
```javascript
const alpha = people.sort(function(lastOne,nextOne){
    //把剛剛的切割值塞進來
    return aLast > bLast ? 1 : -1 ; //稍早解釋的三元運算子
});
```

### 8. <kbd>data</kbd> 計算種類數量
最後來看看<kbd>data</kbd>這個陣列，你會發現主要有`car`、`truck`、`bike`、`van`、`walk`這五個值，我們要計算出他們出現的次數。

依照JS30的流程，我們可以直接利用一個空物件`obj={}`當作計數器(counter)，接著利用`reduce()`計算出總值:

```javascript
const transportation = data.reduce(function(obj,item){
    //判定item，若之前沒出來過就新增一個
    if(!obj[item]){
        obj[item] = 0 ;
    }
    //計算累加上去
    obj[item]++;
    return obj;
},{ 
    //這邊是obj的初始值，我們不給他任何東西，就單純做counter
});
```
若看不懂可以利用[這個範例](https://jsbin.com/waqicij/edit?js,console)去確認看看。

---

## 名詞解釋

### <kbd>Javascript</kbd> ?:
這叫做"條件運算子"，俗稱(?)的"三元運算子"，通常用法是:
```javascript
條件式 ? 結果為true時的動作 : 結果為false時的動作 ;
```

利用[這個範例](https://jsbin.com/miyukey/4/edit?html,js,output)看看，當我設定數值後去判定是否滿18歲，前者為`true`，後者為`false`。所以若輸入19，判定 `age < 18` 結果就是`false`，那就會出現"19歲，Toooooooooo old"在下方。

### <kbd>Javascript ES6</kbd> Array.include()
我們可以利用`include()`找出陣列中包含的東西，他的用法是:
```javascript
陣列.includes(比對值);
```
假如用數字來證明一波，大概是這樣
```javascript
const arr = [1,2,3,4,5,NaN];

arr.includes(1);     // true
arr.includes(6);     // false
arr.includes(1,2);   // true
arr.includes(4,7);   // false
arr.includes(NaN);   // true
arr.includes(2,NaN); // true
```

舉個例子，假設我們有一個陣列`[Roads,Ring,Sing,Rio,Soap]`，則:
```javascript
const arr = ['Roads','Ring','Sing','Rio','Soap'];
console.log(arr.includes('Roads'));    // true
console.log(arr.includes('Road'));     // false
```