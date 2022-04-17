

num1 = document.querySelector(".num1")
num2 = document.querySelector(".num2")
// result=document.querySelector(".result")
let x = Math.floor((Math.random() * 100) + 1);
let y= Math.floor((Math.random() * 100) + 1);



num1.innerText=x;
num2.innerText=y
sum = x+y;


console.log(x);
console.log(y);
console.log(sum);
right = document.querySelector('.right');
wrong = document.querySelector('.wrong');
wrong.style.display = 'none';
right.style.display = 'none';

function Calculate(){

        answer = document.querySelector(".form1").value;
        console.log(answer);
        check_ans = sum==answer
        if(check_ans){
            right.style.display = 'block';
        }else{
            wrong.style.display = 'block';

        }

}