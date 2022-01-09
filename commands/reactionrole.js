const { MessageEmbed } = require('discord.js');
const { client } = require("discord.js");
module.exports = {
    name: 'reactionrole',
    description: 'reactions',

    async execute(message, args, client, Discord) {

        const channel = '928278615181897748';
        const appyrole = message.guild.roles.cache.find(role => role.name === "Appy");
        const milkyrole = message.guild.roles.cache.find(role => role.name === "Milky");
        const appyemoji = ':blue_heart:';
        const milkyemoji = ':heart:';

        const roleembed = new MessageEmbed()
            .setColor('#e42643')
            .setTitle('React to get your role')
            .setDescription('Choose any role you wish for amongst the below ones \n\n'
                + `${appyemoji} for appy role \n`
                + `${milkyemoji} for milky role`);


        let newMessageEmbed = await message.channel.send({ embeds: [roleembed] });
        newMessageEmbed.react(appyemoji);
        newMessageEmbed.react(milkyemoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === appyemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(appyrole);
                }
                if (reaction.emoji.name === milkyemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(milkyrole);
                }
            }
            else {
                return;
            }
        
        });
        
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === appyemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(appyrole);
                }
                if (reaction.emoji.name === milkyemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(milkyrole);
                }
            }
            else {
                return;
            }
        
        });

        

    }
}