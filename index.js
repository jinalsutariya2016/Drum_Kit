
// ...when button is pressed......
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

// ........when keyboard key is pressed.....
document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "z":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;
    case "x":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;

    case "c":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;
    case "v":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;

    case "b":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;

    case "n":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;

    case "m":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;

    default: console.log(buttonInnerHTML);
  }

}

function buttonAnimation(currentKey){

  document.querySelector("." + currentKey).classList.add("pressed");

  setTimeout(function(){
      document.querySelector("." + currentKey).classList.remove("pressed")
  }, 100);
}
