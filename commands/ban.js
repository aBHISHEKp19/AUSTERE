module.exports = {

    name: 'ban',
    description: "ban a member",
    
    execute(message, args) {


        const member = message.mentions.users.first();

        


        if (message.member.permissions.has("ADMINISTRATOR")) {
           
            if (!args[0]) return message.reply("pls enter member id to be banned");
                const membertarger = message.guild.members.cache.get(member.id);
                membertarger.ban();
                message.channel.send('ban krdiya' `<@${membertarger.user.id}>`);
            
        }


        else {
            message.channel.send("`\perm hai nhi chale hai ban karne😏\`");

        }


    }

}