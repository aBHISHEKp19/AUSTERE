module.exports = {

    name: 'unban',
    description: "unban a member",
    execute(message, args, Discord) {

        //const member = message.mentions.users.first() || message.mentions.members.first();
       
        let messageArray = message.content.split(" ")

        if (message.member.permissions.has("ADMINISTRATOR")) {
            let args = messageArray.slice(1);
            if (message.author.bot || message.channel.type === "dm") return;


            let target = message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
            // let cmd = messageArray[0];



             //target =  bot.users.fetch(args[0])

           // if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!")
           // if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!")

            const reason = args[1] || "There was no reason!";

            message.guild.members.unban(target, reason)

            message.channel.send(`${target} has been unbanned from the server!`)


            /* const newEmbed = new Discord.MessageEmbed()
            
                            .setColor('#DFFF00')
                            .setTitle(`Ban kardiya ${membertarger.tag} ko`)
                            .addField("Created:", `${membertarger.createdAt}`)
                            .addField("Joined the server on:", `${membertarger.joinedAt}`)
                            .setFooter(`User ID: ${membertarger.id}`)
                            .setTimestamp();
            
                        message.channel.send({ embeds: [newEmbed] });
                        // message.channel.send(`banned <@${membertarger.id}> `) */
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