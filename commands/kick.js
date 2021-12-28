module.exports = {

    name: 'kick',
    description: "kick a member",

    execute(message, args, Discord) {


        const member = message.mentions.users.first() || message.mentions.members.first();
        //const author = message.author

        const uhhun = new Discord.MessageEmbed()

            .setColor('#40E0D0')
            .setTitle("Aapko kick krdu? <:whatislife:844660332978765854>")
    

        if (message.member.permissions.has("ADMINISTRATOR")) {


            if (!args[0]) return message.reply("pls enter member id to be kicked");
            // const membertarger = message.guild.members.cache.get(member.id) || message.guild.members.cache.get(args[0]);
            const membertarger = message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(member.id);

            const newEmbed = new Discord.MessageEmbed()

                .setColor('#DFFF00')
                .setTitle(`kick kardiya ${membertarger.user.username} ko`)


                //.setURL 
 
                //.addField("Tag", `${member.userTag}`)
                .addField("ID Created:", `${membertarger.user.createdAt}`)
                .addField("Joined the server on:", `${membertarger.joinedAt}`)
                //.addField("Avatar", `${member.avatar}`)
                //.addField("User status:", `${membertarger.presence.status}`)
                //.addField("User Age", `${membertarger.userAge}`)
                //.addField("User ID:", `${membertarger.id}`)
                .setThumbnail(membertarger.displayAvatarURL({ dynamic: true }))

                //.addField("Moderator", `${author.username}`)

                //.setImage('https://i.pinimg.com/550x/9c/4b/08/9c4b08ecfeb8bb750e89dfba3e0aa08b.jpg')

                .setFooter(`User ID: ${membertarger.id}`)
                .setTimestamp();

            message.channel.send({ embeds: [newEmbed] });


            membertarger.kick();
            // message.channel.send(`kick kardiya <@${membertarger.user.id}> ko`);
        }



        else {


            message.channel.send({ embeds: [uhhun] });

        }


    }

}