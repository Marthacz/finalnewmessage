var button1 = document.querySelector('.cheesebtn');
var myText = document.querySelector('.quote');
var clearbutton = document.querySelector('.clearbtn')

button1.addEventListener('click',selectCheese);

function selectCheese() {
  var cheesepuns =  ["What do you call it when a cheese goes #2? Fondue-due", "What did one cheese say to the other during philosophy class? I dis a brie", "What is a cheese's favorite type of music? R n'Brie", "How did the cheese professor start class every day? Oh queso", "What did one cheddar cheese say to the other cheddar cheese at prom? Looking sharp!", "Why did the cheese get in trouble? It was up to no gouda"];

  var randomItem = cheesepuns[Math.floor(Math.random()*cheesepuns.length)];
  myText.innerText = randomItem;
}

clearbutton.addEventListener('click', clear)

function clear(){
myText.innerText = "";

}
