/*const { MessageEmbed: RichEmbed } = require("discord.js");

const Discord = require('discord.js');
const { Client } = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

const server = client.guilds.cache.get('885748611105832960')
module.exports = {

    name: 'dm',
    description: "mass dm members",

    async execute(message, Discord) {
        //  if(message.author.id !== whitelist.id && message.author.id !== whitelist.id2) return message.reply("You are not Whitelisted dumbass.")
      //  if (!server) return;
        let timedOut = false

        const { channel, author } = message

        const isFromAuthor = message => message.author.id == author.id;

        const options = {
            max: 1,
            time: 60 * 1000
        }

        await message.channel.send('Message to Send?')
        const firstColl = await channel.awaitMessages(isFromAuthor, options)

        if (firstColl.size > 0) {
            const title = firstColl.first().message.content

            message.guild.members.cache.forEach(member => {
                const hmmm = new RichEmbed()
                    .setTitle(title) .setColor('RANDOM') .setTimestamp();
              
                if (member.id !== client.user.id && member.presence.status === 'online' && member.presence.status === 'idle' && member.presence.status === 'dnd' && !member.user.bot)
                    member.send({ embeds: [hmmm] });

                // member.send(title).catch(() => { });
            });

        } else timedOut = true;

        if (timedOut)
            message.channel.send('Command canceled (timed out)')
    }
}

*/