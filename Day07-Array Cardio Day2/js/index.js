    // ## Array Cardio Day 2
    
    // 準備資料
    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
    ];
    const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
    ];
  
    // Some and Every Checks
  
    // 1. Array.prototype.some() 
    // is at least one person 19 or older? 確認年紀是否為19
      
    // 正常寫法
    const isAdult = people.some(function(person){
        const thisYear = (new Date()).getFullYear(); //抓取今年年度
        if(thisYear-person.year >= 19){return true;}
    });
    console.log({isAdult});
  
    // 套用箭頭函式並簡化
    const AdultCheck = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log({AdultCheck});
      
    // Array.prototype.every() // is everyone 19 or older?
    const AllAdultCheck = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log({AllAdultCheck});
  
    // Array.prototype.find()
    const comment = comments.find(function(comment){
        if(comment.id === 823423){return true;}
    });
    console.log(comment);

    // 自幹一波
    const cmt = comments.find(comment => comment.id === 823423);
    console.log(cmt);
  
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    // Array.prototype.findIndex()
    // Find the comment with this ID
    const index = comments.findIndex(comment => comment.id === 823423);
    console.log(index);

    // delete the comment with the ID of 823423
    
    const fixResult = [
        ...comments.slice(0 , index),
        ...comments.slice(index + 1)
    ];
    console.table(fixResult);


  
  