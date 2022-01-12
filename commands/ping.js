/*const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'ping',
    description: 'checks pings',

    execute(message, args, Discord) {


        async (msg) => {
            // msg.delete()
            const lil = new MessageEmbed()

                .setDescription("**STATUS**")
                .addField('Message Latency🎈', `${msg.createdTimestamp - message.createdTimestamp}ms`)
                .addField('API Latency🎈', `${client.ws.ping}ms`)
                .setTimestamp()
            msg.edit({ embeds: [lil] });
        }
    }


}*/