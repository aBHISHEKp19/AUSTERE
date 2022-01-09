/*
module.exports = {
    name: 'ping',
    description: 'checks pings',

    callback: (message , client) => {

        message.reply('Calculating ping...').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            resultMessage.edit(`Bot latency:${ping} , API Latency: ${client.ws.ping}`)
        })

    },


}*/