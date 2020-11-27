const { MessageEmbed } = require('discord.js');
const { HeadAvatar, AvatarRendered, SkinRendered } = require('minestats');
const { NameHistory, UsernameToUUID } = require('minestats');
module.exports = {
  name: "cape",
  category: "minecraft",
    run: async (client, message, args) => {
        if (!args[0]) {
            const embed = new MessageEmbed()
                .setTitle('Type minecraft username!')
                .setDescription('hx!cape <username>')
                .setColor('#a81600');
            return message.channel.send(embed)
        };

                const embed = new MessageEmbed()
                    .setTitle('Minecraft Cape')
                    .setImage(`http://s.optifine.net/capes/${args}.png`)
                message.channel.send(embed)
    }
}