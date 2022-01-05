module.exports = {
    name: 'reactionrole',
    description: 'reactions',

    execute(message, args, client, Discord) {

        const channel = '928278615181897748';
        const appyrole = message.guild.roles.cache.find(role => role.name === "Appy");
        const milkyrole = message.guild.roles.cache.find(role => role.name === "Milky");


    }


}