const readline = require('readline');
/* this is to take in the read line event */
const rl = readline.createInterface({input : process.stdin , output : process.stdout}); // readline for taking stdlin and
let num1 = Math.floor((Math.random() * 10)+1);
let num2 = Math.floor((Math.random() * 10)+1);
let answer = num1 + num2;
rl.question(`What is ${num1} + ${num2} ? \n`,
(userInput)=>{
    console.log(userInput);
    if(userInput.trim() == answer){
        rl.close();
    }
    else{
        rl.setPrompt('Incorrect Respone Please Try Again \n')
        rl.prompt();

        rl.on('line',(userInput)=>{
            if(userInput.trim() == answer){
               rl.close();
            }
            else{
                rl.setPrompt("Incorrect Resopese! \n"+`What is ${num1} + ${num2} ? \n`);
                rl.prompt();
            }
        });
    }
});
rl.on('close',()=>{
    console.log("Correct !!");
});