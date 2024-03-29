module.exports = {
    name: 'rps',
    description: 'Rock Paper Scissors.',
    async execute(client, message, Discord) {
        let hand = [{ txt: 'Rock', emoji: '✊', index: 0 }, { txt: 'Paper', emoji: '🤚', index: 1 }, { txt: 'Scissors', emoji: '✌️', index: 2 }]; // Defining Moves
      //  let hand1 = hand[Math.floor(Math.random() * 3)]; // Making a random move
        let hand1 = [{ txt: 'Rock', emoji: '✊', index: 0 }, { txt: 'Paper', emoji: '🤚', index: 1 }, { txt: 'Scissors', emoji: '✌️', index: 2 }]; // Defining Moves
        let rpsMsg = await message.channel.send({ // Prompting user to make a move
            embeds: [
                new Discord.MessageEmbed() // RPS embed
                    .setColor('RANDOM')
                    .setTitle('Rock Paper Scissors')
                    .setDescription('Choose a handsign')
            ],
            components: [
                new Discord.MessageActionRow() // Rock, paper, scissors buttons
                    .addComponents(
                        new Discord.MessageButton()
                            .setCustomId(`rps_rock`)
                            .setLabel("✊ Rock")
                            .setStyle('PRIMARY'),
                        new Discord.MessageButton()
                            .setCustomId(`rps_paper`)
                            .setLabel("🤚 Paper")
                            .setStyle('PRIMARY'),
                        new Discord.MessageButton()
                            .setCustomId(`rps_scissors`)
                            .setLabel("✌️ Scissors")
                            .setStyle('PRIMARY')
                    )
            ]
        });

        let win = 0; // 0 = Loss; 1 = Tie; 2 = Win
        let userMove;
        
        
        let f = async (interaction) => {
         https://accounts.google.com/b/0/AddMailService   if (!interaction.isButton()) return; // Checking if the interaction is a button
            if (interaction.customId.startsWith('rps')) {
                await interaction.deferUpdate() // Deffering the interaction
                let move = interaction.customId.split('_')[1]
                userMove = hand.find(v => v.txt.toLowerCase() == move)
                switch (move) { // Calculating if player wins, losses, or a tie
                    case 'rock':
                        win = hand1.index == 0 ? 1 : (hand1.index == 1 ? 0 : 2); break;
                    case 'paper':
                        win = hand1.index == 0 ? 2 : (hand1.index == 1 ? 1 : 0); break;
                    case 'scissors':
                        win = hand1.index == 0 ? 0 : (hand1.index == 1 ? 2 : 1); break;
                }

                let embed = rpsMsg.embeds[0];
                // Editing the embed
                embed.description = `I chose ${hand1.txt}! ${win == 0 ? 'You lost!' : (win == 1 ? 'We tied!' : 'You win!')} (${userMove.emoji} ${win == 0 ? '<' : (win == 1 ? '=' : '>')} ${hand1.emoji})`;
                
                let components = rpsMsg.components
                // Disabling all buttons
                components[0].components.forEach(comp => {
                    if (comp.customId == interaction.customId) { comp.disabled = true; comp.style = 'SECONDARY' }
                    else comp.disabled = true
                })
                
                // Editing the message
                interaction.message.edit({ embeds: [embed], components: components })
                
                // Removing this event.
                client.off('interactionCreate', f)
            }
        }

        client.on('interactionCreate', f) // Creates the event
    }
}