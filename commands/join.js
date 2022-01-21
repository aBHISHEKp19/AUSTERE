const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
    name: 'join',
    description: 'Joins ',
    async execute(message, args) {

       // if (!message.member.voice.channel.id) return message.channel.send('You need to be in a channel to execute this command!');
        if (!args[0]) return message.channel.send("lol");

        const connection = joinVoiceChannel({

            selfDeaf: message.guild.me.voice.setDeaf(false),
            channelId: message.member.voice.channel.id,

            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,

        })

        
        // const connection = await channel.join();


    }
}