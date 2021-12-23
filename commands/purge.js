module.exports = {

        name: 'purge',
        description: "clear messages",


        async execute(message, args, Discord) {





                if (message.member.permissions.has("ADMINISTRATOR")) {

                        if (!args[0]) return message.reply("pls enter no. of msgs to be cleared");
                        if (isNaN(args[0])) return message.reply("pls enter a real no.!!");

                        if (args[0] > 200) return message.reply("you cannot clear more than 100 msgs");
                        if (args[0] < 1) return message.reply("must delete atleast one msg");

                        await message.channel.bulkDelete(parseInt(args[0]) + 1)

                }



                else {
                        const umm = new Discord.MessageEmbed()

                                .setColor('#40E0D0')
                                .setTitle("perm leke aao pehle <:abhi_ka_pizza:844790630784827412> ")
                        message.channel.send({ embeds: [umm] });
                        // message.channel.send("`\perm leke aao pehle😊\`")
                }
        }


}