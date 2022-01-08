module.exports = {

    name: 'ban',
    description: "ban a member",
    execute(message, args, Discord) {

        const member = message.mentions.users.first() || message.mentions.members.first();


        if (message.member.permissions.has("ADMINISTRATOR")) {

            if (!args[0]) return message.reply("pls enter member id to be banned");

            const membertarger = message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(member.id);

            if (membertarger) return message.send("uhhun");

            const newEmbed = new Discord.MessageEmbed()

                .setColor('#DFFF00')
                .setTitle(`Ban kardiya ${membertarger.user.username} ko`)
                .addField("ID Created:", `${membertarger.user.createdAt}`)
                .addField("Joined the server on:", `${membertarger.joinedAt}`)
                .setThumbnail(membertarger.displayAvatarURL({ dynamic: true }))
                .setFooter(`User ID: ${membertarger.id}`)
                .setTimestamp();

            message.channel.send({ embeds: [newEmbed] });
            // message.channel.send(`banned <@${membertarger.id}> `)
            //  if (membertarger) return message.channel.send('USER ALREADY BANNED');
            membertarger.ban();


        }


        else {
            // message.channel.send("`\perm hai nhi chale hai ban karne😏\`");
            const ye = new Discord.MessageEmbed()

                .setColor('#40E0D0')
                .setTitle("perm hai nhi chale hai ban karne<:WHITE_Boi_BIG_TEETH:844646312867659847>")
            message.channel.send({ embeds: [ye] });
        }


    }

}