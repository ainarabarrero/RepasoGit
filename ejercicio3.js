let num1 = prompt("Introduce num","0");
let num2 = prompt("Introduce num","0");

parseInt(num1);
parseInt(num2);

for(let i=num1;i<=num2;i++){
    if(i%2==0){
        console.log(i)
    }
}