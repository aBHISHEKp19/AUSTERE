module.exports = {

    name: 'kick',
    description: "kick a member",

    execute(message, args, Discord) {


        const member = message.mentions.users.first();


        if (message.member.permissions.has("ADMINISTRATOR")) {
            if (!args[0]) return message.reply("pls enter member id to be kicked");
            const membertarger = message.guild.members.cache.get(member.id);

            const newEmbed = new Discord.MessageEmbed()

                .setColor('#DFFF00')
                 .setTitle(`kick kardiya ${member.username} ko`)  .setTimestamp()
                 //.setTitle(`${member.avatar}`)

                //.setURL 

               // .setDescription(`${member.avatar}`);
                //.addField("UserID", member.userID)
               // .addFields(

                   // { name: 'hello', value: 'how are you' }
                 
                    // { name: 'hello', value: 'how are you' },
               // )


                //.setImage('https://i.pinimg.com/550x/9c/4b/08/9c4b08ecfeb8bb750e89dfba3e0aa08b.jpg')

                //.setFooter(member.id)
               
            message.channel.send({ embeds: [newEmbed] });

            
            membertarger.kick();
           // message.channel.send(`kick kardiya <@${membertarger.user.id}> ko`);
        }



        else {
            message.channel.send("`\ Aapko kick krdu?🤨\`");

        }


    }

}