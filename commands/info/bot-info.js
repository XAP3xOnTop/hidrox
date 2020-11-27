const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "bot-info",
    category: "bot",
    description: "Info about bot",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('#000000')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Watching ${client.guilds.cache.size} server(s).`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Watching ${client.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Server Users',
                    value: `Watching ${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: '📟 Server Info',
                    value: `Cores: ${os.cpus().length}`,
                    inline: true
                },
                {
                    name: '💊 Support server',
                    value: `link: https://discord.gg/KKrjZSh`,
                    inline: true
                }
            )
            .setFooter(`Request By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}