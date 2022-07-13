let target = document.querySelector("#start");
let stringArr = ["Welcome!!","어서오세요"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
let selectStringArr = selectString.split("");


function randomString(){
    let stringArr = ["Welcome!!","어서오세요"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
let selectStringArr = selectString.split("");
return selectStringArr;
}

function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//텍스트 하나씩출력 
//shift == > 맨앞문자를 하나씩 옮김

function dynamic(randomArr){
    if(randomArr.length>0){
        target.textContent+=randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping,3000);
    }
}

dynamic(randomString());
//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active"); // 커서가 반복되도록 
}
setInterval(blink,500); //반복함수 blink 0.5초마다 실행