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



        

    }
}