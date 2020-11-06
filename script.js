'use strict';
let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
week.forEach((item) => {
    if (item == ('суббота') || item == ('воскресенье')) {
     document.write(item.bold(),"<br>");
    } else if (item == ('пятница')) {
            document.write(item.italics(),"<br>");}
    else {
        document.write(item,"<br>");
    }
  });

let arr = ['32', '27', '555', '104', '47', '88', '377']; 

arr.forEach((item) => {
  if (item.startsWith('3') || item.startsWith('7')) {
   document.write(item,"<br>");
  }
});