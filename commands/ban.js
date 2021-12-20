module.exports = {

    name: 'ban',
    description: "ban a member",

    execute(message, args, Discord) {


        const member = message.mentions.users.first();




        if (message.member.permissions.has("ADMINISTRATOR")) {
            const membertarger = message.guild.members.cache.get(member.id);
            const newEmbed = new Discord.MessageEmbed()

                .setColor('#DFFF00')
                .setTitle(`ban kardiya ${member.username} ko`).setTimestamp()

            if (!args[0]) return message.reply("pls enter member id to be banned");

            membertarger.ban();
            // message.channel.send(` ban kardiya <@${membertarger.user.id}> ko`);
            message.channel.send({ embeds: [newEmbed] });

        }


        else {
            message.channel.send("`\perm hai nhi chale hai ban karne😏\`");

        }


    }

}