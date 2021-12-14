module.exports = {

    name: 'embed',
   // aliases: ['HI', 'Hi'],
    description: 'embeds!!',

   async execute(message, Discord) {

        const newEmbed = new Discord.MessageEmbed()

            .setColor('#304281')
            .setTitle('NAMASTE')

            //.setURL 

            // .setDescription('embed')

            .addField(

                { name: 'hello', value: 'how are you' }






                // { name: 'hello', value: 'how are you' },



            )


            .setImage('https://i.pinimg.com/550x/9c/4b/08/9c4b08ecfeb8bb750e89dfba3e0aa08b.jpg')

            .setFooter('bye now');
        message.channel.send(newEmbed);
            

    }
}