# JS30-Day07 Array Cardio Day2

這次我們要來學一些簡單的陣列尋找、處理方式。

有了第四天的~~摧殘~~練習，這次速度會比第四天還快，若還沒有印象的可以[利用這個傳送門回顧一波](https://github.com/kagami91582/javascript30/tree/master/Day04-Array%20Cardio%20Day1)。

## 開始之前

先知道這一次會使用到以下這四個陣列處理方法:

```javascript
Array.some()      
Array.every()     
Array.find()      
Array.findIndex() 
Array.slice()
```

### <kbd>Javascript</kbd> Array.some()

當你要確認一下陣列裡有沒有需要的資料時，可以使用`some()`幫忙確認，基本用法是:

```javascript
array.some(function(測試資料){...});
```

通常在function理會給他判斷式進行回傳。值得注意的是，當陣列裡**其中一個值符合條件**而回傳`true`的時候，`some()`就**不會再繼續確認**
後續的值了。

### <kbd>Javascript</kbd> Array.every()
跟剛剛的`some()`差不多，不過這個是檢查**所有的值**是否符合，也就是說當有一個值回傳`false`，就會讓`every()`回傳`false`。

```javascript
array.every(function(測試資料){...});
```

### <kbd>Javascript ES6</kbd> Array.find()

要尋找陣列裡的值，可以利用`find()`，基本用法是:

```javascript
array.find(function(測試資料){...});
```

顯示出來的結果，是**其陣列內容**。

### <kbd>Javascript ES6</kbd> Array.findIndex()

和上面`find()`差不多，不一樣的是這邊回傳的是他的**"索引值"**。

```javascript
array.findIndex(function(測試資料){...});
```

### <kbd>Javascript</kbd> slice()
`slice()`可以將一個值、陣列、字串進行提取，基本用法是:

```javascript
array.slice(start , end);
str.slice(start , end);
```

例如給個單字`refrigerator`(冰箱)，我只要中間`friger`，就可以:

```javascript
const str = 'refrigerator';
str.slice(2,8);  // 'friger'
```

注意的是，字型上的位置是以線為基準，例如上面`refrigerator`，因為我要提取中間六個，所以就變成:
```
_ r _ e _ f _ r _ i _ g _ e _ r _ a _ t __ o __ r __
0   1   2   3   4   5   6   7   8   9   10   11   12
        |                       |
```

若是用在陣列上面，則是對索引值宣告即可。


## 解題步驟

### 第一個陣列

首先先看看第一個陣列，下面第一、二題會用到他們:

```javascript
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];
```

#### 1. 確認有沒有人年紀是否有超過19歲?

首先，我們要先算出他們的年紀，用今年去減他們的出生年(`year`)，先利用`Date()`撈出今年年份:

```javascript
const thisYear = (new Date()).getFullYear();
```

接著寫出函數去做判斷，兩個年份相減之後要剛好/超過19歲，融合上面的結果就變成:

```javascript
const isAdult = people.some(function(person){
    const thisYear = (new Date()).getFullYear();
    if( thisYear - person.year >= 19){return true;}
});
```

記得上次使用的箭頭函式嗎? 我們可以簡化成:

```javascript
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
```

#### 2. 確認所有人年紀是否超過19歲?

判斷式跟上面第一題一樣，將`some()`改成`every()`即可:

```javascript
const allAdult = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
```

### 第二個陣列

再看第二個陣列，下面第三、四、五題會用到他們:

```javascript
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];
```

#### 3. 找出ID為"823423"的資料

利用`find()`，裡面觸發函式去尋找，記得使用`===` :

```javascript
const comment = comments.find(function(comment){
    if(comment.id === 823423){return true;}
});
```

一樣有簡化的版本:

```javascript
const comment = comments.find(comment => comment.id === 823423);
```

#### 4. 找出ID為"823423"資料的索引值

這邊使用`findIndex()`，裡面觸發函式去尋找，記得也要使用`===` :

```javascript
const index = comments.findIndex(comment => comment.id === 823423);
```

#### 5. 刪除ID為"823423"的資料

在JS30當中，這邊直接利用`slice()`跳過找到的索引值，並重新串接起來:

```javascript
const fixResult = [
    ...comments.slice(0 , index),
    ...comments.slice(index + 1)
];
```

## 補充資料

### <kbd>Javascript ES6</kbd> Array.splice()

第五題表示要把第一個索引值資料直接刪除，這邊也可以利用`splice()`的方式刪除。
`splice()`可以將值刪除，也能新增值進去，簡單方法如下:

```javascript
array.splice( 起始索引值 , 刪除數量 , 替換內容);
array.splice( 起始索引值 , 刪除數量(0) , 新增內容);
```

當你要刪除的時候，可以依照數量輸入，也可以利用`splice()`進行資料對換。

拿上面提的，今天只要刪除ID為"823423"的資料，那我們可以:

```javascript
const index = comments.findIndex(comment => comment.id === 823423);
comments.splice(index , 1);
```

注意的是，後面內容可填可不填，而且`splice()`是對陣列進行**直接下手處理**。