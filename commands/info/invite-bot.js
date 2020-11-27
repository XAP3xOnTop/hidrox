const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "invite-bot",
    category: "bot",
    description: "Invite link for bot.",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle('Invite link')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=771321462535618571&permissions=8&scope=bot')
            .setDescription('Click to title.')
            .setFooter(`Request By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}