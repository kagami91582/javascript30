# Day02-JS and CSS Clock
JS30的第二天，我們要準備的是做出一個傳統石英鐘。

## 操作流程
### 1. 製作時針
一般傳統時鐘裡，有時針、分針與秒針。

我們直接利用CSS對於時針、分針與秒針來設定就可以了。

```CSS
  .hand {
    /* 先設定針的形狀 */
    width:50%;
    height:6px;
    background:black;
    position: absolute;
    top:50%;
    /* 進行變形設定 */

    /* 定位 */
    transform-origin: 100%;
    /* 轉向 */
    transform: rotate(90deg);
    /* 設定變動所需時間 */
    transition: all .05s;
    /* 設定變動時間曲線 */
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.5, 1);
  }
```

### 2. 設定時間
場景換到JS，我們可以直接使用`Data()`去抓取目前時間:
```javascript
const time = new Date();
```
接著，我們來抓出他的小時、分鐘與秒:
```javascript
const sec = time.getSeconds();
const min = time.getMinutes();
const hr = time.getHours();
```

### 3.設定角度並顯示
既然抓到時間了，那我們可以直接算出角度套上去。

先知道的是，我們設定的角度是90度，那
```
小時為12，那小時顯示的角度為 : (小時/12)*360

分鐘為60，那分鐘顯示的角度為 : (分鐘/60)*360
秒數為60，那秒數顯示的角度為 : (秒數/60)*360
```
那我們可以寫上來就變成:
```javascript
const secDeg = ((sec/60)*360);
const minDeg = ((min/60)*360);
const hrDeg = ((hr/12)*360);
```
我知道你想吐槽什麼，傳統時鐘是沒有上下午之分的!

接下來直接套上去在設定的`div`吧
```javascript
secHand.style.transform = `rotate(${secDeg}deg)`;
minHand.style.transform = `rotate(${minDeg}deg)`;
hrHand.style.transform  = `rotate(${hrDeg}deg)`;
```
**且慢!**你一定在想怎麼角度怪怪的。

還記得一開始說的90度嗎?要加在一開始設定角度的地方，所以要改成:
```javascript
const secDeg = ((sec/60)*360)+90;
const minDeg = ((min/60)*360)+90;
const hrDeg = ((hr/12)*360)+90;
```
再回去看看應該就完成了。

---
## 名詞解釋
### <kbd>CSS3</kbd> transform
我們可以利用transform來對一個物件進行縮放、旋轉、移動、傾斜等效果，可以參考[W3School上面的說明](https://www.w3schools.com/cssref/css3_pr_transform.asp)。

#### [skew 傾斜](https://jsbin.com/subexiqofe/edit?html,css,output)
要對一個物件進行傾斜拉長，可以使用:
```css
transform: skew (X-angle, Y-angle); 
transform: skewX(X-angle);          // 對X軸傾斜
transform: skewY(Y-angle);          // 對Y軸傾斜
```

#### [rotate 翻轉](https://jsbin.com/motejujiwa/edit?html,css,output)
通常我們對一個平面物件使用翻轉，可以直接打:
```css
transform: rotate(angle);
//指對一個物件進行順時針旋轉
```
但假如是對上3D物件，則是直接在rotate後面加上移動的XYZ軸:
```css
transform: rotateX(angle);   // 對X軸旋轉
transform: rotateY(angle);   // 對Y軸旋轉
transform: rotateZ(angle);   // 對Z軸旋轉
```
也可以整合成一個:
```css
transform: rotate3d( X, Y, Z, angle);
```
其中，XYZ是以後面輸入的角度為基準，進行計算的，例如:
```css
transform: rotate3d(1, 0.5, 2, 30deg);
/* X = 1 * 30deg   = 30deg */
/* Y = 0.5 * 30deg = 15deg */
/* Z = 2 * 30deg   = 60deg */
```

#### [translate 平移](https://jsbin.com/mesowuzacu/1/edit?html,css,output)
```css
transform: translate (20px,50px);   // 對X,Y軸移動
transform: translateX(40px);        // 只移動X軸
transform: translateY(30px);        // 只移動Y軸
```

### <kbd>CSS3</kbd> transform-origin
這個則是搭配transform使用，用來固定物件起始點。
[(先放一波說明)](https://wcc723.github.io/css/2013/10/10/css-transform-origin/)

### <kbd>CSS3</kbd> transition-timing-function
transition-timing-function，可以使用這個調整物件移動的時間曲線。
![](https://i.imgur.com/B4pptRj.png)
預設值是`ease`。

### <kbd>JavaScript</kbd> Date()
在JavaScript中，利用Date()就可以得到現在的時間，用法是:
```javascript
var time = new Date();
```

### <kbd>JavaScript</kbd> setInterval()
在JavaScript裡，要讓一個動作在指定的循環週期當中進行，就可以用到這個，用法是:
```javascript
setInterval(action,times);
```
其中，`action`可以直接給他**一個動作**，或是指定**一個函式**，甚至是直接寫個**暱名函式**都是可以的。而時間則是以**毫秒**為單位。