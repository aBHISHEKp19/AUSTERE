module.exports = {

    name: 'kick',
    description: "kick a member",

    execute(message, args) {


        const member = message.mentions.users.first();







        if (message.member.permissions.has("ADMINISTRATOR")) {
            if (!args[0]) return message.reply("pls enter member id to be kicked");
            const membertarger = message.guild.members.cache.get(member.id);
            membertarger.kick();
            message.channel.send( `<@${membertarger.user.id}> kicked`);
        }



        else {
            message.channel.send("`\ Aapko kick krdu?🤨\`");

        }


    }

}