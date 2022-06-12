module.exports = {

    name: 'hi',
    // aliases: ['HI', 'Hi'],
    description: 'embeds!!',

    async execute(message, Discord) {

        const newEmbed =  new Discord.MessageEmbed()

            .setColor('#da004e')
           // .setTitle('NAMASTE')

            //.setURL 

            // .setDescription('embed')

            .addFields(

                {name: 'hello', value: 'how are you'}

                // { name: 'hello', value: 'how are you' },
               // { name: 'Inline field title', value: 'Some value here', inline: true },
               //.addField(`**Type**`,`${channel.type}`) 
            )


            .setImage('https://i.pinimg.com/550x/9c/4b/08/9c4b08ecfeb8bb750e89dfba3e0aa08b.jpg')

            //.setFooter('https://i.gifer.com/origin/4a/4a680d35606f8fd5fd17898b53650db2_w200.webp');
        message.channel.send({embeds: [newEmbed]});


    }
}