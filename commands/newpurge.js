module.exports = {

    name: 'newpurge',
    description: "clear messages",
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],

    async execute(message, args,) {


        const member = message.mentions.members.first();
        const messages = message.channel.messages.fetch();


        if (message.member.permissions.has("ADMINISTRATOR")) {
            if (member) {
                const userMessages = (await messages).filter((m) => m.author.id === member.id);

                await message.channel.bulkDelete(parseInt(userMessages[0] + 1));

            }

            else {


                if (!args[0]) return message.reply("pls enter no. of msgs to be cleared");
                if (isNaN(args[0])) return message.reply("pls enter a real no.!!");

                if (args[0] > 100) return message.reply("you cannot clear more than 100 msgs");
                if (args[0] < 1) return message.reply("must del atleast one msg");

                await message.channel.bulkDelete(parseInt(args[0]) + 1)
                //message.channel.send("`\perm leke aao pehle😊\`")


            }
        }
        else {
            message.channel.send("`\perm leke aao pehle😊\`")
        }
    }

} 