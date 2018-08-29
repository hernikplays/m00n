const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  const tie = bot.emojis.find("name", "blobwoah");
  const rocklose = bot.emojis.find("name", "blobfrown");
  const paperwin = bot.emojis.find("name", "blobpaper");
  const scissorslose = bot.emojis.find("name", "blobsad");
  const scissorswin = bot.emojis.find("name", "blobscissors");
  const paperlose = bot.emojis.find("name", "blobpapersad");
  const rockwin = bot.emojis.find("name", "blobrock");







  

    var choice = args[0];
    if(!choice) return message.channel.send("You need to specify rock, paper or scissors");
  if (choice == "paper" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    console.log(numb);
    if (numb <= 33) {
      var choice2 = "paper";
    } else if (numb > 66) {
      var choice2 = "rock";
    } else if(numb <= 66 && numb >= 34){
      var choice2 = "scissors";
    }
    if (choice2 == "scissors") {
      var response = `${scissorswin} I'm choosing **Scissors**! I win!`
    } else if (choice2 == "paper") {
      var response = `${tie} I'm choosing **Paper**! It's a tie!`
    } else {
      var response = `${rocklose} I'm choosing **Rock**! You win!`
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
      var response = `${paperwin} I'm choosing **Paper**! :hand_splayed: I win!`
    } else if (choice2 == "rock") {
      var response = `${tie} I'm choosing **Rock**! :punch: It's a tie!`
    } else {
      var response = `${scissorslose} I'm choosing **Scissors**! :v: You win!`
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
      var response = `${paperlose} I'm choosing **Paper**! :hand_splayed: You win!`
    } else if (choice2 == "scissors") {
      var response = `${tie} I'm choosing **Scissors**! :v: It's a tie!`
    } else {
      var response = `${rockwin} I'm choosing **Rock**! :punch: I win!`
    }
    message.channel.send(response);
  } else {
    message.channel.send(`You need to use \`e!rps\` <rock|paper|scissors>`);
  }
    
}

module.exports.help = {
    name: "rps"
}