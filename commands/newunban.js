

module.exports = {
    name: 'newunban',
    description: "This unbans a user",
    execute(message, args) {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            if (!isNaN(args[0])) {
                const bannedMember = message.guild.members.cache.get(args[0]) // Get the `member` property instead to recall later.
                var reason = args.slice(1).join(" ");
                if (!reason) {
                    reason = "No reason given!"
                }
                if (bannedMember) {
                    bannedMember
                    message.guild.members.unban(bannedMember.id, reason)
                        .then(() => {
                            embed.setDescription(`Successfully unbanned **${bannedMember.user.tag}**`); // `user` is undefined.
                            message.channel.send(embed);
                        })
                        .catch(err => {
                            embed.setDescription('I was unable to unban the member');
                            message.channel.send(embed);
                            console.error(err);
                        });
                } /*else {
                    embed.setDescription("That user isn't in this guild!");
                    message.channel.send(embed);
                }*/
            } /*else {
                embed.setDescription("You need to provide an user ID to unban");
                message.channel.send(embed);
            }*/
        } /*else {
            embed.setDescription("You do not have `BAN_MEMBERS` permissions to unban this member");
            message.channel.send(embed);
        }*/
    }
}