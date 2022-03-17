(()=>{"use strict";const e=[e=>{let t,r=e.split(/\b\w+\b/).length-1;return t=r>=6?{score:0,advice:"The number of words is too high, prefer a number of words between 1 and 4 !"}:r>=4?{score:1,advice:"The number of words is too high, prefer a number of words between 1 and 4 !"}:0===r?{score:0,advice:"No email subject !"}:{score:2,advice:"Good job ! The length of your email subject is optimised ! "},t},e=>{let t,r=e.split(/[\+?{}.!]/).length-1;return r>1?t={score:0,advice:"Too many special characters! The ideal is not to use any."}:0===r?t={score:2,advice:"No special characters, great !"}:1===r&&(t={score:1,advice:"Too many special characters! The ideal is not to use any."}),t},e=>{let t={score:2,advice:"Good job, your email title doesn't start with a capital letter."};return/[A-Z]/.test(e.charAt(0))&&(t={score:0,advice:"Your email title should not start with a capital letter"}),t}],t=[e=>{let t,r=e.split(/[\u2022,\u2023,\u25E6,\u2043,\u2219]/).length-1;return 0===r?t={score:0,advice:"You don't use bullet point, Use it !"}:1===r?t={score:1,advice:"You use one bullet point, Use more !"}:r>1&&(t={score:2,advice:"You use more than one bullet point, Good !"}),t},e=>{let t,r=e.split(/\n{2}/).length;return r>=3&&r<=7?t={score:2,advice:"Your email has the right number of paragraphs."}:r>7&&r<10?t={score:1,advice:"Your email should contain between 3 and 7 paragraphs."}:(r>10||r<3)&&(t={score:0,advice:"Your email should contain between 3 and 7 paragraphs."}),t},e=>{let t;return t=/^.*\n{1}.*[?]+/.test(e)?{score:0,advice:"The second line of your email should not be a question."}:{score:2,advice:"No question in the second line, it's good !"},t},e=>{let t,r=e.length;return t=r>1e3?{score:0,advice:"Your email contains too many characters. Reduce them below 400."}:r<300?{score:0,advice:"Your email does not contain enough characters. Increase them above 300"}:r>300&&r<400?{score:2,advice:"Your email has the right number of characters (between 300 and 400)."}:{score:1,advice:"The length of your mail can be optimised. Try between 300 and 400 characters."},t}],r=2*(e.length+t.length),o=e=>{let t;return t=2===e.score?'<div class="marker green d-flex align-items-center justify-content-center">+</div>':1===e.score?'<div class="marker orange d-flex align-items-center justify-content-center">=</div>':'<div class="marker red d-flex align-items-center justify-content-center">-</div>',t},c=e=>{let t;return t=e<3?"rgb(255,0,0)":e>3&&e<7?"rgb(255,165,0)":"rgb(0,128,0)",t};class a{constructor(e,t){this.input=e,this.functionArray=t}get globalscore(){let e=0;return this.functionArray.forEach((t=>{e+=t(this.input).score})),e}get detailscores(){let e=[];return this.functionArray.forEach((t=>{e.push(t(this.input))})),e}}const n=document.querySelector("#btn-send"),s=document.querySelector("#globalscore"),i=document.querySelector("#detailscore");n.addEventListener("click",(n=>{n.preventDefault();let l,d,u=document.querySelector(".subject-input").value,h=document.querySelector(".body-input").value,m=((""===u?0:new a(u,e).globalscore)+(""===h?0:new a(h,t).globalscore))/r*10;document.querySelector("#gauge")&&document.querySelector("#gauge").remove(),s.insertAdjacentHTML("beforeend",'<div id="gauge" class="gauge"></div>'),document.querySelectorAll(".detail-score")&&document.querySelectorAll(".detail-score").forEach((e=>{e.remove()})),document.querySelectorAll(".marker")&&document.querySelectorAll(".marker").forEach((e=>{e.remove()})),l=""===u?[{score:0,advice:"You don't have subject's mail !"}]:new a(u,e).detailscores,d=""===h?[{score:0,advice:"You don't have body's mail !"}]:new a(h,t).detailscores,l.forEach((e=>{let t=o(e);i.insertAdjacentHTML("beforeend",`<div class="detail-score mb-2 d-flex justify-content-between align-items-center"><div class="w-75">${e.advice}</div> ${t}</div>`)})),d.forEach((e=>{let t=o(e);i.insertAdjacentHTML("beforeend",`<div class="detail-score mb-2 d-flex justify-content-between align-items-center"><div class="w-75">${e.advice}</div> ${t}</div>`)})),new JustGage({id:"gauge",value:m,min:0,max:10,valueFontColor:c(m),labelFontColor:"rgb(23, 231, 217)",counter:!0,customSectors:{percents:!0,ranges:[{color:"#FF3B30",lo:0,hi:50},{color:"#3BFF30",lo:51,hi:100}]}})}))})();