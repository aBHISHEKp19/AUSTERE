const Discord = require('discord.js');
const { Client } = require("discord.js");
const { Intents } = require('discord.js');


require('dotenv').config();





const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],
});


const prefix = '&';

const fs = require('fs');



client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => { console.log('austere is here'); });




const validPermissions = [

    "ADMINISTRATOR",
    "BAN_MEMBERS",
    "KICK_MEMBERS",
    "MANAGE_MESSAGES",
    "MUTE_MEMBERS",

]






client.on('messageCreate', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();



    if (command === 'purge') {

        client.commands.get('purge').execute(message, args);
    }

    if (command === 'clear') {

        client.commands.get('clear').execute(message, args);
    }





    else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    }


    else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    }


    else if (command === 'appy') {
        message.channel.send('`\ hnji aapka appyy\`');
    }

    else if (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    }

    else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    }


    if (command === 'milky') {
        message.channel.send('`\ hnji aapki milky\`');
    }



});


client.login(process.env.TOKEN);