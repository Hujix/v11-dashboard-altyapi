const
    rps = [
        'scissors',
        'rock',
        'paper'
    ],
    rpsF = (userAns, botAns) => {
        let choice = userAns,
            botChoice = botAns;
        if (choice === 'rock') {
            if (botChoice === 'scissors') {
                return 'won';
            } else if (botChoice === 'paper') {
                return 'You Lost';
            }

            return 'draw';
        } else if (choice === 'paper') {
            if (botChoice === 'rock') {
                return 'lost';
            } else if (botChoice === 'scissors') {
                return 'You Won!';
            }

            return 'draw';
        } else if (choice === 'scissors') {
            if (botChoice === 'rock') {
                return 'lost';
            } else if (botChoice === 'paper') {
                return 'You Won!';
            }

            return 'draw';
        }
    };

exports.run = async (client, msg, args) => {
    if (!args[0]) {
        return msg.channel.send('Please select one of the following  sp!rps <r,p,s>');
    }
    let choice = args[0].toLowerCase();
    choice = choice === 'r' ? 'rock' : choice;
    choice = choice === 'p' ? 'paper' : choice;
    choice = choice === 's' ? 'scissors' : choice;
    if (!rps.includes(choice)) {
        return msg.channel.send('Please select one of the following  sp!rps <r,p,s>');
    }
    let rand = Math.floor(Math.random() * 3);
    let botChoice = rps[rand];
    let result = rpsF(choice, botChoice);
    let answer = '';

    if (result === 'won') {
        answer = ':trophy: Congrats, you **won** :trophy: \nYour Choice `' + choice + '` | Bot\'s choice: `' + botChoice + '`';
    } else if (result === 'lost') {
        answer = ' **You Lost** :x: \nYour choice: `' + choice + '` | Bot\'s choice: `' + botChoice + '`';
    } else if (result === 'Draw') {
        answer = ':neutral_face:**draw** :neutral_face:\nYour choice: `' + choice + '` | Bot\'s choice: `' + botChoice + '`';
    }

    msg.channel.send(answer);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
 };
 
 exports.help = {
 name: 'rps',
   category: "Fun",
 description: 'Play rock paper scissors',
 usage: 'rps'
 }