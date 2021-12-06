module.exports = {

        name: 'purge',
        description: "clear messages",
        permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],

        async execute(message, args) {





                if (message.member.permissions.has("MANAGE_MESSAGES", "ADMINISTRATOR")) {

                        if (!args[0]) return message.reply("pls enter no. of msgs to be cleared");
                        if (isNaN(args[0])) return message.reply("pls enter a real no.!!");

                        if (args[0] > 100) return message.reply("you cannot clear more than 100 msgs");
                        if (args[0] < 1) return message.reply("must del atleast one msg");

                        await message.channel.bulkDelete(parseInt(args[0]) + 1)

                }



                else {
                        message.channel.send("`\perm leke aao pehle😊\`")
                }
        }


}