const { MessageEmbed } = require('discord.js');
module.exports = {
    name : 'avatar',
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle('Your avatar:')
            .setImage(message.author.displayAvatarURL())
        message.channel.send(embed)
    }
}