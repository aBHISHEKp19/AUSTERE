const Discord = require('discord.js');
const { Client } = require("discord.js");
const { Intents } = require('discord.js');
//const ms = require('ms'); //alt
//const { timeSpan } = ms('2 days'); //alt

const { MessageEmbed: RichEmbed } = require("discord.js");

const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],
});



//const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] }); //alt

const { MessageEmbed } = require('discord.js');

require('dotenv').config();

const client = new Discord.Client({ intents: 32767 });

/*const client = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],
    partials: ["MESSAGE", "CHANNEL", "REACTION"]

});*/


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
const messagesAS = 3; //3 messages

//you will be allowed to send 3 messages in 5 seconds every message after that for the rest of the 5 seconds will be deleted.

client.on('messageCreate', async (message) => {
    if (message.author.bot || !message.guild) return;
    if (!AS[message.author.id]) AS[message.author.id] = {};
    if (!AS[message.author.id][message.guild.id]) AS[message.author.id][message.guild.id] = 1, setTimeout(() => { delete AS[message.author.id][message.guild.id] }, timeAS * 1000);
    else if (AS[message.author.id][message.guild.id] < messagesAS) AS[message.author.id][message.guild.id]++;
    else if (AS[message.author.id][message.guild.id] >= messagesAS) await message.delete(), message.reply(`Don't spam!`).then(e => e.delete({ timeout: 5000 }));
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

})*/


/*const alt = require("discord-anti-alt");
const account = new alt.config({
    days: 2,// only user who has less than 2 days ages will got kick
    options: "kick"
});

//let altChannel = "779585627595210772"; //Channel ID will you set as logs channel

client.on('guildMemberAdd', async member => {
    let play = account.run(member);
    let info = alt.profile(member); //Show the information about alt user
    if (play) {

        const embed = new Discord.MessageEmbed()
            .setAuthor(info.userTag, info.avatar)
            .setColor("RANDOM")
            .addField("Username", info.username)
            .addField("UserID", info.userID)
            .addField("User Age", info.userAge)
            .setTimestamp()
        return member.guild.channels.send({ embeds: [newEmbed] });
    }
})

*/


client.on('messageCreate', message => {
    if (message.content === prefix + 'ping') {

        message.channel.send('calculating ping....').then(async (msg) => {
            // msg.delete()
            const lil = new Discord.MessageEmbed()

                .setDescription("**STATUS**")
                .addField('Message Latency🎈', `${msg.createdTimestamp - message.createdTimestamp}ms`)
                .addField('API Latency🎈', `${client.ws.ping}ms`)
                .setTimestamp()
            msg.edit({ embeds: [lil] });
        })
    }
});



client.on('messageCreate', message => {

    if (message.content === prefix + 'stats') {
        return message.reply(`Server count: ${client.guilds.cache.size}.`);
    }

    /* if(message.content.startsWith(`${prefix}unbanall`)) {
         message.guild.bans.fetch()
         .then(bans => {
             bans.forEach(user => {
                 /*
                 Debug works
                 console.log(user.id);
                 */
    /*  message.guild.members.unban(user.id);
  });
})
.catch(e => console.log(e));
}*/

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const ARGS = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    switch (ARGS[0]) {
        case 'hello':

            const llo = new RichEmbed()
                .setTitle('chal nital tutiya')
                .setColor('RANDOM')
                .setTimestamp();
            message.author.send({ embeds: [llo] });
            //  message.author.send("chal nital tutiya")
            break;

        case 'heya':

            /*  const hello = new RichEmbed()
                  .setTitle('how are you')
                  .setColor('RANDOM')
                  .setTimestamp();
              message.author.send({ embeds: [hello] });*/
            message.author.send("hows you")
            break;
        case 'milkyy':

            const helo = new RichEmbed()
                .setTitle('meri milky ho')
                .setColor('RANDOM')
                .setTimestamp();
            message.author.send({ embeds: [helo] });
            //   message.author.send("meri milky ho")
            break;
    }

    if (command === 'purge') {

        client.commands.get('purge').execute(message, args, Discord);
    }



    if (command === 'newpurge') {

        client.commands.get('newpurge').execute(message, args);
    }

    if (command === 'kick') {

        client.commands.get('kick').execute(message, args, Discord);
    }


    if (command === 'rps') {

        client.commands.get('rps').execute(client, message, Discord);
    }
    if (command === 'trigger') {

        client.commands.get('trigger').execute(message, args);
    }

    if (command === 'hi') {

        client.commands.get('hi').execute(message, Discord); //embed
    }
    if (command === 'weather') {

        client.commands.get('weather').execute(client, message, args); //embed
    }



    else if (command === 'ban') {
        client.commands.get('ban').execute(message, args, Discord);
    }

    else if (command === 'unban') {
        client.commands.get('unban').execute(message, args, Discord);
    }



    else if (command === 'appy') {
        message.channel.send('`\ hnji aapki milky\`');
    }

    else if (command === 'dakki') {
        message.channel.send('`\ guu hai tu\`');
    }


    else if (command === 'mute') {
        client.commands.get('mute').execute(message, args, Discord);
    }


    else if (command === 'newmute') {
        client.commands.get('newmute').execute(message, args);
    }

    else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args, Discord);
    }


    else if (command === 'milky') {
        message.channel.send('`\ hnji aapka appy\`');
    }


    else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }

    /*   else if (command === 'ping') {
           client.commands.get('ping').execute(message, args,  client);
       }*/

});


client.on('messageDelete', message => {
    if (message.author.bot) return;
    if (message.mentions.users.bot) return;
    if (message.mentions.users.first()) {

        const lol = new Discord.MessageEmbed()
            .setColor('#fb1239')
            .setDescription(`${message.author} ghost pinged ${message.mentions.users.first()}`)
            .addField('Message Content', message.content)
            .setFooter('ghost ping krna buri baat')

        // const channel = client.channels.cache.get(`925991578160492624`)
        // channel.send({ embeds: [lol] }) 
        return message.channel.send({ embeds: [lol] });

    }


});


/*client.on('messageUpdate', async (oldMessage, newMessage) => {

    if (oldMessage == newMessage) return;
    if (oldMessage.author.bot) return;
    const editlog = new Discord.MessageEmbed()
        .setColor('#fb1239')
        .setTitle('Message Edited!!')
        .addField("Edited by:", `${oldMessage.author.username}`)
        .addField('Old message', oldMessage.content)
        .addField('New message', newMessage.content)
        .setThumbnail(oldMessage.author.displayAvatarURL({ dynamic: true }))
        // .setFooter(' badmosi nahi ')
        .setTimestamp();
    //  const channel = client.channels.cache.get(`925991578160492624`)
    //   channel.send({ embeds: [editlog] })


    oldMessage.channel.send({ embeds: [editlog] });*/

/*if (oldMessage.mentions.users.first()) {

    const yup = new Discord.MessageEmbed()
        .setColor('#fb1239')
        .setDescription(`${oldMessage.author} ghost pinged ${oldMessage.mentions.users.first()}`)
        .setFooter('ghost ping krna buri baat')

    /* const channel = Client.channels.cache.get('channelIDhere')
     channel.send({ embeds: [lol] })
    return oldMessage.channel.send({ embeds: [yup] })

}


});*/





client.login(process.env.TOKEN);