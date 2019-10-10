const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    var choice = args[0];
    if(!choice) return message.channel.send("You need to specify rock, paper or scissors");
  if (choice == "paper" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    
    if (numb <= 33) {
      var choice2 = "paper";
      console.log(numb+" papers");
    } else if (numb > 66) {
      var choice2 = "rock";
      console.log(numb+" rock");
    } else if(numb <= 66 && numb >= 34){
      var choice2 = "scissors";
      console.log(numb+" scissors");
    }
    if (choice2 == "scissors") {
      var response = `I'm choosing **Scissors**! :v: I win!`
    } else if (choice2 == "paper") {
      var response = `I'm choosing **Paper**! :hand_splayed: It's a tie!`
    } else {
      var response = `I'm choosing **Rock**! :punch: You win!`
    }
    message.channel.send(response);
  } else if (choice == "rock" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "paper") {
      var response = `I'm choosing **Paper**! :hand_splayed: I win!`
    } else if (choice2 == "rock") {
      var response = `I'm choosing **Rock**! :punch: It's a tie!`
    } else {
      var response = `I'm choosing **Scissors**! :v: You win!`
    }
    message.channel.send(response);
  } else if (choice == "scissors" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "rock") {
      var response = ` I'm choosing **Paper**! :hand_splayed: You win!`
    } else if (choice2 == "scissors") {
      var response = ` I'm choosing **Scissors**! :v: It's a tie!`
    } else {
      var response = ` I'm choosing **Rock**! :punch: I win!`
    }
    message.channel.send(response);
  } else {
    message.channel.send(`Only use rock, paper or scissors`);
  }
    
}

module.exports.help = {
    name: "rps"
}