const Discord = require('discord.js');
const { Client } = require("discord.js");
const { Intents } = require('discord.js');
//const ms = require('ms'); //alt
//const { timeSpan } = ms('2 days'); //alt
/*const mongoose = require('mongoose');*/

const { MessageEmbed: RichEmbed } = require("discord.js");
const Id = "910239243371163698";

const bot = new Client({
    intents: [Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING],

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


client.once('ready', () => {
    console.log('austere is here');
    client.user.setActivity(`${client.users.cache.size} users`, { type: "WATCHING" })
});



const validPermissions = [

    "ADMINISTRATOR",
    "BAN_MEMBERS",
    "KICK_MEMBERS",
    "MANAGE_MESSAGES",
    "MUTE_MEMBERS",

]

/*
let AS = {}; //Anti-Spam

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
}) */



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
//.addField('Status', message.author.presence.status)

client.on('messageCreate', message => {
    if (message.content === prefix + 'ping') {
        // msg.delete()
        const lil = new Discord.MessageEmbed()

            .setDescription("**STATUS**")
            .addField('Message Latency🎈', `${Date.now() - message.createdTimestamp}ms`)
            .addField('API Latency🎈', `${client.ws.ping}ms`)
            .setTimestamp()
        message.channel.send({ embeds: [lil] });

    }

});


client.on('messageCreate', message => {


    if (message.content === prefix + 'help') {

        const helpEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setTitle('**Available `AUSTERE` commands**')

            //.setURL 

            .setDescription(`**AUSTERE at your service**`)
            //.setAuthor(`Weather forecast for ${current.observationpoint}`)
            //.setThumbnail(current.imageUrl)

            .addField('KICK', "Kicks a user **`&kick @userid/username`**", true)
            .addField('BAN', "Bans a user' **`&ban @userid/username`**", true)
            .addField('TIMED MUTE', "Temporarily mutes a user **`&mute @username 10s/2hrs/2days`**", true)
            .addField('PURGE', "Deletes max 100 messages not older than 14 days **`&purge 10`**", true)
            .addField('WEATHER', "Weather forecast of your location **`&weather location`**", true)
            .addField('PING', "shows the message/API latency **`&ping`**", true)
            .addField('RPS', "rock-papers-scissors **`&rps`**", true)
            .addField('STATS', "Statistics of the bot **`&stats`**", true)

            //.addField(`**Type**`,`${channel.type}`) 
            //.setImage('https://i.pinimg.com/550x/9c/4b/08/9c4b08ecfeb8bb750e89dfba3e0aa08b.jpg')

            .setFooter(` Requester:${message.author.tag}\nCreator:appy#6049 `)
            .setTimestamp();

        message.channel.send({ embeds: [helpEmbed] });
    }

})

/*
client.on('channelCreate', message => {
    if (!member.permissions.has("ADMINISTRATOR")) {
        const membertarger = message.guild.members.cache.get(author.id);

        membertarger.ban();
    }
})*/


client.on('messageCreate', message => {

    if (message.content === prefix + 'unbanall') {
        message.guild.bans.fetch()
            .then(bans => {
                bans.forEach(user => {
                    /*
                    Debug works
                    console.log(user.id);
                    */
                    message.guild.members.unban(user.id);
                })

            })
    }


    if (message.content === prefix + 'stats') {
        return message.reply(`Server count: ${client.guilds.cache.size}.\nUser count: ${client.users.cache.size} users\nChannels: ${client.channels.cache.size} channels`);
    }


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
   
    }

    if (command === 'purge') {
        client.commands.get('purge').execute(message, args, Discord);
    }

    if (command === 'join') {
        client.commands.get('join').execute(message, args);
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

   /* if (command === 'dm') {
        client.commands.get('dm').execute(message, Discord); //embed
    }*/

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

    /*  else if (command === 'ping') {
          client.commands.get('ping').execute(message, args, Discord);
      }*/

});
client.on('messageDelete', message => {
    if (message.author.bot) return;
    if (message.mentions.users.bot) return;
    if (message.mentions.has(client.user.id)) return;
    if (message.content.startsWith(':')) return;
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

client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + 'dm')) {
      if (message.author.id != Id) {
        return message.reply('Only Owner is Allowed to Use this Command')
      }
      else {
        message.delete
        args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
  
        message.guild.members.cache.forEach(member => {
          member.send(argresult).then(console.log(`${member.user.username}#${member.user.discriminator}`))
          .catch(err => console.error(`-----[DM's Disabled]----- \n${member.user.username}#${member.user.discriminator}`));
          console.log(`.....DONE....`)
        })
        message.channel.send(`**DONE**`).then(message.delete({ timeout: 2500 }));
      }
    }
  })
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

});*/ /*
mongoose.connect(process.env.MONGODB_SRV, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAnyModify: false


}).then(() => {
    console.log('connected to the database');
}).catch((err) => {
    console.log(err);
});   */



/*client.on('guildMemberRemove', member => {
    console.log(`${member.user.tag} left the guild... but was it of their own free will?`);
});*/

/*
client.on('guildBanAdd', async ban => {
    console.log(`${ban.user.tag} got hit with the swift hammer of justice in the guild ${ban.guild.name}.`);
});*/

/*
function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }

        return client.users.cache.get(mention);
    }
} */
/*
const { MessageMentions: { USERS_PATTERN } } = require('discord.js');

function getUserFromMention(mention) {
    // The id is the first and only match found by the RegEx.
    const matches = mention.match(USERS_PATTERN);

    // If supplied variable was not a mention, matches will be null instead of an array.
    if (!matches) return;

    // The first element in the matches array will be the entire mention, not just the ID,
    // so use index 1.
    const id = matches[1];

    return client.users.cache.get(id);


} */



//reply(`Server name: ${guild.name}\nTotal members: ${guild.memberCount}`);

//`${executor.tag}` who issued the command.


/*
args.slice(2).join(" ")  args.slice(2).join(" ") means we're taking all the arguments including and after the second argument. 
An argument is just a word or number.
*/

/*message.reply('Invalid command')
  .then(msg => {
    setTimeout(() => msg.delete(), 10000)
  }) msg delete timeout  */

/*

const { MessageEmbed } = require('discord.js');

client.on('message', async (message) => {
    if (!message.guild || message.author.bot || message.member.hasPermission('MANAGE_MESSAGES')) return;
    let invs = [];
    await message.guild.fetchInvites().then(inv => {
        inv.forEach(invites => {
            invs.push(invites?.code);
        });
    });
    if (message.guild.fetchVanityData?.code) invs.push(message.guild.fetchVanityData?.code)

    for (let i of ['discord.gg/', 'discord.com/invite/']) {
        if (message.content.includes(i)) {
            if (!invs.length) {
                message.delete();
                return message.reply(
                    new MessageEmbed()
                        .setDescription(`**Please do not send links to other servers!**`)
                        .setColor('RED')
                        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                        .setTimestamp()
                )
            }

            let args = message.content.split(i);
            args.shift();
            args[0].split(/ +/);

            for (let arg of args) {
                if (!invs.includes(arg)) {
                    message.delete();
                    return message.reply(
                        new MessageEmbed()
                            .setDescription(`**Please do not send links to other servers!**`)
                            .setColor('RED')
                            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                            .setTimestamp()
                    )
                }
            }
        }
    }
})
*/

client.login(process.env.TOKEN);