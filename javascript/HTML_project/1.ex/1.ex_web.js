let target = document.querySelector("#dynamic"); //다이나믹이라는 문서객체를 선택해라 
let stringArr = ["Learn to HTML","Learn to CSS","Learn to Javascript","Learn to Python","Learn to Ruby"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
//floor 소수점을 없애줌 
let selectStringArr=selectString.split("");

function randomString(){
    let target = document.querySelector("#dynamic"); //다이나믹이라는 문서객체를 선택해라 
    let stringArr = ["Learn to HTML","Learn to CSS","Learn to Javascript","Learn to Python","Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    //floor 소수점을 없애줌 
    let selectStringArr=selectString.split("");
    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent ="";
    dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length>0){
        target.textContent += randomArr.shift();
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
