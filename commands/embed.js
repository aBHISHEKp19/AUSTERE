module.exports = {

    name: 'hi',
    aliases: ['HI', 'Hi'],
    description: 'embeds!!',

    execute(message, args, Discord) {

        const newEmbed = new Discord.MessageEmbed()


            .setColor('#304281')
            .setitle('NAMASTE')

            //.setURL 

            // .setDescription('embed')

            .addField(

                { name: 'hello', value: 'how are you' },






                // { name: 'hello', value: 'how are you' },



            )


            .setImage('https://i.pinimg.com/550x/9c/4b/08/9c4b08ecfeb8bb750e89dfba3e0aa08b.jpg')

            .setFooter('bye now');
        message.channel.send(newEmbed);

    }
}