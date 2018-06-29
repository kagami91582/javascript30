
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// 1. 利用 fliter 進行篩選，找出在inventors陣列當中，1500年代出生的人。 
//    Array.prototype.filter()

const fifteen = inventors.filter( inventors => (inventors.year >= 1500 && inventors.year < 1600));
console.log("利用fliter找出在陣列當中，1500年代出生的人");
console.table(fifteen);


// 2. 利用inventors陣列挑出姓與名，並組合出完整的名字。
//    Array.prototype.map()
console.log("挑出姓名並組合");
//方法一
const fullName = inventors.map(inventors => `${inventors.first} ${inventors.last}`);
console.log(fullName);
//方法二
const fullName2 = inventors.map(inventors => inventors.first+" "+inventors.last);
console.log(fullName2);


// 3. 依照陣列中出生日期，從老到年輕排列
//    Array.prototype.sort()
console.log("依照陣列中出生日期，從老到年輕排列");

// const ordered = inventors.sort(function(a,b){
//     if(a.year > b.year){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.table(ordered);

// if可以省略成 ( 條件式 ? true : false );
const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1 );
console.table(ordered);


// 4. How many years did all the inventors live?
//    Array.prototype.reduce()
var totalyear = inventors.reduce((total,inventors) => {
    return total + (inventors.passed - inventors.year);
} , 0);
console.log(totalyear);

// 5. Sort the inventors by years lived
const oldest = inventors.sort(function(a,b){
    const last = a.passed - a.year;
    const next = b.passed - b.year;
    return (last > next ? -1 : 1);
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 以下指令請用上面網址測試
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));


// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort(function(lastOne,nextOne){
    const [aLast,aFirst] = lastOne.split(', ');
    const [bLast,bFirst] = nextOne.split(', ');
    return aLast > bLast ? -1 : 1 ;
});
console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj,item){
    if(!obj[item]){
        obj[item] = 0 ;
    }
    obj[item]++;
    return obj;
},{

});
console.log(transportation);