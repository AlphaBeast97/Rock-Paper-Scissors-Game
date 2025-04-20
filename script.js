let win_num = 0;
let lose_num = 0;

const winCounter = document.querySelector(".win-counter");
const loseCounter = document.querySelector(".lose-counter");

let msg = document.querySelector(".msg");
let msgBox = document.querySelector(".msg-con");

const choices = document.querySelectorAll(".circle");

const playGame = (user, comp) => {
  console.log(user, comp);
  if(user === comp){
    msg.innerHTML = "Draw";
    msgBox.style.background = "#261C15";
  }
  else if((user === "rock" && comp === "paper") || (user === "paper" && comp === "scissors") || (user === "scissors" && comp === "rock")){
    loseCounter.innerHTML = ++lose_num;
    msgBox.style.background = "red";
    msg.innerHTML = 'Your ' + user + ' was defeated by ' + comp;
  } 
  else{
    winCounter.innerHTML = ++win_num;
    msg.innerHTML = 'Your ' + user + ' defeated ' + comp;
    msgBox.style.background = "green";
  }
}

choices.forEach ((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    const op = ["rock", "paper", "scissors"]; //comp options
    let compChoice = op[Math.floor(Math.random() * op.length)]; //comp pick
    
    playGame(userChoice, compChoice);
  });
});


// styling area
// let el = document.querySelectorAll(".elements");
// let circle = document.querySelectorAll(".circle");
// circle.forEach((cir) => {
//     cir.addEventListener("mouseenter", () => {
//         let attr = cir.getAttribute("id");        
//         opacityChanger(attr, el);
//     })

//     cir.addEventListener("mouseleave", () => {
//         // Optionally reset the opacity when the mouse leaves
//         el.forEach(element => {
//           element.style.opacity = "1"; // Or whatever the default opacity is
//         });
//     })
// });


// const opacityChanger = (attr, elements) => {
//     if (attr === "rock") {
//         elements[1].style.opacity = "0.7";
//     }
//   };

// AI DID THIS 🥲🥲🥲🥲
let circle = document.querySelectorAll(".circle");

circle.forEach((cir, index) => {
  cir.addEventListener("mouseenter", () => {
    const parentDiv = cir.parentNode;
    if (parentDiv && parentDiv.children.length >= 3) {
      // Get all child elements of the parent div
      const children = Array.from(parentDiv.children);

      if (index === 0) { // First circle hovered
        children[1].style.opacity = "0.7";
        children[2].style.opacity = "0.7";
      } else if (index === 1) { // Second circle hovered
        children[0].style.opacity = "0.7";
        children[2].style.opacity = "0.7";
      } else if (index === 2) { // Third circle hovered
        children[0].style.opacity = "0.7";
        children[1].style.opacity = "0.7";
      }
    }
  });

  cir.addEventListener("mouseleave", () => {
    const parentDiv = cir.parentNode;
    if (parentDiv && parentDiv.children.length >= 3) {
      // Reset opacity for all child elements
      Array.from(parentDiv.children).forEach(child => {
        child.style.opacity = "1";
      });
    }
  });
});