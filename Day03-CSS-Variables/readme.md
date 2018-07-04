# JS30-Day03 CSS-Variables

來到JS30的第三天，我們來利用Javascript去調整CSS的參數，顯示出線上邊框吧。

## 製作流程
### 1. 設定三個變數供之後調整
我們先設定三個變數，可以先給他預設值。分別是:
```
--base:    邊框顏色
--spacing: 邊框大小
--blur:    進行模糊/霧化的值
```
這邊就先給他們變數:
```css
:root{
    --base: #ffc600;
    --spacing: 10px;
    --blur: 10px;
}
```
設定好了之後就可以直接套在我們要用的地方，主要是`img`還有類別為`h1`的標題`<span>`裡:
```css
img{
    padding: var(--spacing);
    background: var(--base);
    filter: blur(var(--blur));
}
.h1{
    color: var(--base);
}
```

### 2. 
### 3. d
### 4. d
### 5. d
### 6. d
### 7. d

## 名詞解釋
### <kbd>CSS3</kbd> :root
在CSS3當中，`:root`就是指向HTML的根目錄，為全域的設定，使用方法是:
```css
:root{
    CSS屬性:使用設定值;
}
```

### <kbd>CSS3</kbd> var()

CSS可以使用變數，但使用方法與Javascript略有不同，在邊樹名稱前必須有`--`，就會變成:
```css
--變數名稱:使用參數;
```

例如預設接下來看到`--blue`變數就都是藍的，那就可以:
```css
:root{ /* 這邊為全域 */
    --blue:#00b2ff;
}

main{ /* 這邊為區域 */
    --blue:#00b2ff;
}
```

那我們要使用他們的話，要用`var()`包住並放在()裡面。
```css
main div{
    background:var(--blue);
}
```

### <kbd>CSS3</kbd> fliter
`fliter`是CSS3新增的用法，可以對設定的物件進行霧化、明暗等調整。
```css
img{
    fliter:none;
    fliter:brightness(20%);    /* 亮度 */
    fliter:blur(10px);         /* 霧化模糊 */
    fliter:invert(70%);        /* 對比色 */
    fliter:grayscale(100%);    /* 灰階 */
    fliter:saturate(8);        /* 飽和度 */
    fliter:sepia(30%);         /* 深褐色 */
    fliter:contrast(5);        /* 對比度 */
    fliter:drop-shadow(5px 5px 5px #ccc);     /* 陰影 */
    fliter:hue-rotate(30deg);  /* 色相旋轉 */
}
```
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
