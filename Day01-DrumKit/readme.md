# JS30-Day01 DrumKit

開始JS30囉! 第一天要做出一個可以利用按鍵互動的爵士鼓組合。

## 製作流程
### 開始之前
在開始之前，先找到下面幾個:
1. **找尋KeyCode**：找到所謂的KeyCode，它不同於常見的ASCII Code，去餵狗後會看到很多地方有提供。這邊用[keycode.info](http://keycode.info/)這個網站去找，然後記下他們。
2. 記住JS30是**有提供練習檔案**的。這邊切版則是自己來，~~對，我之後才知道原來有提供檔案~~。

### 開始下手
(Step1) 

## 名詞解釋

### <kbd>(HTML4)</kbd> < kbd >
是HTML使用的標籤之一，指使用的按鍵部分。通常預設的字型是monospace。
### <kbd>(HTML5)</kbd> < audio >
在HTML5新增的標籤，預設給媒體播放的標籤(以音效為主)。
預設用法是
```html
<audio src='音效路徑' controls>text</audio>
```
其中，標籤內可以使用的屬性有:
1. src : 媒體檔案的路徑位置，可以是資料夾，也可以是網址。
2. controls : 給媒體檔案使用的控制列，預設value就是`controls`，每個瀏覽器樣子也不同。
3. autoplay : 當你媒體檔案準備好就會自動播放，預設value就是`autoplay`。
4. loop : 自動重複播放。
5. muted : 預設靜音。
6. preload : 設定這個音效載入網頁的時間，其中包含:
    * none : 網頁載入完成後，依舊不載入音效。
    * auto : 自動載入音效。
    * meta : 會自動載入前半部分音效，等到播放時才繼續抓取後半部分的音效。

注意的是，**若硬要在audio標籤裡放入影片路徑，是只會出現聲音的**，使用影片嵌入可以使用video標籤，大概長這樣:
```html
<video src='音效路徑' width='320' height='240' controls>text</video>
```

### <kbd>(HTML5)</kbd> data-* 屬性
在HTML5中，我們可以利用data宣告一個屬於自己的屬性，來記錄我們要使用的值。其中的`*`是可以自己定義名稱的，例如在第一天的例子中使用的這些:
```html
<audio data-key="65" src="audio/clap.wav"></audio>
<div data-key="76" class="button"></div>
```
那我們要怎麼利用這些數字呢，在HTML直接宣告後，可以在javascript上用`dataset`使用這些變數，例如:
```html
<div data-num="99" id="getNumber"></div>
```
```javascript
let output = document.getElementById('getNumber');

console.log(output.dataset);
// [object DOMStringMap] { num : "76" }

console.log(output.dataset.num); 
// "99"
```
先宣告一個值過去抓，再使用`dataset`去指定`data-num`，再去找他裡面的`num`印出它的結果。

當然我們也可以在CSS當中使用他們，直接把整個屬性名稱打下去就可以囉:
```css
div::before{
    content : attr(data-num);
}
```
那在網頁中就會顯示出99這個數字。

### <kbd>(HTML DOM)</kbd> currentTime
利用currentTime，我們可以得到影音媒體的時間，甚至去修改他們。時間單位是秒。

[看看這個範例](https://jsbin.com/kuwigibalo/edit?html,js,output)
```javascript
let video = document.getElementById('myVideo');
console.log(video.currentTime);
//依照影片停留時間回答當下停留秒數。
video.currentTime = 20 ;
//設定影片停在20秒
```
