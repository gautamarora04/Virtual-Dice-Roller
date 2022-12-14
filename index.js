// random number for player 1

var number = Math.random();
number = number*6;
number = Math.floor(number) + 1;
console.log(number);
document.getElementById("img1");

// random number for player 2

var number2 = Math.random();
number2 = number2*6;
number2 = Math.floor(number2) + 1;
console.log(number2);

var heading = document.querySelector("h1");
if(number> number2)
    heading.innerHTML = 'Player:1 wins';
else if(number2 > number)
    heading.innerHTML = 'Player:2 wins';
else heading.innerHTML = 'This is a Draw';

var image1 = document.getElementById('img1');
var image2 = document.getElementById('img2');

var add1 = 'images/dice' + number + '.png';
newimage1 = image1.setAttribute('src', add1 );

var add2 = 'images/dice' + number2 + '.png';
newimage2 = image2.setAttribute('src', add2);
