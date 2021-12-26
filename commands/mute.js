

const { CommandInteraction } = require('discord.js');
const ms = require('ms');



module.exports = {

    name: 'mute',
    description: "mute a member",



    execute(message, args, Discord) {

        const target = message.mentions.users.first() || message.mentons.members.first();
        if (message.member.permissions.has("ADMINISTRATOR")) {
            if (!args[0]) return message.reply("pls enter member id to be muted");

            if (target) {

                let mainRole = message.guild.roles.cache.find(role => role.name === '╭───𒌋「🜲・MEMBERS」');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');


                let memberTarget = message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(target.id);

                if (!args[1]) {

                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                    return

                }


                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

                setTimeout(function () {


                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);

                }, ms(args[1]));


            }
        }

        else {
            // message.channel.send("`\ bin perm tum beshrm\`");
            const idk = new Discord.MessageEmbed()

                .setColor('#40E0D0')
                .setTitle("bin perm tum beshrm<:emoji_50:915512548869148692>")
            message.channel.send({ embeds: [idk] });
        }

    }
}