const { MessageEmbed } = require('discord.js');

let deleteAmount = '2'

module.exports = {
    name: 'temp-text',
    run: async (client, message, args) => {

        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send(`You dont have permission!`)
        }
        if (!args[0]) {
            return message.channel.send(`Select text!`)
        }
        await message.channel.send(`${args}`)
        await message.channel.bulkDelete(deleteAmount, true);
    }
}