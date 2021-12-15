const Discord = require('discord.js');
const { Client } = require("discord.js");
const { Intents } = require('discord.js');
const ms = require('ms'); //alt
//const { timeSpan } = ms(' 2 days'); //alt
const { MessageEmbed } = require('discord.js');

require('dotenv').config();





const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],
});


const prefix = '&';

const fs = require('fs');

//client.commands.find(a => a.aliases && a.aliases.includes(command)); //alias

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


/*let AS = {}; //Anti-Spam

const timeAS = 5; //5 seconds
const msgsAS = 3; //3 messages

//you will be allowed to send 3 messages in 5 seconds every message after that for the rest of the 5 seconds will be deleted.

client.on('messageCreate', async (message) => {
    if (message.author.bot || !message.guild) return;
    if (!AS[message.author.id]) AS[message.author.id] = {};
    if (!AS[message.author.id][message.guild.id]) AS[message.author.id][message.guild.id] = 1, setTimeout(() => { delete AS[message.author.id][message.guild.id] }, timeAS * 1000);
    else if (AS[message.author.id][message.guild.id] < msgsAS) AS[message.author.id][message.guild.id]++;
    else if (AS[message.author.id][message.guild.id] >= msgsAS) await message.delete(), message.reply(`Don't spam!`).then(e => e.delete({ timeout: 5000 }));
    else AS[message.author.id] = {}, AS[message.author.id][message.guild.id] = 1
}) 

*/

/*client.on('guildMemberAdd', member => {


   const createdAt = new Date(member.user.createdAt).getTime();
   const difference = Date.now() - createdAt;

   if (difference < timeSpan) {

       //member.send('you are ann alt account');
       member.kick('alt account');
       message.channel.send(`<@${member.user.id}> was an alt account`);
   }

})
*/

client.on('messageCreate', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();



    if (command === 'purge') {

        client.commands.get('purge').execute(message, args);
    }

    // if (command === 'newpurge') {

    // client.commands.get('newpurge').execute(message, args);
    //  }

    if (command === 'clear') {

        client.commands.get('clear').execute(message, args);
    }


    if (command === 'hi') {

        client.commands.get('hi').execute(message, Discord); //embed
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


    // else if (command === 'newmute') {
    //  client.commands.get('newmute').execute(message, args);
    //  }

    else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    }


    if (command === 'milky') {
        message.channel.send('`\ hnji aapki milky\`');
    }



});


client.login(process.env.TOKEN);