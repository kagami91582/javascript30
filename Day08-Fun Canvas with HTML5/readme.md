# JS30-Day08 Fun Canvas with HTML5

來到JS30的第八天，這次讓我們做出一個可以繪圖的網頁吧。

## 開始之前

### <kbd>HTML5</kbd> canvas

這是在HTML5新增，一開始只有在蘋果macOS上的Safari專有技術，之後才加入在HTML裡的技術，他能在頁面上顯示出一個點陣畫布區域，再搭配Javascript等等讓他運作、繪畫。

而canvas的基本運作方式是:

```html
<canvas id='draw' width='200px' height='200px'>
    你可以在這邊打字<br>
    若瀏覽器不支援HTML5的時候這邊會顯示出來
</canvas>
```

若要使用他，我們可以在Javascript上召喚:

```javascript
const canvas = document.querySelector('#draw');
```

單單這樣是不夠的，我們還要輸入`getContext()`，讓這個畫布渲染成可以繪製的2D/3D畫布。

這個範例要給他2D畫布，就可以這樣輸入:

```javascript
const draw = canvas.getContext('2d');
```

簡單運作一下，例如我們要在這個正方形範圍畫個對角線，就使用:

```javascript
draw.moveTo(0, 0);      //線的起點
draw.lineTo(200, 200);  //線的終點
draw.stroke();          //使其畫上
```

## 補充資料

### <kbd>HTML5</kbd> canvas的更多用法

這個例子當中使用線的方式繪圖，當然也能使用繪製各種圖形，這邊就簡單說明矩形和圓形的繪製方法。

還有更多說明可以看[這邊](https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)。

#### 矩形

```javascript
draw.fillStyle='blue';
draw.fillRect(X座標, Y座標, 寬, 高);
```

* fillstyle設定顏色。
* fillRect是設定形狀。X座標左負右正，Y座標上負下正。

#### 圓形

開始畫圓之前，我們可以給他個指令開始繪製路徑:

```javascript
draw.beginPath();
```

先別這麼快問為什麼用`beginPath()`，待會來說。

接下來要畫圓囉，會稍微複雜:

```javascript
draw.arc( 圓心X座標, 圓心Y座標, 半徑, 起始角度, 結束角度);
draw.stroke();
```

`arc()`內包含的數據有:
* 圓心X座標左負右正，圓心Y座標上負下正。
* 半徑單位為px。
* 起始角度與結束角度以弧度計算。

其中座神秘的就是角度了，角度預設是弧度(radian)，他的換算公式是:


$ \pi $

