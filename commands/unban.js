
module.exports = {

    name: 'unban',
    description: "unban a member",
    async execute(message, args) {
       
        const banList = await message.guild.bans.fetch();
        
        
         

        if (message.member.permissions.has("ADMINISTRATOR")) {
            
            const bannedUser = banList.find(user => user.id === args[0]);

            if (!args[0]) return message.reply("pls enter member id to be unbanned");

            if(!bannedUser) return message.reply("User not banned")

            message.guild.members.unban(bannedUser.id);
            message.channel.send(`unbanned <@${bannedUser.id}> `)
        }


        else {
            message.channel.send("`\perm hai nhi chale hai unban karne😏\`");

        }


    }

}