/* const { Message } = require('discord.js');
const ms = require('ms');

module.exports =
{

    name: 'newmute',
    description: "mute a member",
    /**
     * 
     * @param {Message} message 
 
     */
    /*execute(message, args) {

        const member = message.mentions.users.first();

        if (message.member.permissions.has("ADMINISTRATOR")) {
            if (!args[0]) return message.reply("pls enter member id to be muted");


            const role = message.guild.roles.cache.find(role => role.name.toLowerCase === 'Muted')
            if (!role) return message.channel.send('Create a mute role first');


            if (!args[1]) {
                await member.roles.add(role)
                message.channel.send(`<@${member.user.id}> has been muted`);
            }

                member.roles.add(role);
                message.channel.send(`<@${member.user.id}> has been muted for ${ms(ms(args[1]))}`);


                setTimeout(function () {

                    member.roles.add(role);

                }, ms(args[1])); 
            
        }


        else {
            message.channel.send("`\ bin perm tum beshrm\`");
        }
    }
} */