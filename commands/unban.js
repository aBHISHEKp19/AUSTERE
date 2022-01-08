
/*module.exports = {

    name: 'unban',
    description: "unban a member",
    async execute(message, args) {
       
        const banList = await message.guild.bans.fetch();
        
        
         

        if (message.member.permissions.has("ADMINISTRATOR")) {
            
            const bannedUser = banList.find(user => user.id === args[1]);

            if (!args[0]) return message.reply("pls enter member id to be unbanned");

            if(!bannedUser) return message.reply("User not banned")

            message.guild.members.unban(bannedUser.id);
            message.channel.send(`unbanned <@${bannedUser.id}> `)
        }


        else {
            message.channel.send("`\perm hai nhi chale hai unban karne😏\`");

        }


    }

}*/

//const Discord = require("discord.js");

/*module.exports = {
  name: "unban",
  aliases: [],
  execute(client, message, args, data, db) {
  if (!message.member.hasPermission("BAN_MEMBERS"))
     {
      return;
    }
  //  const reason = args.slice(1).join(' ');
  //  client.unbanReason = reason;
    client.unbanAuth = message.author;

    const user = args[0];

     if (reason.length < 1) {
        return message.channel.send({embed: {
                    color: 16734039,
                    description: "You must supply a reason for the unban."
                }})
    } else if (!user) {
        return message.channel.send({embed: {
                    color: 16734039,
                    description: "You must supply a User Resolvable, such as a user id."
                }})
    }
    message.guild.members.unban(user);
        message.channel.send({embed: {
                    color: 16734039,
                    description: "User has been unbaned! 😱"
                }})
  }

  
}*/
/*
if(msg.content.startsWith(`${prefix}unbanall`)) {
    msg.guild.fetchBans()
    .then(bans => {
        bans.forEach(user => {
            /*
            Debug works
            console.log(user.id);
            */
        /*    msg.guild.unban(user.id);
        });
    })
    .catch(e => console.log(e));
}*/
