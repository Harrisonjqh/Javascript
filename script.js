var password = "Nopassword";
var try = "Nopassword";
var count1=1;
var count2=2;
var count3=3;


if(password = try){
  alert(yes);
}else{
  alert(no);
}

if(count1==count2){
  alert(equal);
}else if(count1>count2){
  alert(big);
}else{
  alert(small);
}


function login(password){
  console.log('password is'+password);
}

login('Nopassword');

function characters(num){
  if(num==1){
    return "Frank";
  }
  if(num==2){
    return "Enzo";
  }
  if(num==3){
    return "Harrison";
  }
  else{
    return"Choose between 1-3 you idiot";
  }
}

var fruits = ["Apple","Banana","Watermelon","Peach","Tomato"];
var randomnum = Math.floor(Math.random()* fruits.length);

console.log(fruits[randomnum]);
