const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');

exports.run = async (client, message, args) => {
  




  this.fighting = new Set();
  
        let opponent = message.mentions.users.first()
        if (!opponent) return message.reply("Please tag someone!.")
  
  if (opponent.bot) return message.reply('You cant play with bots.');
  if (opponent.id === message.author.id) return message.reply('You cant fight with yourself.');
                if (this.fighting.has(message.channel.id)) return message.reply('idk.');
                this.fighting.add(message.channel.id);
                try {
                        if (!opponent.bot) {
                await message.channel.send(`${opponent}, An fight request came! If you want to fight say (\`yes\` if not then say \`no\`)`);
                                const verification = await verify(message.channel, opponent);
                                if (!verification) {
                                        this.fighting.delete(message.channel.id);
                                        return message.channel.send(`User didnt accepted the request.`);
                                }
                        }
                        let userHP = 500;
                        let oppoHP = 500;
                        let userTurn = false;
                        let guard = false;
                        const reset = (changeGuard = true) => {
                                userTurn = !userTurn;
                                if (changeGuard && guard) guard = false;
                        };
                        const dealDamage = damage => {
                                if (userTurn) oppoHP -= damage;
                                else userHP -= damage;
                        };
                        const forfeit = () => {
                                if (userTurn) userHP = 0;
                                else oppoHP = 0;
                        };
                        while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
                                const user = userTurn ? message.author : opponent;
                                let choice;
                                if (!opponent.bot || (opponent.bot && userTurn)) {
                                        await message.channel.send(stripIndents`
                                                ${user}, What do you want to do? \`fight\`, \`protect\`, \`super saiyan\`, or \`run\`?
                                                **${message.author.username}**: ${userHP} :heartpulse:
                                                **${opponent.username}**: ${oppoHP} :heartpulse:
                                        `);
                                        const filter = res =>
                                                res.author.id === user.id && ['fight', 'protect', 'super saiyan', 'run'].includes(res.content.toLowerCase());
                                        const turn = await message.channel.awaitMessages(filter, {
                                                max: 1,
                                                time: 30000
                                        });
                                        if (!turn.size) {
                                                await message.reply(`Sorry but, times up!`);
                                                reset();
                                                continue;
                                        }
                                        choice = turn.first().content.toLowerCase();
                                } else {
                                        const choices = ['fight', 'protect', 'super saiyan'];
                                        choice = choices[Math.floor(Math.random() * choices.length)];
                                }
                                if (choice === 'fight') {
                                        const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
                                        await message.channel.send(`${user}, **${damage}** hasar vurdu!`);
                                        dealDamage(damage);
                                        reset();
                                } else if (choice === 'protect') {
                                        await message.channel.send(`${user}, kendisini süper kalkan ile savundu!`);
                                        guard = true;
                                        reset(false);
                                } else if (choice === 'super saiyan') {
                                        const miss = Math.floor(Math.random() * 4);
                                        if (!miss) {
                                                const damage = randomRange(100, guard ? 150 : 300);
                                                await message.channel.send(`${user}, you had the enough power and you hit **${damage}** to the opponent!!`);
                                                dealDamage(damage);
                                        } else {
                                                await message.channel.send(`${user}, Not enough power!`);
                                        }
                                        reset();
                                } else if (choice === 'kaç') {
                                        await message.channel.send(`${user}, ran away. What a scared kid.`);
                                        forfeit();
                                        break;
                                } else {
                                        await message.reply('Im sorry but i didnt understand.');
                                }
                        }
                        this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
                        return message.channel.send(`The game ended! Congrats, **${winner}** won! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`);
                } catch (err) {
                        this.fighting.delete(message.channel.id);
                        throw err;
                }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['1vs1', '1v1'],
	permLevel: `Users`
};

exports.help = {
  name: 'fight',
   category: "Fun",
  description: 'Fight with a user!',
  usage: 'fight <@user>'
};