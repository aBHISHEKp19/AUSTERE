/*module.exports = {

    name: 'unban',
    description: "ban a member",
    execute(message, args, Discord) {

        const member = message.mentions.users.first() || message.mentions.members.first();
        

        if (message.member.permissions.has("ADMINISTRATOR")) {
            const membertarger = message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(member.id);
            if (!args[0]) return message.reply("pls enter member id to be banned");

         
           /* const newEmbed = new Discord.MessageEmbed()

                .setColor('#DFFF00')
                .setTitle(`Ban kardiya ${membertarger.username} ko`)
                .addField("Created:", `${membertarger.createdAt}`)
                .addField("Joined the server on:", `${membertarger.joinedAt}`)
                .setFooter(`User ID: ${membertarger.id}`)
                .setTimestamp();

            message.channel.send({ embeds: [newEmbed] });*/
       /*  message.channel.send(`unbanned <@${membertarger.id}> `)

            message.guild.members.unban(member.id)

        


        }


        else {
            // message.channel.send("`\perm hai nhi chale hai ban karne😏\`");
            const ye = new Discord.MessageEmbed()

                .setColor('#40E0D0')
                .setTitle("perm hai nhi chale hai ban karne<:WHITE_Boi_BIG_TEETH:844646312867659847>")
            message.channel.send({ embeds: [ye] });
        }


    }

} */