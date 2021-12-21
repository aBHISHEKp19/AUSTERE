module.exports = {

    name: 'ban',
    description: "ban a member",

    execute(message, args, Discord) {


        const member = message.mentions.users.first();




        if (message.member.permissions.has("ADMINISTRATOR")) { 
           
            if (!args[0]) return message.reply("pls enter member id to be banned");
           
           
            const membertarger = message.guild.members.cache.get(member.id);
            const newEmbed = new Discord.MessageEmbed()

            .setColor('#DFFF00')
            .setTitle(`Ban kardiya ${member.username} ko`)
            .addField("Created:", `${member.createdAt}`)
            .addField("Joined the server on:", `${membertarger.joinedAt}`)
            .setFooter(`User ID: ${membertarger.id}`)
            .setTimestamp();

        message.channel.send({ embeds: [newEmbed] });

            if (!args[0]) return message.reply("pls enter member id to be banned");

            membertarger.ban();
        

        }


        else {
            message.channel.send("`\perm hai nhi chale hai ban karne😏\`");

        }


    }

}