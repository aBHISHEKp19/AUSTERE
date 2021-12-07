module.exports = {

    name: 'unmute',
    description: "unmute a member",

    execute(message, args) {

        const target = message.mentions.users.first();

        if (message.member.permissions.has("ADMINISTRATOR")) {
            if (!args[0]) return message.reply("pls enter member user id to be unmuted");

            if (target) {

                let mainRole = message.guild.roles.cache.find(role => role.name === '╭───𒌋「🜲・MEMBERS」');
                let muteRole = message.guild.roles.cache.find(role => role.name ===  'Muted');


                let memberTarget = message.guild.members.cache.get(target.id);


                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`\`<@${memberTarget.user.id}> has been umuted\``);

            }
        }

        else {
            message.channel.send('cannot find that member');
        }

    }
}